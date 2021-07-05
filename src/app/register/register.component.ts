import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseComponent implements OnInit {

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
  register(){
    this.authentication
      .createUserWithEmailAndPassword(
        this.form.get('email').value,
        this.form.get('password').value
      ).then(
      (response) => {
        console.log(response);
        this.showSanckBar('Utilisateur ajouté!');

      },
      (error) => {
        console.log(error);
        this.showSanckBar(environment.fireBaseMessage[error.code]);
      }
    );
  }
}
