import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromList from 'src/app/modules/state-adventure/store/reducers/list.reducer';

export const featurekey = 'guys';

export interface State {
    [fromList.key]: fromList.State
};

export const reducer: ActionReducerMap<State> = {
    [fromList.key]: fromList.reducer
}

export const selectGuysFeatureState = createFeatureSelector<State>(featurekey);
