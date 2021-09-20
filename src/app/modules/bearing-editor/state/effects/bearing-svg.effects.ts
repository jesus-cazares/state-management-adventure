import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import * as actions from 'src/app/modules/bearing-editor/state/actions/bearing-svg.actions';
import { IError } from "src/app/shared/models/commons/error.interface";
import { BearingEditorService } from "src/app/modules/bearing-editor/services/bearing-editor.service";

@Injectable()

export class BearingSvgEffects {
    getBearingSvg$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBearingSvg),
        exhaustMap(action => this.bearingEditorService.getBearingSvg(action.id).pipe(
            map((svg: string) => actions.getBearingSvgSuccess({ svg, id: action.id || 'base'})),
            catchError((error: IError) => of(actions.getBearingSvgError({ error })))
        ))
    ));

    constructor(private actions$: Actions, private bearingEditorService: BearingEditorService){}
}