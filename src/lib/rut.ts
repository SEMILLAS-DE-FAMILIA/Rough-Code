/**
 * Utilidades para validar y formatear RUT chileno.
 */

// Limpia el RUT dejando solo dígitos y la K/k final
export function cleanRut(rut: string): string {
  return rut.replace(/[^0-9kK]/g, '').toUpperCase();
}

// Calcula el dígito verificador con el algoritmo módulo 11
function computeVerifier(rutBody: string): string {
  let sum = 0;
  let multiplier = 2;

  for (let i = rutBody.length - 1; i >= 0; i--) {
    sum += parseInt(rutBody[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const remainder = 11 - (sum % 11);
  if (remainder === 11) return '0';
  if (remainder === 10) return 'K';
  return String(remainder);
}

// Valida que el RUT tenga formato y dígito verificador correctos
export function isValidRut(rut: string): boolean {
  const clean = cleanRut(rut);
  if (clean.length < 2) return false;

  const body = clean.slice(0, -1);
  const verifier = clean.slice(-1);

  if (!/^\d+$/.test(body)) return false;

  return computeVerifier(body) === verifier;
}

// Formatea a XX.XXX.XXX-X para mostrar/enviar
export function formatRut(rut: string): string {
  const clean = cleanRut(rut);
  if (clean.length < 2) return clean;

  const body = clean.slice(0, -1);
  const verifier = clean.slice(-1);
  const bodyWithDots = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${bodyWithDots}-${verifier}`;
}