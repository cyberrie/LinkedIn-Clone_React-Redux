# Helena's LinkedIn Clone (Login and Home)

This project is a clone of LinkedIn's login and home page, created using React and React Redux. It was created as a portfolio project to solidify React skills and showcase proficiency with Redux and Firebase.

## Project Overview

The project uses React Redux to manage state and Material UI for styling. It is deployed using Firebase, and user data is stored in Cloud Firestore. Users can register with their name, email, and password, and create new posts which will render onto the feed section. On refresh, the user will stay logged in as login details are stored in Redux.

## Usage

- ### Prerequisites

To run this project, you will need to have Node.js installed on your machine. You will also need to have a Firebase account set up with a Cloud Firestore database.

- ### Installation

1. Clone this repository to your local machine

2. Run npm install to install the necessary dependencies

3. Create a .env.local file in the root directory and add your Firebase credentials:

```
REACT_APP_FIREBASE_API_KEY=<your-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
```

4. Run `npm start` to start the developent server

   - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- ### Usage

- User can access the app via the following link: [Helena's LinkedIn Clone](https://linkedin-clone-cyberrie.web.app)

- Once loaded, user can follow below steps (please do not input any sensitive data):

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

- Insert your Name
- Profile Pic URL is optional
- Insert Email
- Insert Password
- Click on 'Register Now'

- User can create new post which will render onto Feed section

- Click Avatar in the header to logout

- On refresh, user will stay logged in as login details are stored in Redux

- Once registered, user can Sign In with registered details

## Built With

- React Redux
- Material UI
- Deployed with Firebase

## Useful Resources

- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- To learn React, check out the [React documentation](https://reactjs.org/).

- To explore Firebase, check out [this website](https://firebase.google.com/).

- For styling, find out more in the [Material UI](https://mui.com/).
