import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';

import * as bearingEditorStore from 'src/app/modules/visualizer/state';
import { SvgVisualizerComponent } from './components/svg-visualizer/svg-visualizaer.component';
import { SvgVisualizerContainer } from './containers/svg-visualizer/svg-visualizer.container';

@NgModule({
    declarations: [
        SvgVisualizerComponent,
        SvgVisualizerContainer,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        StoreModule.forFeature(bearingEditorStore.featureKey, bearingEditorStore.reducers)
    ],
    exports: [SvgVisualizerContainer]
})
export class  VisualizerModule {}
