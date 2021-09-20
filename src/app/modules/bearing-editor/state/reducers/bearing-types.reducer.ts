import { Action, createReducer, on } from '@ngrx/store';

import * as actions from 'src/app/modules/bearing-editor/state/actions/bearing-types.actions';
import { IError } from 'src/app/shared/models/commons/error.interface';
import { IBearingType } from '../../models/bearing-type.interface';

export const key = 'bearingTypes';

export interface State {
    bearingTypes: Array<IBearingType> | [];
    loading: boolean;
    error?: IError;
};

export const initialState: State = {
    bearingTypes: [],
    loading: false,
    error: undefined
};

const bearingTypesReducer = createReducer(
    initialState,
    on(actions.getBearingTypes, (state) => ({
        ...state, loading: true
    })),
    on(actions.getBearingTypesSuccess, (state, types) => ({
        ...state, bearingTypes: types.types, loading: false
    })),
    on(actions.getBearingTypesError, (state, error) => ({
        ...state, error, loading: false
    }))
);

export const reducer = (state: State | undefined, action: Action) => bearingTypesReducer(state, action)
