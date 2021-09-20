import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { EditorComponent } from "./components/editor/editor.component";
import { EditorContainer } from "./containers/editor/editor.container";
import { BearingSvgEffects } from "./state/effects/bearing-svg.effects";
import { BearingTypesEffects } from "./state/effects/bearing-types.effects";
import * as bearingEditorStore from 'src/app/modules/bearing-editor/state';
import { BearingEditorRoutingModule } from "./bearing-editor-routing.module";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [
        EditorComponent,
        EditorContainer,
    ],
    providers: [],
    imports: [
        CommonModule,
        MatButtonModule,
        BearingEditorRoutingModule,
        EffectsModule.forFeature([ BearingSvgEffects, BearingTypesEffects ]),
        StoreModule.forFeature(bearingEditorStore.featureKey, bearingEditorStore.reducers)
    ]
})
export class  BearingEditorModule {}
