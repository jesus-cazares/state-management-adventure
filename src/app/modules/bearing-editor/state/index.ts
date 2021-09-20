import * as bearingTypes from 'src/app/modules/bearing-editor/state/reducers/bearing-types.reducer';
import * as bearingSvg from 'src/app/modules/bearing-editor/state/reducers/bearing-svg.reducer';
import { Action, ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'bearingEditor';

export interface BearingEditorState {
    [bearingTypes.key]: bearingTypes.State;
    [bearingSvg.key]: bearingSvg.State;
}

export const reducers: ActionReducerMap<BearingEditorState, Action> = {
    [bearingTypes.key]: bearingTypes.reducer,
    [bearingSvg.key]: bearingSvg.reducer
}

export const bearingEditorState = createFeatureSelector<BearingEditorState>(featureKey);
