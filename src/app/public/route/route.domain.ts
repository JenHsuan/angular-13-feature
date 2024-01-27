import { Routes } from "@angular/router";
import { BreakingChangesComponent } from "src/app/breaking-changes/breaking-changes.component";
import { BugfixNavigationComponent } from "src/app/bugfix-navigation/bugfix-navigation.component";
import { CacheComponent } from "src/app/cache/cache.component";
import { DeprecationsComponent } from "src/app/deprecations/deprecations.component";
import { DocumentsComponent } from "src/app/documents/documents.component";
import { EsmComponent } from "src/app/esm/esm.component";
import { FormControlStatusComponent } from "src/app/form-control-status/form-control-status.component";
import { HomeComponent } from "src/app/home/home.component";
import { InlineFontComponent } from "src/app/inline-font/inline-font.component";
import { MigrationsComponent } from "src/app/migrations/migrations.component";
import { MinorChangesComponent } from "src/app/minor-changes/minor-changes.component";
import { NotesComponent } from "src/app/notes/notes.component";
import { StandardComponent } from "src/app/standard/standard.component";
import { TestingComponent } from "src/app/testing/testing.component";

export enum RouteType {
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
  MINOR_CHANGES = 'MINOR_CHANGES',
  FORMCONTROL_STATUS = 'FORMCONTROL_STATUS'
}

export const RouteMap = new Map<string, RouteType>([
  ['/home', RouteType.HOME],
  ['/documents', RouteType.DOCUMENTS],
  ['/migrations', RouteType.MIGRATIONS],
  ['/breaking-changes', RouteType.BREAKING_CHANGE],
  ['/minor-changes', RouteType.MINOR_CHANGES],
  ['/deprecations', RouteType.DEPRECATIONS],
  ['/notes', RouteType.NOTES],
  ['/inline-font', RouteType.FONT],
  ['/cache', RouteType.CACHE],
  ['/esm', RouteType.ESM],
  ['/standard', RouteType.DYNAMIC_COMPONENT],
  ['/testing', RouteType.TESTING],
  ['/bugfix-navigation', RouteType.BUGFIX_NAVIGATION],
  ['/form-control-status', RouteType.FORMCONTROL_STATUS],
]);

export const TypeTitleMap = new Map<RouteType, string>([
  [RouteType.HOME, 'Notes of Angular v13'],
  [RouteType.DOCUMENTS, 'About This Website'],
  [RouteType.MIGRATIONS, 'Upgrade to Angular 13'],
  [RouteType.BREAKING_CHANGE, 'Breaking Changes'],
  [RouteType.MINOR_CHANGES, 'Minor Changes'],
  [RouteType.DEPRECATIONS, 'Deprecations'],
  [RouteType.NOTES, 'Features - Angular Package Format (APF) 13'],
  [RouteType.FONT, 'Feature - Stylish Improvements'],
  [RouteType.ESM, 'Feature - ESM Supported on the ng serve'],
  [RouteType.CACHE, 'Feature - Cache Management'],
  [RouteType.DYNAMIC_COMPONENT, 'Improvements - Simplified Dynamic Component'],
  [RouteType.FORMCONTROL_STATUS, 'Improvement - Form Control Status'],
  [RouteType.TESTING, 'Improvements - Optimized Angular Testing'],
  [RouteType.BUGFIX_NAVIGATION, 'Bugfix - Navigation'],
]);

export const sideBarList = [
  RouteType.DOCUMENTS,
  RouteType.MIGRATIONS,
  RouteType.BREAKING_CHANGE,
  RouteType.MINOR_CHANGES,
  RouteType.DEPRECATIONS,
  RouteType.NOTES,
  RouteType.FONT,
  RouteType.CACHE,
  RouteType.ESM,
  RouteType.DYNAMIC_COMPONENT,
  RouteType.FORMCONTROL_STATUS,
  RouteType.TESTING,
  RouteType.BUGFIX_NAVIGATION,
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
    path: 'bugfix-navigation',
    component: BugfixNavigationComponent
  },
  {
    path: 'minor-changes',
    component: MinorChangesComponent
  },
  {
    path: 'form-control-status',
    component: FormControlStatusComponent
  }
];