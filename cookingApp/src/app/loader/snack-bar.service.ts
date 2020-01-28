import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    const config = {
      panelClass: ['warn-snackbar'],
      duration: 4500
    };

    this.snackBar.open(message, null, config);
  }



  notifyOk(code, message: string) {
    const config = {
      panelClass: ['green-snackbar'],
      duration: 1200,
      // horizontalPosition: this.horizontalPosition,
      // verticalPosition: this.verticalPosition,
    };

    this.snackBar.open(code + ' : ' + message, null, config);
  }

  notifyAlert(code, message: string) {
    const config = {
      panelClass: ['alert-snackbar'],
      duration: 1500
    };

    this.snackBar.open(code + ' : ' + message, null, config);
  }


}
