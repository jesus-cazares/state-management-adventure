import { createAction, props } from "@ngrx/store";

export const addSvg = createAction(
    '[Bearing SVG Visualizer] Add SVG',
    props<{ svg: string, section: string }>()
);

export const removeSvg = createAction(
    '[Bearing SVG Visualizer] Remove SVG',
    props<{ index: number, section: string }>()
);

export const selectSvg = createAction(
    '[Bearing SVG Visualizer] Select SVG',
    props<{ index: number, selected: boolean, section: string }>()
);

export const setSectionReady = createAction(
    '[Bearing SVG Visualizer] Set Section Ready',
    props<{ section: string, ready: boolean }>()
);

export const clearSection = createAction(
    '[Bearing SVG Visualizer] Clear Section',
    props<{ section: string }>()
);
