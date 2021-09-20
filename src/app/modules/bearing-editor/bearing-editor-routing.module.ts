import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorContainer } from './containers/editor/editor.container';

const routes: Routes = [
    {
        path: 'bearing',
        component: EditorContainer
    },
    {
        path: '',
        redirectTo: 'bearing',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BearingEditorRoutingModule { }
