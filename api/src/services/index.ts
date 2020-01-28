import { Application } from '../declarations';
import recipe from './recipe/recipe.service';
import ingredient from './ingredient/ingredient.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(recipe);
  app.configure(ingredient);
}
