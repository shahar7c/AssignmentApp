import { User } from './models/user.model';
import { usersState } from './store/reducers/users.reducer'; 

export interface AppState {
  readonly usersObjects: usersState;
}