import { createAction, props } from "@ngrx/store";

import { IError } from "src/app/shared/models/commons/error.interface";

export const getBearingSvg = createAction(
    '[Get Bearing SVG] Get Bearing SVG',
    props<{ id?: string }>()
);

export const getBearingSvgSuccess = createAction(
    '[Get Bearing SVG] Get Bearing SVG Success',
    props<{ svg: string, id: string } >()
);

export const getBearingSvgError = createAction(
    '[Get Bearing SVG] Get Bearing SVG Error',
    props<{ error: IError }>()
);
