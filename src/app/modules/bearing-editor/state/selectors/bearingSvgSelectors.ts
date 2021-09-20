import { createSelector } from "@ngrx/store";
import { BearingEditorState, bearingEditorState } from "src/app/modules/bearing-editor/state";

export const selectBearingSvgState = createSelector(bearingEditorState, (state: BearingEditorState) => state.bearingSVG);
