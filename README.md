# thefaultinourstreams.io

The production environment for a more reactive business front coming to a recruitment team near you.

The current goals of the production environment (subject to change per development cycle) are as follows.

Goal  | Achieved
------------- | -------------
Development of a view modelling layer written in React mocking current implementation of mmacheerpuppy.io (old username branding)  | ❌
Evolution of the view model layer to feature a projects page supporting graphing (to be informed by streaming API) | ❌
Integration of the view model layer with each proposed deployment environment and performance benchmarks, in particular between either Erlang or Node.js cluster execution environment | ❌
Finalization of backend streaming API delivering data from existing Hadoop services  | ❌
Integration of backend streaming API delivering data from existing Hadoop services  | ❌


# react-dev

Development for the view layer of the web-application. Currently bootstrapped with `create-react-app`. Documentation for `create-react-app` is inserted below for user convenience. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# phx-dev

Development for the phoenix deployment environment.

# node-dev

Development for the node deployment environment.
