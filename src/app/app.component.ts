import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app"
import auth = firebase.auth;
import User = firebase.User;
import {user} from "@angular/fire/auth";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent {
  // @ts-ignore
  usuario: User;
  cargando: boolean = true;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe((usuario)=>{
    setTimeout(() => {
      this.cargando = false;
      // @ts-ignore
      this.usuario = usuario;
    }, 2000)
        })
  }
  login() {
    this.afAuth.signInWithEmailAndPassword('danielacevedo@gmail.com', 'danielacevedo')
  }

}
