import { RecipeService } from './../services/recipe.service';
import { Recipe, IngredientInfo } from './../models/recette';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientInfoService } from '../services/ingredient-info.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  recipe = new Recipe();
  ingredients: IngredientInfo[] = [];
  constructor(private route: ActivatedRoute, private service: RecipeService
    , private serviceIng: IngredientInfoService) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.service.getById(id).subscribe(r => {
      console.log(r);
      this.recipe = r;
      this.getIngredients(this.recipe.details.ingredients.map(e => e.ingredientId));
    });
  }

  getIngredients(ids: string[]) {
    console.log(ids);
    ids.forEach(async id => {
      if (id) {
        this.ingredients.push(await this.serviceIng.getById(id).toPromise());
      }
    });
  }

}
