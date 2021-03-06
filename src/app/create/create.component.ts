import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from '../models/tutorials.model';
import * as TutorialActions from '../actions/tutorials.action';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    ngOnInit() { }

    addTutorial(name, url) {
        this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
    }
}
