import { Action, createReducer, on } from '@ngrx/store';

import * as actions from 'src/app/modules/bearing-editor/state/actions/bearing-svg.actions';
import { IError } from 'src/app/shared/models/commons/error.interface';

export const key = 'bearingSVG';

export interface State {
    svg: { [index: string]: string };
    loading: boolean;
    error?: IError
};

export const initialState: State = {
    svg: {},
    loading: false,
    error: undefined
};

const bearingSVGReducer = createReducer(
    initialState,
    on(actions.getBearingSvg, (state) => ({
        ...state, loading: true
    })),
    on(actions.getBearingSvgSuccess, (state, svg) => ({
        ...state, loading: false, svg: {...state.svg, [svg.id]: svg.svg}
    })),
    on(actions.getBearingSvgError, (state, error) => ({
        ...state, error, loading: false
    }))
);

export const reducer = (state: State | undefined, action: Action) => bearingSVGReducer(state, action)
