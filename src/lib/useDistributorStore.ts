import { create } from 'zustand';
import { supabase } from './supabaseClient';

interface DistributorProfile {
  company_name: string;
  email: string;
}

type DistributorStatus = 'checking' | 'guest' | 'pending' | 'approved';

interface DistributorStore {
  profile: DistributorProfile | null;
  prices: Record<number, number>;
  status: DistributorStatus;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  register: (data: { rut: string; company_name: string; phone: string; email: string; password: string }) => Promise<{ error: string | null }>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export const useDistributorStore = create<DistributorStore>((set, get) => ({
  profile: null,
  prices: {},
  status: 'checking',

  refresh: async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      set({ profile: null, prices: {}, status: 'guest' });
      return;
    }

    const { data: distRow } = await supabase
      .from('distributors')
      .select('company_name, active')
      .eq('user_id', session.user.id)
      .maybeSingle();

    if (distRow && distRow.active) {
      const { data: priceRows } = await supabase.rpc('get_distributor_prices');
      const priceMap: Record<number, number> = {};
      (priceRows || []).forEach((r: any) => {
        priceMap[r.variant_id] = r.price;
      });

      set({
        profile: { company_name: distRow.company_name, email: session.user.email || '' },
        prices: priceMap,
        status: 'approved',
      });
      return;
    }

    const { data: appRow } = await supabase
      .from('distributor_applications')
      .select('id')
      .eq('user_id', session.user.id)
      .maybeSingle();

    set({ profile: null, prices: {}, status: appRow ? 'pending' : 'guest' });
  },

  login: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };

    await get().refresh();

    if (get().status === 'pending') {
      await supabase.auth.signOut();
      set({ status: 'guest' });
      return { error: 'Tu solicitud todavía está en revisión. Te avisaremos cuando esté aprobada.' };
    }
    if (get().status === 'guest') {
      await supabase.auth.signOut();
      return { error: 'Esta cuenta no está registrada como distribuidor.' };
    }
    return { error: null };
  },

  register: async ({ rut, company_name, phone, email, password }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    if (!data.user) return { error: 'No se pudo crear la cuenta.' };

    const { error: appError } = await supabase.from('distributor_applications').insert({
      rut,
      company_name,
      phone,
      email,
      user_id: data.user.id,
    });
    if (appError) return { error: appError.message };

    await get().refresh();
    return { error: null };
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ profile: null, prices: {}, status: 'guest' });
  },
}));

// Mantiene la sesión sincronizada al cargar la página y entre pestañas
if (typeof window !== 'undefined') {
  useDistributorStore.getState().refresh();
  supabase.auth.onAuthStateChange(() => {
    useDistributorStore.getState().refresh();
  });
}