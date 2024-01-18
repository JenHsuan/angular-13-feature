import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule } from '@angular/router';
import { routes } from './public/route/route.domain';

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
