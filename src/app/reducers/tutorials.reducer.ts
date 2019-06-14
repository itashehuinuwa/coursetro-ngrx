import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorials.model';
import * as TutorialActions from './../actions/tutorials.action';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'https//google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}       