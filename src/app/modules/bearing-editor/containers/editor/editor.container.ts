import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { BearingEditorState } from "../../state";
import { selectBearingSvgState } from "../../state/selectors/bearingSvgSelectors";
import * as fromBearing from 'src/app/modules/bearing-editor/state/reducers/bearing-svg.reducer';
import * as actions from 'src/app/modules/bearing-editor/state/actions/bearing-svg.actions';
import { IBearingType } from "../../models/bearing-type.interface";
import { selectBearingTypes, selectBearingTypesLoading } from "../../state/selectors/bearingTypes.selectors";
import { getBearingTypes } from "../../state/actions/bearing-types.actions";

@Component({
    selector: 'ng-editor-container',
    templateUrl: './editor.container.html'
})
export class EditorContainer {
    bearyngTypes$: Observable<Array<IBearingType>>;
    loadingBearingTypes$: Observable<boolean>;

    constructor(private store: Store<BearingEditorState>){
        this.bearyngTypes$ = this.store.select(selectBearingTypes);
        this.store.dispatch(getBearingTypes());
        this.loadingBearingTypes$ = this.store.select(selectBearingTypesLoading);
    }
}
