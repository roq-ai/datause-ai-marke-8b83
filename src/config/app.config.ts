interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Product Owner', 'Sales Manager'],
  tenantName: 'Organization',
  applicationName: 'DATAUSE AI marketplace',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
