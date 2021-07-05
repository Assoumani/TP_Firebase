import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';
import {BaseComponent} from '../base/base.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private authentication: AngularFireAuth,
    public snackBar: MatSnackBar
  ) {
    super(snackBar);
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  connexion() {
    this.authentication
      .signInWithEmailAndPassword(
        this.form.get('email').value,
        this.form.get('password').value
      )
      .then(
        (response) => {
          console.log(response);
          this.showSanckBar('Utilisateur authentifié!');
        },
        (error) => {
          this.showSanckBar(environment.fireBaseMessage[error.code]);
        }
      );
  }

  // tslint:disable-next-line:typedef
  passwordForgotten() {
    this.authentication.sendPasswordResetEmail(
      this.form.get('email').value
    ).then(
      () => {
      this.showSanckBar('Email de modification envoyé!');
    }
    );
  }


}
