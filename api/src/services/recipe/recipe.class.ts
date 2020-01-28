import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';

export class Recipe extends Service {

  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }


  getSome() {
    return 'me again';
  }
}
