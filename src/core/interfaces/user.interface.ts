export interface ApiUserBy {
  id: string;
  name: string;
}

export interface ApiEpUser {
  id: string;
  name: string;
  isAdmin: boolean;
  accountId: string;
  pimId: number;
  customerId: string;
}

export interface ApiCpUser {
  id: string;
  name: string;
  isAdmin: boolean;
  accountId: string;
  pimId: number;
}

export enum PERMISSION_TYPE {
  VIEWER = 'Viewer',
  APPROVER = 'Approver',
  EDITOR = 'Editor',
  NA = 'NA',
}

export enum PERMISSION_MODULE {
  ACCOUNTING = 'accounting',
  ACCOUNTING_ACCOUNTING = 'accounting-accounting',
  APPROVALS = 'approvals',
  APPROVALS_APPROVAL = 'approvals-approval',
  APPROVALS_PROJECTCONVERSION = 'approvals-projectconversion',
  APPROVALS_SITEMOBILIZATION = 'approvals-sitemobilization',
  CALENDAR = 'calendar',
  CALENDAR_CALENDAR = 'calendar-calendar',
  CATALOGUE = 'catalogue',
  CATALOGUE_CALENDAR = 'catalogue-calendar',
  COMMUNITY = 'community',
  COMMUNITY_ACCOUNTS = 'community-accounts',
  DAM = 'dam',
  DAM_DAM = 'dam-dam',
  GLOBAL = 'global',
  GLOBAL_TIMESHEET = 'global-timesheet',
  NOTIFICATION = 'notification',
  NOTIFICATION_NOTIFICATION = 'notification-notification',
  PROCUREMENT = 'procurement',
  PROCUREMENT_APPROVAL1 = 'procurement-approval1',
  PROCUREMENT_APPROVAL2 = 'procurement-approval2',
  PROCUREMENT_PROCUREMENT = 'procurement-procurement',
  PROJECTS = 'projects',
  PROJECTS_BOQ = 'projects-boq',
  PROJECTS_CALL = 'projects-call',
  PROJECTS_CLIENTNUMBER = 'projects-clientnumber',
  PROJECTS_COMMUNICATIONS = 'projects-communications',
  PROJECTS_CONCEPTS = 'projects-concepts',
  PROJECTS_CUSTOMERCONTACTS = 'projects-customercontacts',
  PROJECTS_CUSTOMERPROFILING = 'projects-customerprofiling',
  PROJECTS_DETAILS = 'projects-details',
  PROJECTS_DOCUMENTS = 'projects-documents',
  PROJECTS_FINANCE = 'projects-finance',
  PROJECTS_INVOICES = 'projects-invoices',
  PROJECTS_LIST = 'projects-list',
  PROJECTS_MOODBOARD = 'projects-moodboard',
  PROJECTS_NOTES = 'projects-notes',
  PROJECTS_OVERVIEW = 'projects-overview',
  PROJECTS_PAYMENTS = 'projects-payments',
  PROJECTS_RESOURCEMANAGEMENT = 'projects-resourcemanagement',
  PROJECTS_RFQ = 'projects-rfq',
  PROJECTS_RFQAPPROVAL1 = 'projects-rfqapproval1',
  PROJECTS_RFQAPPROVAL2 = 'projects-rfqapproval2',
  PROJECTS_SITEINSPECTION = 'projects-siteinspection',
  PROJECTS_TASKS = 'projects-tasks',
  PROJECTS_WOAPPROVAL1 = 'projects-woapproval1',
  PROJECTS_WOAPPROVAL2 = 'projects-woapproval2',
  REPORTS = 'reports',
  REPORTS_REPORTS = 'reports-reports',
  SUMMARY = 'summary',
  SUMMARY_SITEINSPECTION = 'summary-siteinspection',
  TOOLS = 'tools',
  TOOLS_BOQPACKAGES = 'tools-boqpackages',
  TOOLS_FORMULA = 'tools-formula',
  TOOLS_FORMULATESTER = 'tools-formulatester',
}

export interface ObUser {
  id: string;
  name: string;
  emailId: string;
  imageUrl: string;
  isSuperAdmin: boolean;
  isAdmin: boolean;
  accountId: string;
  role: string;
  permission: Permission;
}

export type Permission = {
  [key in PERMISSION_MODULE]: PERMISSION_TYPE;
};
