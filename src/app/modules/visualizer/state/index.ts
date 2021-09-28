import { Action, ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as svgVisualizer from 'src/app/modules/visualizer/state/reducers/svg-visualizer.reducer';

export const featureKey = 'visualizer';

export interface VisualizerState {
    [svgVisualizer.key]: svgVisualizer.State;
}

export const reducers: ActionReducerMap<VisualizerState, Action> = {
    [svgVisualizer.key]: svgVisualizer.reducer
}

export const visualizerState = createFeatureSelector<VisualizerState>(featureKey);
