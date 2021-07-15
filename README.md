# Weather Forecast Application

This is a small project build with React library that provides users with the current weather and the forecast for the next 5 days of the city of their choice.

# Technology used

## Boiler Plate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Note: The app has been created with the "typescript" template, this will allow us to do static type check while developing the app.

## React hooks

- We are using a custom hook to fetch the weather forecast every time the user is submitting a new query for a city.
- We are also associating this custom hook to a reducer to handle the different states of the app while fetching the data.

## Linting

- We have installed ESLint that extends TypeScript to ensure code quality.
- We have also installed Prettier for code style consistency.

## Styling

We have chosen to not used any design system (i.e. Material, Bootstrap...) and go with Sass which is a "language" that gets transpilled back to CSS at the build time using "node-sass" library.

Here is how we implemented it:

- 1 x `variable.scss` file in 'src' folder where all the variables (colors, fonts...) are set.
- 1 x `style.scss` file in 'src' folder where all the initial/common styles for each html element can be defined (buttons, headers...)
- 1 x file per component called `<componentName>.scss` sitting in the same folder than the component. This file will start with the component id in order to make sure the style is applied to this component only.

e.g.

```
#my-component-id{
    button{
        ...
    }
}
```

## Testing

We have implemented some tests for:

- Testing proper rendering of the components and their props (using "react testing library" for DOM assessment)
- Unit tested the components business logic (using "Jest as a test runner")

## API

- We are using Open Weather to get forecast data => https://openweathermap.org/api

# Project Architecture

We are following the React community standards to structure our React project:

- All dev config files in the root folder (linting, typescript, prettier...)
- Un the `public` folder, the index.html file and all the assets referred by the different `link` tags in the index.html header.
- In the `src` folder:
  - The global style files (variables, common style).
  - The index and App component files.
- Under `assets`, all the static assets or your app (video, gifs, images...).
- Under `components`, all the React components (although this will evolve as our App is growing).
- Under `hooks`, all the custom hooks that are being developed during this app's lifetime.

## Install and running the app

Clone this project into your local machine.

Create a `.env` file in the root folder and write your Open Weather API key `REACT_APP_OPEN_WEATHER_API_KEY=...`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Improvements

### 1 call API

The open weather API gives us a "/onecall" endpoint to get the current weather and forecast of a lat / lon position. The problem is that we want the user to enter a city and not its gps coordinates. So we are using another endpoint from the same API called "/weather" to send the user query and get back its lat and lon. Then we get call the "/oncall" api.

We should definitely:

- Try to see if there is a way to only use one API call
- Or use another API that could give us back (as the user is typing) city suggestions along with their lat and lon (i.e. Google GeoCoding, MapBox...). This will still make us using 2 endpoints but at least we can provide a better user experience.

### Implementation of a CSS-In-JS library

As using single SCSS file for each component might be a little bit overwhelming and make our file structure looking very busy, I would suggest to use a CSS-IN-JS library like `styles-components` or `JSS` which will allows us to style our components using JavaScript within our `component.tsx` file.

### Testing

- To be done => We need to test the main App component by stubbing the API.

### Other

- Using Weather Icon to embellish our application since the icons provided by Open Weather are really basic. Here is a repo that claims to have done the mapping between Open Weather IconId and the Open Weather icons (https://gist.github.com/tbranyen/ 62d974681dea8ee0caa1).
- Redirecting all urls to the root component (to handle 404)
- Improve style 😉
