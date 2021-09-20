import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListContainer } from './containers/list.container';


const routes: Routes = [
    {
        path: 'list',
        component: ListContainer
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateAdventureRoutingModule { }
