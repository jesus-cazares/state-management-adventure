import { createSelector } from "@ngrx/store";

import { BearingEditorState, bearingEditorState } from "src/app/modules/bearing-editor/state";

export const selectBearingTypesState = createSelector(bearingEditorState, (state: BearingEditorState) => state.bearingTypes);

export const selectBearingTypesLoading = createSelector(bearingEditorState, (state: BearingEditorState) => state.bearingTypes.loading);

export const selectBearingTypeserror = createSelector(bearingEditorState, (state: BearingEditorState) => state.bearingTypes.error);

export const selectBearingTypes = createSelector(bearingEditorState, (state: BearingEditorState) => state.bearingTypes.bearingTypes);
