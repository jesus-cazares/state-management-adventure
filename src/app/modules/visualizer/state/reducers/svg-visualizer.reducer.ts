import { Action, createReducer, on } from '@ngrx/store';

import * as actions from 'src/app/modules/visualizer/state/actions/svg-visualizer.actions';
import { ISvgElement } from 'src/app/shared/models/commons/svg-element.interface';

export const key = 'svgVisualizer';

export interface State {
    shaft: Array<ISvgElement> | [];
    gear: Array<ISvgElement> | [];
    [index: string]: Array<ISvgElement> | [];
};

export const initialState: State = {
    shaft: [],
    gear: []
};

const svgVisualizerReducer = createReducer(
    initialState,
    on(actions.addSvg, (state, props) => ({
        ...state,
        [props.section]: [...state[props.section], { svg: props.svg, selected: false, ready: false }]
    })),
    on(actions.removeSvg, (state, props) => ({
        ...state,
        [props.section]: state[props.section].filter(
            (element: ISvgElement, index: number) => (index !== props.index)
        )
    })),
    on(actions.selectSvg, (state, props) => ({
        ...state,
        [props.section]: state[props.section].map(
            (element: ISvgElement, index: number) => ({ ...element, selected: index === props.index ? props.selected : false })
        )
    })),
    on(actions.setSectionReady, (state, props) => ({
        ...state,
        [props.section]: state[props.section].map(
            (element: ISvgElement, index: number) => ({ ...element, ready: props.ready })
        )
    })),
    on(actions.clearSection, (state, props) => ({
        ...state,
        [props.section]: []
    }))
);

export const reducer = (state: State | undefined, action: Action) => svgVisualizerReducer(state, action)
