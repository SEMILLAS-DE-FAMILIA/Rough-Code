export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  title: string;
  description: string | null;
  price: number;
  img: string;
  stock: number;
  is_active: boolean;
  category_id: string | null;
  created_at?: string;
}