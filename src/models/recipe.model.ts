// recipe-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const modelName = 'recipe';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    name: { type: String, required: true , uniqueCaseInsensitive: true},
    duration: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
    serving: { type: Number, required: true },
    details: {
      ingredients: [
        {
          _id: false,
          ingredientId: { type: Schema.Types.ObjectId, ref: 'ingredient' },
          quantity: { type: Number, required: true },
          unit: { type: String, required: true },
        },
      ],
      instructions: [
        {
          _id: false,
          content: { type: String, required: false }
        }
      ]
    },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
}

