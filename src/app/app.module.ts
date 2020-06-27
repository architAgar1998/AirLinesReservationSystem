import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { ShowAllFlightComponent } from './show-all-flight/show-all-flight.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ComfirmTicketComponent } from './comfirm-ticket/comfirm-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowAllUserComponent } from './show-all-user/show-all-user.component';
import { DisplayAllFlightsComponent } from './display-all-flights/display-all-flights.component';
import { ShowAllTicketsComponent } from './show-all-tickets/show-all-tickets.component';
import { ShowReservedTicketsComponent } from './show-reserved-tickets/show-reserved-tickets.component';
import { ShowCancelledTicketsComponent } from './show-cancelled-tickets/show-cancelled-tickets.component';
import { LogoutComponent } from './logout/logout.component';
import { UserReserveTicketComponent } from './user-reserve-ticket/user-reserve-ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UpdateFlightComponent,
    ShowAllFlightComponent,
    LoginComponent,
    RegisterComponent,
    AddFlightComponent,
    UpdateUserComponent,
    ComfirmTicketComponent,
    ShowAllUserComponent,
    DisplayAllFlightsComponent,
    ShowAllTicketsComponent,
    ShowReservedTicketsComponent,
    ShowCancelledTicketsComponent,
    LogoutComponent,
    UserReserveTicketComponent,
    PaymentComponent,
    PassengerDetailsComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'add-flight', component: AddFlightComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'update-flight', component: UpdateFlightComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'show-all-flight', component: ShowAllFlightComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'update-user', component: UpdateUserComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_USER'] }},
      {path: 'confirm-ticket', component: ComfirmTicketComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_USER'] }},
      {path: 'show-all-user', component: ShowAllUserComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'display-all-flight', component: DisplayAllFlightsComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'show-cancelled-ticket', component: ShowCancelledTicketsComponent,
                                     canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'show-reserved-ticket', component: ShowReservedTicketsComponent,
                                     canActivate: [AuthGuard], data: { expectedRole: ['ROLE_ADMIN'] }},
      {path: 'user-reserve-ticket', component: UserReserveTicketComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_USER'] }},
      {path: 'payment', component: PaymentComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_USER'] }},
      {path: 'passenger-details', component: PassengerDetailsComponent, canActivate: [AuthGuard], data: { expectedRole: ['ROLE_USER'] }},
      {path: 'forget-password', component: ForgetPasswordComponent},
      {path: 'change-password', component: ChangePasswordComponent}
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
