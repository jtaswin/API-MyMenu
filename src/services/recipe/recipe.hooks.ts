import { HookContext, Query } from "@feathersjs/feathers";
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
    create: [async (context: HookContext) => {
      if (context.data.type !== 'details' && context.data.type !== 'link') {
        throw new Error("type accepte only 'details' or 'link' as value ");
      }

      return context;
    }],
    update: [async (context: HookContext) => {
       if (context.data.type !== 'details' && context.data.type !== 'link') {
        throw new Error("type accepte only 'details' or 'link' as value ");
      }

      return context;
    }],
    patch: [async (context: HookContext) => {
       if (context.data.type !== 'details' && context.data.type !== 'link') {
        throw new Error("type accepte only 'details' or 'link' as value ");
      }

      return context;
    }],
    remove: []
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
