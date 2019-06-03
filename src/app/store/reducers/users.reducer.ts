import * as fromActions from '../actions/Users.actions';
import { User } from '../../models/user.model';

export interface usersState {
    data: User[];
    loaded: boolean,
    loading: boolean;
}

export const initialState: usersState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState, 
    action: fromActions.usersAction //type checking
) : usersState {

    switch(action.type){
        case fromActions.LOAD_USERS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.LOAD_USERS_SUCCSESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }

        case fromActions.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false          
            };
        }
    }

    return state;
}