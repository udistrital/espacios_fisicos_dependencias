import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistroEspaciosComponent } from './pages/registro-espacios/registro-espacios.component';


const routes: Routes = [
  {
    path: "registro-espacios",
    component: RegistroEspaciosComponent
  },
  {
    path: "**",
    redirectTo: "registro-espacios"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/"}]
})
export class AppRoutingModule { }
