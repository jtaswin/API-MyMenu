import { Instruction } from './../models/recette';
import { RecipeService } from './../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, Ingredient } from '../models/recette';
import { IngredientInfoService } from '../services/ingredient-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  id = '';
  recip = new Recipe();
  titre = 'Ajout';
  types = ['link', 'details'];
  isEdit = false;
  ingredients = [];
  constructor(private fb: FormBuilder, private route: ActivatedRoute
    , private service: RecipeService, private router: Router
    , private serviceIng: IngredientInfoService, public location: Location
    ) { }

  ngOnInit() {
    this.createForm();
    this.id = this.route.snapshot.paramMap.get('id');
    // because admin can update this, and we dont want his name in this recip
    if (this.id !== 'new') {
      this.isEdit = true,
      this.titre = 'Modification';
      this.service.getById(this.id).subscribe(r => {
        this.recip = r;
        this.createForm();
      });
    }

    this.serviceIng.getAll().subscribe(r => {
      this.ingredients = r;
    });
  }

  createForm() {
    this.myForm = this.fb.group({
      _id: this.recip._id,
      name: [this.recip.name, [Validators.required]],
      type: [this.recip.type, [Validators.required]],
      url: [this.recip.url, [Validators.required]],
      duration: [this.recip.duration, [Validators.required]],
      serving: [this.recip.serving, [Validators.required]],
      details: this.fb.group({
        ingredients: this.fb.array(this.recip.details.ingredients.map(i => this.fb.group(i))),
        instructions: this.fb.array(this.recip.details.instructions.map(i => this.fb.group(i))),
      }),
    });
  }

  get type() {
    return this.myForm.get('type') as FormControl;
  }

  get getIngredients(): FormArray {
    return this.myForm.get('details').get('ingredients') as FormArray;
  }

  get getInstructions(): FormArray {
    return this.myForm.get('details').get('instructions') as FormArray;
  }

  // Add an ingretient
  addIngredients() {
    this.getIngredients.push(this.fb.group(new Ingredient()));
  }

  // Add an instruction
  addInstructions() {
    this.getInstructions.push(this.fb.group(new Instruction()));
  }

  // Delete an ingretient
  deleteIngredient(i: number) {
    this.getIngredients.removeAt(i);
  }

  // Delete an instruction
  deleteInstructions(i: number) {
    this.getInstructions.removeAt(i);
  }

  // Send the form
  async submit(recipe: Recipe) {

    if (!this.isEdit) {
      this.service.post(recipe).subscribe(r => {
        this.router.navigate(['/list']);
      });
    } else {
      this.service.put(recipe._id, recipe).subscribe(r => {
        this.router.navigate(['/list']);
      });
    }
  }

}
