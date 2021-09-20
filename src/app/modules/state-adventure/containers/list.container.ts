import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IGuy } from "../models/guy.interface";
import * as fromGuys from 'src/app/modules/state-adventure/store';
import * as actions from 'src/app/modules/state-adventure/store/actions/list.actions';
import * as selectors from 'src/app/modules/state-adventure/store/selectors/list.selectors';

@Component({
    selector: 'ng-list-container',
    templateUrl: './list.container.html'
})

export class ListContainer {
    list$: Observable<Array<IGuy>>;
    loading$: Observable<boolean>;
    
    constructor(private store: Store<fromGuys.State>){
        this.store.dispatch(actions.loadList({ id: 1 }));
        this.list$ = this.store.select(selectors.listSelector);
        this.loading$ = this.store.select(selectors.listSelectorLoading);
    }
}