import { Component } from "@angular/core";

import { IGuy } from "../models/guy.interface";

@Component({
    selector: 'ng-list',
    templateUrl:  './list.component.html'
})

export class ListComponent {
    list: Array<IGuy> = [
        { name: 'Jesus', lastName: 'Cazares'},
        { name: 'Pedro', lastName: 'Suarez' }
    ];

    constructor() {}
}
