import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ListComponent } from 'src/app/modules/state-adventure/components/list.component';
import { ListContainer } from 'src/app/modules/state-adventure/containers/list.container';
import { StateAdventureRoutingModule } from 'src/app/modules/state-adventure/state-adventure-routing.module';
import * as fromGuys from 'src/app/modules/state-adventure/store';
import { ListEffects } from 'src/app/modules/state-adventure/store/effects/list.effects';
import { VisualizerModule } from 'src/app/modules/visualizer/bearing-editor.module';

@NgModule({
    declarations: [ ListComponent, ListContainer],
    imports: [
        CommonModule,
        StateAdventureRoutingModule,
        VisualizerModule,
        EffectsModule.forFeature([ListEffects]),
        StoreModule.forFeature(fromGuys.featurekey, fromGuys.reducer)
    ]
})

export class StateAdventureModule {}
