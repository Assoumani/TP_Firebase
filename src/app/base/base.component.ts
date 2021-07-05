import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showSanckBar(message: string) {
    this.snackBar.open(
      message,
      null,
      {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end'
      }
    );
  }

}
