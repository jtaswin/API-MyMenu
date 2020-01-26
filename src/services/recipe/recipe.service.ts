// Initializes the `recipe` service on path `/recipe`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Recipe } from './recipe.class';
import createModel from '../../models/recipe.model';
import hooks from './recipe.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'recipe': Recipe & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires

  app.use('/recipe', new Recipe(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recipe');

  service.hooks(hooks);
}
