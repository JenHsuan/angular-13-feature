import { Routes } from "@angular/router";
import { BreakingChangesComponent } from "src/app/breaking-changes/breaking-changes.component";
import { BugfixNavigationComponent } from "src/app/bugfix-navigation/bugfix-navigation.component";
import { CacheComponent } from "src/app/cache/cache.component";
import { DeprecationsComponent } from "src/app/deprecations/deprecations.component";
import { DocumentsComponent } from "src/app/documents/documents.component";
import { EsmComponent } from "src/app/esm/esm.component";
import { HomeComponent } from "src/app/home/home.component";
import { InlineFontComponent } from "src/app/inline-font/inline-font.component";
import { MigrationsComponent } from "src/app/migrations/migrations.component";
import { MinorChangesComponent } from "src/app/minor-changes/minor-changes.component";
import { NotesComponent } from "src/app/notes/notes.component";
import { StandardComponent } from "src/app/standard/standard.component";
import { TestingComponent } from "src/app/testing/testing.component";
import { TodoComponent } from "src/app/todo/todo.component";

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
  MIGRATIONS = 'MIGRATIONS',
  BUGFIX_NAVIGATION = 'BUGFIX_NAVIGATION',
  TODO = 'TODO',
  MINOR_CHANGES = 'MINOR_CHANGES'
}

export const ROUTE_MAP = new Map<string, ROUTE_TYPE>([
  ['/home', ROUTE_TYPE.HOME],
  ['/documents', ROUTE_TYPE.DOCUMENTS],
  ['/migrations', ROUTE_TYPE.MIGRATIONS],
  ['/breaking-changes', ROUTE_TYPE.BREAKING_CHANGE],
  ['/minor-changes', ROUTE_TYPE.MINOR_CHANGES],
  ['/deprecations', ROUTE_TYPE.DEPRECATIONS],
  ['/cache', ROUTE_TYPE.CACHE],
  ['/esm', ROUTE_TYPE.ESM],
  ['/inline-font', ROUTE_TYPE.FONT],
  ['/notes', ROUTE_TYPE.NOTES],
  ['/standard', ROUTE_TYPE.DYNAMIC_COMPONENT],
  ['/testing', ROUTE_TYPE.TESTING],
  ['/bugfix-navigation', ROUTE_TYPE.BUGFIX_NAVIGATION],
  ['/todo', ROUTE_TYPE.TODO],
]);

export const TYPE_TITLE_MAP = new Map<ROUTE_TYPE, string>([
  [ROUTE_TYPE.DOCUMENTS, 'About This Website'],
  [ROUTE_TYPE.MIGRATIONS, 'Upgrade to Angular 13'],
  [ROUTE_TYPE.HOME, 'Notes of Angular v13'],
  [ROUTE_TYPE.DYNAMIC_COMPONENT, 'Improvements - Simplified Dynamic Component'],
  [ROUTE_TYPE.CACHE, 'Feature - Cache Management'],
  [ROUTE_TYPE.TESTING, 'Improvements - Optimized Angular Testing'],
  [ROUTE_TYPE.ESM, 'Feature - ESM supported on the ng serve'],
  [ROUTE_TYPE.FONT, 'Feature - Stylish Improvements'],
  [ROUTE_TYPE.NOTES, 'Minor Features'],
  [ROUTE_TYPE.BREAKING_CHANGE, 'Breaking Changes'],
  [ROUTE_TYPE.MINOR_CHANGES, 'Minor Changes'],
  [ROUTE_TYPE.DEPRECATIONS, 'Deprecations'],
  [ROUTE_TYPE.BUGFIX_NAVIGATION, 'Bugfix - Navigation'],
  [ROUTE_TYPE.TODO, 'Todo list'],
]);

export const sideBarList = [
  ROUTE_TYPE.DOCUMENTS,
  ROUTE_TYPE.MIGRATIONS,
  ROUTE_TYPE.BREAKING_CHANGE,
  ROUTE_TYPE.MINOR_CHANGES,
  ROUTE_TYPE.DEPRECATIONS,
  ROUTE_TYPE.CACHE,
  ROUTE_TYPE.ESM,
  ROUTE_TYPE.FONT,
  ROUTE_TYPE.NOTES,
  ROUTE_TYPE.DYNAMIC_COMPONENT,
  ROUTE_TYPE.TESTING,
  ROUTE_TYPE.BUGFIX_NAVIGATION,
  ROUTE_TYPE.TODO,
];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'standard',
    component: StandardComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'cache',
    component: CacheComponent
  },
  {
    path: 'esm',
    component: EsmComponent
  },
  {
    path: 'inline-font',
    component: InlineFontComponent
  },
  {
    path: 'migrations',
    component: MigrationsComponent
  },
  {
    path: 'testing',
    component: TestingComponent
  },
  {
    path: 'breaking-changes',
    component: BreakingChangesComponent
  },
  {
    path: 'deprecations',
    component: DeprecationsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'bugfix-navigation',
    component: BugfixNavigationComponent
  },
  {
    path: 'minor-changes',
    component: MinorChangesComponent
  }
];