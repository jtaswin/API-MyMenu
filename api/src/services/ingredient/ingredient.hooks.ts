import { HookContext, Query } from "@feathersjs/feathers";
import { softDelete } from 'feathers-hooks-common';
export default {
  before: {
    all: [

    ],
    find: [async (context: HookContext) => {
      const query = context.params.query as Query;

      if (query && query.name) {

        (context.params.query as any).name = { "$regex": new RegExp(query.name.$search.toLowerCase(), "i") };

      }

      return context;

    }],
    get: [],
    create: [(context: any) => {
      context.data.deletedAt = null;
    }],
    update: [],
    patch: [],
    remove: [
      softDelete({
        // context is the normal hook context
        deletedQuery: async context => {
          return { deletedAt: null };
        },
        removeData: async context => {
          return { deletedAt: new Date() };
        }
      })
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [async (context: HookContext) => {
      console.error(`Error in ${context.path} calling ${context.method}  method`, context.error);

      return context;
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
