#### Tutorial

##### [Setup CLI](https://ionicframework.com/docs/intro/cli) :

- Ionic apps are created and developed primarily through the Ionic command-line utility

  ```bash
  # @install
  npm install -g @ionic/cli

  # @update [uninstall and install due to package update]
  npm uninstall -g ionic
  npm install -g @ionic/cli
  ```

##### [Start App](https://ionicframework.com/docs/developing/starting) :

- Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh

  ```bash
  ionic start
      [name : project-name]
      [templates : tabs | sidemenu | blank |   my-first-app]
      [--type : angular | react | vue]

  # @Example :
  ionic start my-first-app blank --type = angular
  # or
  ionic start my-first-app blank --type angular
  ```

- For more [help](https://ionicframework.com/docs/v3/cli/start/) :

  ```bash
  # @on CLI
  ionic help

  # @arguments for `ionic start`
  ionic start --list
  ```

##### [Run App](https://ionicframework.com/docs/intro/cli#run-the-app) :

- After you have created your first app, `cd` into the created project-folder and to serve your project use :

  ```bash
  ionic serve
  ```

- For Build (will be available in `www` folder):
  ```bash
  ionic build
  ```

##### [Ionic + Angular](https://ionicframework.com/docs/intro/cdn#ionic--angular)

- When using Ionic Framework in an Angular project

  ```bash
  npm install @ionic/angular@latest --save
  ```

  Each time there is a new Ionic Framework release, this version will need to be updated to get the latest features and fixes.
  <br>

- For adding Ionic to an already existing Angular project, use the Angular CLI's ng add feature.

  ```bash
  ng add @ionic/angular
  ```

##### [What's Next ⏭ ](./first-app.md)
