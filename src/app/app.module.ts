import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ListadoClientesComponent,
    AgregarClienteComponent
  ],
    imports: [
        BrowserModule,
        RouterTestingModule,
        TooltipModule.forRoot(),
        AccordionModule,
        AngularFireModule.initializeApp(environment.firebase),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule,
        NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
        BsDropdownModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ProgressbarModule.forRoot()
    ],
  providers: [
    AngularFireModule,
    AngularFirestore
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
