import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestComponent } from './test/test.component';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConnexionComponent } from './connexion/connexion.component';
import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ElevesComponent } from './eleves/eleves.component';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FormulaireComponent } from './eleves/formulaire/formulaire.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ServiceWorkerModule } from '@angular/service-worker';



const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'eleves', component: ElevesComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConnexionComponent,
    BaseComponent,
    RegisterComponent,
    ElevesComponent,
    FormulaireComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,

    RouterModule.forRoot(routes),

    AngularFireModule.initializeApp(environment.firebaseConfig),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        // Register the ServiceWorker as soon as the app is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }),
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
