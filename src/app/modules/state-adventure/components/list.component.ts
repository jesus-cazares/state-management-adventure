import { Component, Input } from "@angular/core";

import { IGuy } from "../models/guy.interface";

@Component({
    selector: 'ng-list',
    templateUrl:  './list.component.html'
})

export class ListComponent {
    @Input() list!: Array<IGuy> | null;
    @Input() loading!: boolean | null;

    constructor() {}
}
