// Initializes the `ingredient` service on path `/ingredient`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Ingredient } from './ingredient.class';
import createModel from '../../models/ingredient.model';
import hooks from './ingredient.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'ingredient': Ingredient & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/ingredient', new Ingredient(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('ingredient');

  service.hooks(hooks);
}
