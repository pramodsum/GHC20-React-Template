# Grace Hopper 2020 React Workshop Template

**DEMO: https://pramodsum.github.io/tacopundit/**

**API DOCUMENTATION: https://github.com/pramodsum/taco-pundit-api**

### Resources

Javascript ES6 Best Practices/Cheat Sheet: https://github.com/DrkSephy/es6-cheatsheet

React Best Practices:

- https://devhints.io/react
- https://reactcheatsheet.com/
- https://www.freecodecamp.org/news/the-react-cheatsheet-for-2020/

How to use React Hooks: https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

## Setup

Make sure you have a github account before starting. Otherwise sign up for free here! https://github.com/

### Cloning the project template

1. Click the "Use this template" button in the template repository on Github
   ![Use this template](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%201.14.06%20PM.png?raw=true)
2. Create a public repository called "tacopundit" ![create repo](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%201.16.04%20PM.png?raw=true)

If you have a local development setup that you prefer and already have a proper`node.js` and `git` environment, then you can skip this step and simply clone your tacopundit repository locally onto your machine.

### Setting up Repl.it

Repl.it is an online IDE which allows you to begin developming withouth wasting time setting up a development environment.

1. Create a Repl.it account at https://repl.it/signup
2. Create a new repl.it instance using the "Import from Github" button in the top right of the window
   ![import from github](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%201.17.17%20PM.png?raw=true)

## Developing on the template

If this is your first time running the app, run the following command

```
yarn install
```

To start the app, run the following commands

```
yarn dev
```

# Exercise 1:

## Breaking the Homepage down into smaller components

![Homepage](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%2011.22.28%20AM.png?raw=true)

1. Think about which parts of the page are re-used. What's based on an `if` statement? See the sample breakdown [here](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/home-component-breakdown.png?raw=true)

**Sample recipe response:**

The TacoPundit API is documented here: https://github.com/pramodsum/taco-pundit-api

```
// GET https://pramodsum.github.io/taco-pundit-api/toppings

[
  {
    "name": "Mango Avocado Salsa",
    "url": "https://raw.github.com/sinker/tacofancy/master/condiments/mango_avocado_salsa.md",
    "recipe": "Goes great on soft shell chicken tacos with cheese (or deep-friend wantons with scallops)!\n\n__Ingredients__\n\n* 2 Avocados\n* 2 Mangos\n* 1 Orange\n* 1 Tablespoon Honey\n* Garlic cloves (leave it up to your buds)\n* Pepper\n* 1 Lime\n\n__Directions__\n\n1. Chop avocado and mango into bowl.\n2. Squeeze the lime and half the orange in, add honey.\n3. Add garlic (chopped or pressed) and pepper to taste.\n4. Stir and enjoy!\n\ntags: vegetarian, vegan\n",
    "slug": "mango_avocado_salsa",
    "uuid": "2f02d742-64eb-11ea-820b-acde48001122"
  },
  {
    "name": "Chipotle Sauce",
    "url": "https://raw.github.com/sinker/tacofancy/master/condiments/chipotle_sauce.md",
    "recipe": "__Ingredients__\n\n* 1 cup plain Greek yogurt\n* Juice from 2 limes\n* 2-3 chipotl\u00e9 peppers, with surrounding adobo sauce from can\n\n__Directions__\n\n1. Drop all of this into a food processor, and blend away.\n2. Let sit in fridge for 30 minutes or overnight for flavor melding. \n3. Add to tacos, and anything else you'd like.\n\ntags: vegetarian\n",
    "slug": "chipotle_sauce",
    "uuid": "2f02e476-64eb-11ea-820b-acde48001122"
  },
  {
    "name": "Phoning it in Pico de Gallo",
    "url": "https://raw.github.com/sinker/tacofancy/master/condiments/Pico_de_gallo.md",
    "recipe": "_Super Quick & Easy Pico_\n\n\n* 1 pint grape tomatoes, quartered (make your kids do this part)\n* 3 tablespoons finely chopped white onion\n* Coarse salt\n* Squeeze of lime\n* As many finely chopped red (or green) jalape\u00f1os as you want (optional)\n\nCombine the tomatoes, cilantro and onion together in a bowl. Season to taste with salt and lime.\n\nReserve some of this mixture for kids, and then add as much jalape\u00f1o as you like to the remaining mixture for the non wimps.\n\ntags: vegetarian, vegan\n",
    "slug": "phoning_it_in_pico_de_gallo",
    "uuid": "2f02f222-64eb-11ea-820b-acde48001122"
  },
  ....
]

```

# Exercise 2:

## Create a `ToppingRecipePage`

The page should look like the following:
![Topping Recipe Page Screenshot](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%2012.19.29%20PM.png?raw=true)

**Sample recipe response:**

```
// GET https://pramodsum.github.io/taco-pundit-api/toppings/mango_avocado_salsa.json

{
  "name": "Mango Avocado Salsa",
  "url": "https://raw.github.com/sinker/tacofancy/master/condiments/mango_avocado_salsa.md",
  "recipe": "Goes great on soft shell chicken tacos with cheese (or deep-friend wantons with scallops)!\n\n__Ingredients__\n\n* 2 Avocados\n* 2 Mangos\n* 1 Orange\n* 1 Tablespoon Honey\n* Garlic cloves (leave it up to your buds)\n* Pepper\n* 1 Lime\n\n__Directions__\n\n1. Chop avocado and mango into bowl.\n2. Squeeze the lime and half the orange in, add honey.\n3. Add garlic (chopped or pressed) and pepper to taste.\n4. Stir and enjoy!\n\ntags: vegetarian, vegan\n",
  "slug": "mango_avocado_salsa",
  "uuid": "2f02d742-64eb-11ea-820b-acde48001122"
}

```

#### 1. How do you break this page down into components?

Take a look at the [Material UI documentation](https://material-ui.com/getting-started/usage/) to find components that you can use.

#### 2. Add a dynamic route to the `ToppingRecipePage`

You should be able to access a topping's recipe at `tacopundit/toppings/{TOPPING_SLUG}` or as an example https://pramodsum.github.io/tacopundit/toppings/mango_avocado_salsa

[React Router DOM Documentation](https://reacttraining.com/react-router/web/guides/primary-components)

# Exercise 3:

## Create reviews for a recipe

#### 1. What do we want our users to be able to leave for a review?

They should be able to leave stars, their name, and the actual content of their review.

Take a look at the [Material UI documentation](https://material-ui.com/getting-started/usage/) to find components that you can use.

#### 2. How should reviews that our users leave look?

We want to display the reviews in a way that shows all the information they've entered in, ordered by when they were left. The most recent review should be at the top of your list.

![Review](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%2012.19.43%20PM.png?raw=true)

Take a look at [Material UI's tables](https://material-ui.com/components/tables/) for how you would represent the reviews.

#### 3. How can we persist review information to the database?

For connection to a simple database, let's set up [Firebase](https://firebase.google.com/). You can create an account and set up a Real-Time Database for free, which you can then connect to your web app via environment variables. Follow the [setup instructions](https://firebase.google.com/docs/database/web/start).

1. Saving reviews to the database

   When a user clicks the submit button for a review, the data should get saved to the database under the reviews table. See the [firebase docs](https://firebase.google.com/docs/database/web/read-and-write) for the proper way to write data into your database.

2. Pulling reviews from the database

   Once a user loads the page for a recipe, we should pull all the reviews for the recipe by the recipe name and display them in our reviews table. Use the link above to see how to read data from the database.

#### 4. Test your changes!

Preferably test as you go. Create a review, check in Firebase that it exists. Click back and re-enter the page - your review should still be there.

## Show off your app!

Update the following line in your `package.json` to use your github username

```
  "homepage": "http://{GITHUB_USERNAME}.github.io/tacopundit",
```

Then run:

```
yarn deploy
```

This will deploy your app to your github pages!
The url will likely be `https://{GITHUB_USERNAME}.github.io/tacopundit`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
