import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '../../declarations';
import { ServiceMethods, Params, Id, NullableId } from '@feathersjs/feathers';
import { Model, Schema } from 'mongoose';

export class MyRecipe {

  model: Model<any, {}>;

  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    this.model = options.Model as any;
    
  }

  async find(params: Params) {

    // return params.query;
    try {
      console.log('>>>>>>>', params.query)
      return await this.model.find(params.query); 
    } catch (error) {
      return error;
    }
     
    // return { data: await this.model.find(params), count: await this.model.find(params).countDocuments() };
  }
  async create(data: any, params: Params) {
    return await this.model.create(data);
  }


  async get(id: Id, params: Params) { }
  async update(id: NullableId, data: any, params: Params) { }
  async patch(id: NullableId, data: any, params: Params) { }
  async remove(id: NullableId, params: Params) { }
}
