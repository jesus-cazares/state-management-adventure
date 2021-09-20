import { createSelector } from "@ngrx/store";
import { selectGuysFeatureState, State } from "..";

export const listSelector = createSelector(
    selectGuysFeatureState,
    (state: State) => state.list.list
);

export const listSelectorError = createSelector(
    selectGuysFeatureState,
    (state: State) => state.list.error
);

export const listSelectorLoading = createSelector(
    selectGuysFeatureState,
    (state: State) => state.list.loading
);
