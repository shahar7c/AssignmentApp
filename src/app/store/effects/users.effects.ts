import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from '@ngrx/store/src/models';
import { switchMap, map } from "rxjs/operators";
import { UsersService } from '../../services/users.service';
import * as fromActions from '../actions/Users.actions';
import { User } from '../../models/user.model';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable()
export class usersEffects{
    constructor(
        private actions$: Action,
        private service: UsersService
    ) {}


    // @Effect()
    // loadUsers$ = this.actions$.type(fromActions.LOAD_USERS).pipe(
    //     switchMap(()=>
    //         this.service.getUsers().pipe(
    //             map((users:User[]) => new fromActions.loadUsersSuccsess(users)),

    //             /* return an observable of the error */
    //             catchError(error => new fromActions.loadUsersFail(error)))
    //         )   
    //     )
}

