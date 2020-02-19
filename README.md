# COMP231_TheHealthyTheory
The Healthy Theory is an ionic-based Angular app with Capacitor to invoke Native SDKs on Android, iOS as well as the Web using one code base.

The codebase consists of:
-Server (MongoDB Atlas, Express, Node)
	-app.js (express)
	-server.js (node)
	-config
		-db.js (Mongoose)
		-default.json (Contains MongoDB URI)

To run, navigate to the server directory and through the terminal run ‘node server.js’, You should see the server up and running, this also establishes a connection to the database. APIs could be looked on, I was planning to use Swagger to manage all APIs but the problem seems to be with the collaboration (I need to look into) for teams, there is a 14-day trial after then I don’t know how will it behave.
	
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

To run, navigate to the client directory and ‘ionic serve’ - Default View is constructed of a sidebar template (to be modified accordingly - just for reference purposes)

Note: I’ve added the native platforms for both Android and iOS, there will be two folders in the directory for each. Capacitor is only for the purposes of deploying to the native platforms (iOS and Android), Since, ionic is a framework of a kind where only one code base is required and the Capacitor comes into hand when we want to copy our web code to the native platforms.

See more: https://capacitor.ionicframework.com/docs/basics/building-your-app
See more: https://ionicframework.com/docs/components (These are ionic UI Components to make use of)

Also, in order to have the app work with native elements, Cordova and Capacitor Plugins could be leveraged (ie in order to use device camera, location, etc.)

See more: https://capacitor.ionicframework.com/docs/apis/


n
