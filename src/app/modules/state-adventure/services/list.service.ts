import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, of } from "rxjs";
import { IGuy } from "../models/guy.interface";

@Injectable({
    providedIn: 'root'
})

export class ListService {
    constructor() {}

    /**
     * Get Items List
     * 
     * @summary gets some guys
     * @returns Observable<Array<IGuy> | never>
     */
    getList():Observable< Array<IGuy>> {
        return of([]);
    }
}