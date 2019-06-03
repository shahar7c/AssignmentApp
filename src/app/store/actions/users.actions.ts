import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export const LOAD_USERS = "[Users] Load Users";
export const LOAD_USERS_FAIL = "[Users] Load Users Fail";
export const LOAD_USERS_SUCCSESS = "[Users] Load Users Succsess";

export class loadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class loadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;
    constructor(public payload:any) {}
}

export class loadUsersSuccsess implements Action {
    readonly type = LOAD_USERS_SUCCSESS;
    constructor(public payload:User[]) {}
    
}

export type usersAction = loadUsers | loadUsersFail | loadUsersSuccsess;

