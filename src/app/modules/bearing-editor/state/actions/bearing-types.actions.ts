import { createAction, props } from "@ngrx/store";

import { IError } from "src/app/shared/models/commons/error.interface";
import { IBearingType } from "src/app/modules/bearing-editor/models/bearing-type.interface";

export const getBearingTypes = createAction(
    '[Get Bearing Types] Get Bearing Types'
);

export const getBearingTypesSuccess = createAction(
    '[Get Bearing Types] Get Bearing Types Success',
    props<{ types: Array<IBearingType>} >()
);

export const getBearingTypesError = createAction(
    '[Get Bearing Types] Get Bearing Types Error',
    props<{ error: IError }>()
);
