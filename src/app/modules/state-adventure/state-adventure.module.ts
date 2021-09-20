import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ListComponent } from "./components/list.component";
import { ListContainer } from "./containers/list.container";
import { StateAdventureRoutingModule } from "./state-adventure-routing.module";
import { ListEffects } from "./store/effects/list.effects";
import * as fromGuys from './store';

@NgModule({
    declarations: [ ListComponent, ListContainer],
    imports: [
        CommonModule,
        StateAdventureRoutingModule,
        EffectsModule.forFeature([ListEffects]),
        StoreModule.forFeature(fromGuys.featurekey, fromGuys.reducer)
    ]
})

export class StateAdventureModule {}
