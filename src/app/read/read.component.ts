import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorials.model';
import * as TutorialActions from '../actions/tutorials.action';
@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
    tutorials: Observable<Tutorial[]>;
    constructor(private store: Store<AppState>) {
        this.tutorials = store.select('tutorial')
    }

    ngOnInit() { }

    delTutorial(index) {
        this.store.dispatch(new TutorialActions.RemoveTutorial(index))
    }
}