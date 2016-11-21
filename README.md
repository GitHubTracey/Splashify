Project Summary

    A a mobile application using React Native that accesses the Unsplash API to allow users to 
view recently posted photos, search for photos, and store their favourite photos in a database.


** Require Android Virtual Device (AVD) Manager to run
1. Download from github
2. run npm install


iOS
1. Open app in vs code and start react-native packager
2. run react-native run-ios --simulator="iPhone 6"

Android
1. Open a Terminal and run android avd
2. Create a device: 
    AVD Name: Nexus7
    Device: Nexus 7 (7.02", 1200 x 1920: xhdpi)
    Skin: No skin
    Emulator Options: Use Host GPU
    > all other items default
3. Click OK.
4. Select Device from list and click Start...
5. Click Launch
6. Open terminal in project directory
7. run react-native run-android