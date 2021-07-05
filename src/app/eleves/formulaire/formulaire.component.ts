import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BaseComponent} from '../../base/base.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent extends BaseComponent implements OnInit {
  eleve: any;
  formulaire = new FormGroup({
    lastname: new FormControl(),
    firstname: new FormControl(),
    birthDate: new FormControl()
  });

  constructor(
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firestore: AngularFirestore,
  ) {
    super(snackBar);
    if (data) {
      this.eleve = data;
    }
  }

  ngOnInit(): void {
    if (this.eleve) {
      // @ts-ignore
      this.formulaire.get('firstname').setValue(this.eleve.firstname);
      this.formulaire.get('lastname').setValue(this.eleve.lastname);
      this.formulaire.get('birthDate').setValue(this.eleve.birthDate);
    }
  }

  // tslint:disable-next-line:typedef
  valider() {
    if (this.eleve) {
      this.firestore.collection('eleves').doc(this.eleve.id).update(this.formulaire.value).then(() => {
        this.showSanckBar('Elément modifié');
      });
      return;
    }
    this.firestore.collection('eleves').add(this.formulaire.value).then(() => {
      this.showSanckBar('Elément ajoutée');
    });
  }

}
