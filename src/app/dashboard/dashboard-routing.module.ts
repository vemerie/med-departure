import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/create/create.component').then(
            (m) => m.CreateComponent
          ),
      },

      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
