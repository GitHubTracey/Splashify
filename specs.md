layout: project
title: Project 4 - Splashify
due: Monday, November 21st (beginning of class)
class: gh-check
---

Build a mobile application using React Native that accesses the Unsplash API to allow users to view recently posted photos, search for photos, and store their favourite photos in a database.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

You can [download the project assets here](https://s3-us-west-2.amazonaws.com/red-adp/project-files/project-04.zip).

## Requirements

### Common

Your project must:

- [X] Be pushed to Github
- [X] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [X] Use small, single purpose Git commits
- [X] Contain `README.md` with project summary and setup
- [X] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [X] Contain `.gitignore` file (ignoring `node_modules` and system files)
- [X] Contain this self-evaluated spec checklist renamed `specs.md`
- [X] Use ESLint with the [AirBnB style-guide](https://github.com/airbnb/javascript)

### Functional

Your project must:

- [X] Contain About, Faves, Lightbox, Random, Recent, and User scenes
- [X] Display a feed of the five latest photos posted to Unsplash in a Recent Scene
- [X] Display photos in a Lightbox scene when tapped
- [X] Allow users to favourite and un-favourite photos from the Lightbox scene, and save references to those photos in a mobile database
- [X] Allow users to save an image to their camera roll from the Lightbox scene
- [X] Display data about a photographer inside a User scene when an Unsplash username is tapped
- [X] Display previously favourited photos in a Faves scene in a grid format, and in reverse chronological order (i.e. most recently saved first)
- [X] Include a Random scene that displays a random photo
- [X] Include an About scene with static image assets (optimized up to @3x) 
- [ ] Include an About scene with static text that opens URLs in a web browser
- [X] Display a loading indicator when data is being fetched

### Development

Your project must:

- [X] Contain components built using valid JSX
- [X] Use ES2015 `import` and `export`
- [X] Contain components created using `React.Component`, `const`, or `function` only
- [X] Implement "presentational" and "container" components appropriately throughout the application
- [X] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<ListView>`, `<TouchableHighlight>`, etc.)
- [X] Implement styles on a per-component basis using `Stylesheet.Create`
- [X] Leverage code-reuse strategies across iOS and Android platforms as much as possible
- [X] Use [ExNavigation](https://github.com/wix/react-native-navigation) to implement a navigator (iOS/Android), tab bar (iOS only), and drawer (Android only) for scene navigation
- [X] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [X] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as an embedded database

### Stretch Goals

Want to challenge yourself? Your project could also:

**Improve code efficiency and quality:**

- [ ] Include Redux for state management in the app
- [ ] Use Flow for static typechecking in the app

**Enhance UX:**

- [ ] Cache requests made to the Unsplash API (to improve performance and reduce the likelihood of hitting the Unsplash API rate limit)
- [ ] Use React Native's `Animated` and `PanResponder` to build out custom animation that allows a user to swipe left to load a new random photo in the Random scene
- [ ] Add the ability to dynamically append additional results wherever the Unsplash API permits pagination (consider exploring an enhanced, third-party listview component for this)

**Include Search and Collections scenes:**

- [ ] Allow users to search for photos using a text-based keyword
- [ ] Display fetched search results in a grid format
- [ ] Display a list of recent collections in the Search scene by default (under the search bar)
- [ ] Display a feed of the five most popular collection photos in a Collection scene when a collection cover image is tapped from the Search scene