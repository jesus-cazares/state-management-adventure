import { Action, createReducer, on } from "@ngrx/store";
import { IError } from "src/app/shared/models/commons/error.interface";
import { IGuy } from "../../models/guy.interface";

import * as actions from 'src/app/modules/state-adventure/store/actions/list.actions';

export const key = 'list';

export interface State {
    list: Array<IGuy> | [];
    loading: boolean;
    error?: IError;
};

export const initialState: State = {
    list: [],
    loading: false,
    error: undefined
};

const listReducer = createReducer(
    initialState,
    on(actions.loadList, (state, values) => ({
        ...state, loading: true
    })),
    on(actions.loadListSuccess, (state, values) => ({
        ...state, loading: false, list: values.list
    })),
    on(actions.loadListError, (state, values) => ({
        ...state, loading: false, error: values.error
    }))
);

export const reducer = (state: State | undefined, action: Action) => listReducer(state, action);
