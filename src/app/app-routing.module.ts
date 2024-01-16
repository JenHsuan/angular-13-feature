import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StandardComponent } from './standard/standard.component';
import { NotesComponent } from './notes/notes.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { DocumentsComponent } from './documents/documents.component';
import { CacheComponent } from './cache/cache.component';
import { EsmComponent } from './esm/esm.component';
import { InlineFontComponent } from './inline-font/inline-font.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { TestingComponent } from './testing/testing.component';
import { TodoComponent } from './todo/todo.component';
import { BugfixNavigationComponent } from './bugfix-navigation/bugfix-navigation.component';
import { MinorChangesComponent } from './minor-changes/minor-changes.component';

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

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
