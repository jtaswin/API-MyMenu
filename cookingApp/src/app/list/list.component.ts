import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recette';
import { MatDialog, MatPaginator } from '@angular/material';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { FormControl } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  update = new EventEmitter();
  resultsLength = 0;

  list: Recipe[] = [];
  nom = new FormControl('');
  linkImage = '../../assets/link.png';
  constructor(private service: RecipeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.get(0, 6, '');
    merge(...[this.paginator.page, this.update]).subscribe(
      r => {
        r === true ? this.paginator.pageIndex = 0 : r = r;
        !this.paginator.pageSize ? this.paginator.pageSize = 10 : r = r;
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.get(
          startIndex,
          this.paginator.pageSize,
          this.nom ? this.nom.value : ''
        );
      }
    );
  }

  get(startIndex, pageSize, name) {
    this.service.search(startIndex, pageSize, name).subscribe((r: any) => {
      this.list = r.data;
      this.resultsLength = r.total;
    });
  }

  search() {
    this.update.next(true);
  }

  reset() {
    this.nom.setValue('');
    this.update.next(true);
  }

  delete(id): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe(r => {
          this.update.next(false);
        });
      }
    });
  }

}
