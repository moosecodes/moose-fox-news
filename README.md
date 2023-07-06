# Fox News Take Home Excercise

Welcome to Mustafa Ishaq's demonstration repository for Fox News.  This application pulls in data from `https://dummyjson.com/products` and parses the information into the view.  This application also manages application state via a store made with Pinia for Nuxt.

<img width="500" alt="image" src="https://github.com/moosecodes/moose-fox-news/assets/16247040/ed25692b-b22d-49cc-86a8-bc89891e0151">

## Features

- Vue 3 using the Nuxt 3 framework
- Pinia for Nuxt
- Uses built in `useFetch` composable to retrive data from an external API
- Fetched data is passed down as a prop from main App component to a child component
- The data is presented on the screen using standard Vue directives like `v-if` and `v-for`.

## Extra Feature

There is an additional Shopping cart feature which allows the user to:

- Add/remove items from the cart
- View the name & individual cost for each item
- View the number of items added & total price for these items

## Additonal Notes

I was careful not to add too many dependencies, as indicated by the instructions:  I have avoided adding packages like Material UI, TailwindCSS or SASS since it would mean adding more overhead.


## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Moosecodes
