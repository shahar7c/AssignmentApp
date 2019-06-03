import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './componets/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { AuthService } from './auth/auth.service';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/users.reducer';
import { UserDeatilsComponent } from './componets/user-details/user-deatils/user-deatils.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDeatilsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    UsersService,
    PostsService,
    AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
