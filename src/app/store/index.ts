import { InjectionToken } from "@angular/core";
import { Action, ActionReducerMap, MetaReducer } from "@ngrx/store";

export interface AppState {
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers', {
  factory: /* istanbul ignore next */ () => ({})
});

export const metaReducers: Array<MetaReducer<any>> = [];

export const rootEffects = [];
