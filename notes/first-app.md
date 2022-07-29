#### [v5 - Source](https://ionicframework.com/docs/v5/angular/your-first-app)

##### [Install Ionic Tooling](https://ionicframework.com/docs/v5/angular/your-first-app#install-ionic-tooling)

```sh
npm install -g @ionic/cli native-run cordova-res
```

- `native-run` : used to run native binaries on devices and simulators/emulators,
- `cordova-res` : generate native app icons and splash screens

##### [Create an App](https://ionicframework.com/docs/v5/angular/your-first-app#create-an-app)

- Next, create an Ionic Angular app that uses the “Tabs” starter template and adds Capacitor for native functionality:

  ```sh
  ionic start photo-gallery tabs --type=angular --capacitor
  ```

- Next, change into the app folder:

  ```sh
  cd photo-gallery
  ```

- Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:

  ```sh
  npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
  ```

##### [PWA Elements​]()

- Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic PWA Elements library.

  It's a separate dependency, so install it next:

  ```sh
  npm install @ionic/pwa-elements
  ```

- Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

  ```js
  import { defineCustomElements } from "@ionic/pwa-elements/loader";

  // Call the element loader after the platform has been bootstrapped
  defineCustomElements(window);
  ```

- That’s it! Now run the app using `ionic serve` and open the app in a browser.
