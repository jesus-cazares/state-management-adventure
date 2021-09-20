import { createAction, props } from "@ngrx/store";
import { IError } from "src/app/shared/models/commons/error.interface";
import { IGuy } from "../../models/guy.interface";

export const loadList = createAction(
    '[List] Guys List',
    props<{ id: number}>()
);

export const loadListSuccess = createAction(
    '[List] Guys List Success',
    props<{ list: Array<IGuy>}>()
);


export const loadListError = createAction(
    '[List] Guys List Error',
    props<{ error: IError}>()
);
