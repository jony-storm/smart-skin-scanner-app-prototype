# Smart Skin Scanner App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

All the default data is stored in `./src/data.js` file. Feel free to tweak this file if necessary.
Local storage was used for saving the settings.

## Setup Project and Run

In the project directory, you can run:

### `npm install`
To install all the necessary libraries.

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The pages will reload when you make changes.

## Import Notes
As this app is supposed to be a mobile app , running this app on a real mobile device will give the perfect experience.

## Running this app in mobile device
connect mobile phone in the same local network
open any browser in the mobile phone
put the ip address (or desktop device name) and port number
for example `192.168.128.1:3000` or `http://stormpcs:3000` here `stormpcs` is my pc's name.

## Running this app in the internet
any local tunneling like ngrok, localtunnel etc could be used.
for example to use ngrok
`ngrok http 3000`
for more info [link](https://www.sitepoint.com/use-ngrok-test-local-site/)

## More Available Scripts

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.