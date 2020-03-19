# Ionic Angular App
The Healthy Theory is an Angular application which enables users to help connect with dietitians/nutritionists nearby to help them achieve their goals bringing them one step closer towards a healthy lifestyle.

## Prerequisites
You’ll need the node.js, npm and ionic cli pre-installed. Make sure you already have them before start. Please refer to  ionic docs  how to do this. You need Ionic framework >= 2.0 to run this example, so make sure you have the right Ionic version:
```
ionic -v
```
The Healthy Theory is an ionic-based Angular app with Capacitor to invoke Native SDKs on Android, iOS as well as the Web using one codebase.

The codebase consists of:
-Server (MongoDB Atlas, Express, Node)
	-app.js (express)
	-server.js (node)
	-config
		-db.js (Mongoose)
		-default.json (Contains MongoDB URI)

To run, navigate to the server directory and through the terminal run ‘node server.js’, You should see the server up and running, this also establishes a connection to the database. 
	
-Client (Angular as a framework and ionic as a Hybrid/Native with Capacitor)
	-android (for capacitor use only - Native XCode)
		-app
			-src
		-...
	-ios (for capacitor use only - Native Android Studio)
		-app
			-src
		-...
	-src
		-app (components/modules/services/routes goes here)
		-index.html
		-main.ts
		-global.scss (global styles)
	
	-angular.json
	
	-package.json

	-ionic.config.json

To run, install the required dependencies using ‘npm install’ navigate to the client directory and run ‘ionic build’ and then ‘ionic serve’ - Default View is constructed of a sidebar template (to be modified accordingly - just for reference purposes)

Note: I’ve added the native platforms for both Android and iOS, there will be two folders in the directory for each. The capacitor is only for the purposes of deploying to the native platforms (iOS and Android), Since, ionic is a framework of a kind where only one code base is required and the Capacitor comes into a hand when we want to copy our web code to the native platforms.

See more: https://capacitor.ionicframework.com/docs/basics/building-your-app
See more: https://ionicframework.com/docs/components (These are ionic UI Components to make use of)

Also, in order to have the app work with native elements, Cordova and Capacitor Plugins could be leveraged (ie in order to use device camera, location, etc.)

See more: https://capacitor.ionicframework.com/docs/apis/

Also, here are the Angular docs: https://angular.io/docs
