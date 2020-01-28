import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IngredientInfoService } from '../services/ingredient-info.service';
import { IngredientInfo } from '../models/recette';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  list: IngredientInfo[] = [];
  ingredient = new IngredientInfo();
  myForm: FormGroup;
  isEdit = false;
  constructor(private service: IngredientInfoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(r => {
      console.log(r);
      this.list = r;
    });
  }

  createForm() {
    this.myForm = this.fb.group({
      _id: this.ingredient._id,
      name: [this.ingredient.name, [Validators.required]],
    });
  }

  submit(ing: IngredientInfo) {
    if (!this.isEdit) {
      this.service.post(ing).subscribe(r => {
        this.reset();
        this.getAll();
      });
    } else {
      this.service.put(ing._id, ing).subscribe(r => {
        this.reset();
        this.getAll();
      });
    }
  }

  delete(id) {
    this.service.delete(id).subscribe(r => {
      this.getAll();
    });
  }

  edit(e) {
    this.ingredient = e;
    this.isEdit = true;
    this.createForm();
  }

  reset() {
    this.ingredient = new IngredientInfo();
    this.isEdit = false;
    this.createForm();
  }

}
