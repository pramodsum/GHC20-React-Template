# Grace Hopper 2020 React Workshop Template

[Demo](https://pramodsum.github.io/tacopundit/)

If you have a development setup that you prefer then you can skip this step and clone the project locally.

## Setup

1. Create a Repl.it account at https://repl.it/signup
2. Clone the app in repl.it by clicking this button [![Run on Repl.it](https://repl.it/badge/github/pramodsum/GHC20-React-Template)](https://repl.it/github/pramodsum/GHC20-React-Template)

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

Think about which parts of the page are re-used. What's based on an `if` statement? 

See the breakdown [here](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/home-component-breakdown.png?raw=true)

# Exercise 2: 

## Create a `ToppingRecipePage`

The page should look like the following: 
![Topping Recipe Page Screenshot](https://github.com/pramodsum/GHC20-React-Template/blob/master/images/Screen%20Shot%202020-03-31%20at%2012.19.29%20PM.png?raw=true)


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
The url will likely be  `https://{GITHUB_USERNAME}.github.io/tacopundit`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
