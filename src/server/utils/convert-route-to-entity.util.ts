const mapping: Record<string, string> = {
  organizations: 'organization',
  products: 'product',
  reservations: 'reservation',
  sales: 'sales',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
