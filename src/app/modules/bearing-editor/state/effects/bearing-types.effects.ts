import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";

import * as actions from 'src/app/modules/bearing-editor/state/actions/bearing-types.actions';
import { IError } from "src/app/shared/models/commons/error.interface";
import { BearingEditorService } from "src/app/modules/bearing-editor/services/bearing-editor.service";
import { IBearingType } from "src/app/modules/bearing-editor/models/bearing-type.interface";

@Injectable()

export class BearingTypesEffects {
    getBearingSvg$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBearingTypes),
        exhaustMap(() => this.bearingEditorService.getBearingTypes().pipe(
            map((types: Array<IBearingType>) => actions.getBearingTypesSuccess({ types })),
            catchError((error: IError) => of(actions.getBearingTypesError({ error })))
        ))
    ));

    constructor(private actions$: Actions, private bearingEditorService: BearingEditorService){}
}