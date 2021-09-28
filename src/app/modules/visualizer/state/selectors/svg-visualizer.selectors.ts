import { createSelector } from "@ngrx/store";
import { VisualizerState, visualizerState } from "src/app/modules/visualizer/state";

export const selectSvgVisualizerState = createSelector(visualizerState, (state: VisualizerState) =>
    [ ...state.svgVisualizer.shaft, ...state.svgVisualizer.gear ]
);
