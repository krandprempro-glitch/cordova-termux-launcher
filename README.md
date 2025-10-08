# README

This is a small Apache Cordova Android app (package: `com.cordova.termuxlauncher`) that demonstrates launching external apps (Termux) using the community `cordova-plugin-app-launcher` plugin. 

Key areas:

- `package.json` — project metadata and Cordova devDependencies (cordova-android, plugin reference).
- `plugins/cordova-plugin-app-launcher/` — plugin source, Java implementation (`src/android/Launcher.java`), JS bridge (`www/Launcher.js`) and README with usage examples.
- `www/js/Launcher.js` and `www/index.html` — app-side usage examples and wiring.


### Before build: ###
Modify `AndroidManifest.xml` (platforms/CordovaLib)— declares a `<queries>` entry for `com.termux` (visibility):
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  android:versionName="1.0"
  android:versionCode="1">
  <queries>
    <package android:name="com.termux" />
  </queries>
</manifest>
```

