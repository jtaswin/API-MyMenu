# Our Groupe F:

feathers generate service

# end point ingredient
CRUD ingrédient : 

post(ingredient) => http://localhost:3030/ingredient
getAll() => http://localhost:3030/ingredient
getById(id) => http://localhost:3030/ingredient/id
put(id, ingredient) => http://localhost:3030/ingredient/id
delete(id) => http://localhost:3030/ingredient/id  <= soft delete
search(colonne) => http://localhost:3030/ingredient/colonne[$search]=value


# end point recipe
CRUD ingrédient : 

post(recipe) => http://localhost:3030/recipe
getAll() => http://localhost:3030/recipe
getById(id) => http://localhost:3030/recipe/id
put(id, recipe) => http://localhost:3030/recipe/id
delete(id) => http://localhost:3030/recipe/id
search(colonne) => http://localhost:3030/recipe/colonne[$search]=value



# useful link for whitelist querys
https://github.com/feathersjs-ecosystem/feathers-mongoose/blob/master/lib/service.js#L16

# link for softdelete
npm i feathers-hooks-common
https://hooks-common.feathersjs.com/hooks.html#softdelete


# recipe

>

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/recipe
   npm install
   ```

3. Start your app

   ```
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
