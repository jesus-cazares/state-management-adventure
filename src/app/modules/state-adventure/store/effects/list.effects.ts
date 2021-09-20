import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ListService } from "../../services/list.service";
import * as actions from 'src/app/modules/state-adventure/store/actions/list.actions';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { IGuy } from "../../models/guy.interface";
import { IError } from "src/app/shared/models/commons/error.interface";
import { of } from "rxjs";

@Injectable()
export class ListEffects {

    getList$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadList),
        exhaustMap(() =>
            this.listService.getList().pipe(
                map((list: Array<IGuy>) => actions.loadListSuccess({ list })),
                catchError((error: IError) => of(actions.loadListError({ error }))))
    )));
    constructor(private listService: ListService, private actions$: Actions) {}

}
