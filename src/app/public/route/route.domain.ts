export enum ROUTE_TYPE {
  DYNAMIC_COMPONENT = 'DYNAMIC_COMPONENT',
  CACHE = 'CACHE',
  TESTING = 'TESTING',
  ESM = 'ESM',
  NOTES = 'NOTES',
  FONT = 'FONT',
  BREAKING_CHANGE = 'BREAKING_CHANGE',
  DEPRECATIONS = 'DEPRECATIONS',
  DOCUMENTS = 'DOCUMENTS',
  HOME = 'HOME',
  MIGRATIONS = 'MIGRATIONS'
}

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/standard', ROUTE_TYPE.DYNAMIC_COMPONENT],
  ['/cache', ROUTE_TYPE.CACHE],
  ['/esm', ROUTE_TYPE.ESM],
  ['/inline-font', ROUTE_TYPE.FONT],
  ['/testing', ROUTE_TYPE.TESTING],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/documents', ROUTE_TYPE.DOCUMENTS]
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 13'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v13'],
  [ROUTE_TYPE.DYNAMIC_COMPONENT, 'New Feature - Improvements of Dynamic Component'],
  [ROUTE_TYPE.CACHE, 'New Feature - Cache Management'],
  [ROUTE_TYPE.TESTING, 'New Feature - Angular Testing Improvements'],
  [ROUTE_TYPE.ESM, 'New Feature - ESM supported on the ng serve'],
  [ROUTE_TYPE.FONT, 'New Feature - Stylish Improvements'],
  [ROUTE_TYPE.NOTES, 'Other Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.DOCUMENTS, 'Official Documents']
]);