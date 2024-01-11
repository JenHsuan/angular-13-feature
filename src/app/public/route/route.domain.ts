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
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/standard', ROUTE_TYPE.DYNAMIC_COMPONENT],
  ['/cache', ROUTE_TYPE.CACHE],
  ['/esm', ROUTE_TYPE.ESM],
  ['/inline-font', ROUTE_TYPE.FONT],
  ['/testing', ROUTE_TYPE.TESTING],
  ['/notes', ROUTE_TYPE.NOTES],
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.DOCUMENTS, 'About This Website'],
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 13'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v13'],
  [ROUTE_TYPE.DYNAMIC_COMPONENT, 'Feature - Improvements of Dynamic Component'],
  [ROUTE_TYPE.CACHE, 'Feature - Cache Management'],
  [ROUTE_TYPE.TESTING, 'Feature - Angular Testing Improvements'],
  [ROUTE_TYPE.ESM, 'Feature - ESM supported on the ng serve'],
  [ROUTE_TYPE.FONT, 'Feature - Stylish Improvements'],
  [ROUTE_TYPE.NOTES, 'Minor Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
]);

export const sideBarList = [
  ROUTE_TYPE.DOCUMENTS,
  ROUTE_TYPE.MIGRATIONS,
  ROUTE_TYPE.BREAKING_CHANGE,
  ROUTE_TYPE.DEPRECATIONS,
  ROUTE_TYPE.DYNAMIC_COMPONENT,
  ROUTE_TYPE.CACHE,
  ROUTE_TYPE.ESM,
  ROUTE_TYPE.FONT,
  ROUTE_TYPE.TESTING,
  ROUTE_TYPE.NOTES,
];