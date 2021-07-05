import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BaseComponent} from '../base/base.component';
import {MatDialog} from '@angular/material/dialog';
import {FormulaireComponent} from './formulaire/formulaire.component';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent extends BaseComponent implements OnInit {
  eleves: Observable<any>;

  constructor(
    private firestore: AngularFirestore,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
    // @ts-ignore
    super(snackBar);
  }

  ngOnInit(): void {
    // @ts-ignore
    this.eleves = this.firestore.collection('eleves').valueChanges({idField: 'id'});
  }

  // tslint:disable-next-line:typedef
  ajouter(){
    this.dialog.open(FormulaireComponent, {width: '600px'});
  }


  // tslint:disable-next-line:typedef
  modifier(eleve: any) {
   this.dialog.open(FormulaireComponent,
     {
       width: '600px',
       data: eleve
     });
  }

  // tslint:disable-next-line:typedef
  supprimer(eleve: any) {
    this.firestore.collection('eleves').doc(eleve.id).delete().then(() => {
      this.showSanckBar('Elément supprimé');
    });
  }

}
