import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: 'editor',
        component: LayoutComponent,
        loadChildren: () => import('src/app/modules/bearing-editor/bearing-editor.module').then(m => m.BearingEditorModule)
      },
      {
        path: 'list',
        component: LayoutComponent,
        loadChildren: () => import('src/app/modules/state-adventure/state-adventure.module').then(m => m.StateAdventureModule)
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
