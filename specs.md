---
layout: project
title: Project 4 - Splashify
due: Monday, November 21st (beginning of class)
class: gh-check
---

Build a mobile application using React Native that accesses the Unsplash API to allow users to view recently posted photos, search for photos, and store their favourite photos in a database.

Your project must be cross-platform (iOS/Android) and contain a database (Realm).

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

- [ ] Display a feed of the ten latest photos posted to Unsplash
- [X] Display photos in a Lightbox scene when tapped
- [X] Allow users to save an image to their camera roll from the Lightbox scene
- [X] Display data about a photographer when an Unsplash username is tapped
- [ ] Allow users to search for photos using a text-based keyword
- [ ] Display a list of recent collections in the default Search scene by default
- [ ] Display a feed of the ten most popular collection photos in a Collection scene when a collection cover image is tapped from the Search scene
- [X] Display fetched search results in a grid format
- [X] Allow users to favourite and un-favourite photos from the Lightbox scene, and save references to those photos in a mobile database
- [X] Display previously favourited photos in a Faves scene in a grid format, and in reverse chronological order (i.e. most recently saved first)
- [X] Display a loading indicator when data is being fetched
- [ ] Contain About, Collection, Faves, Lightbox, Loading, Recent, Search, and User scenes 

### Development

Your project must:

- [X] Contain components built using valid JSX
- [X] Use ES2015 `import` and `export`
- [X] Contain components created using `React.Component`, `const`, or `function` only
- [X] Implement "presentational" and "container" components appropriately throughout the application
- [X] Make appropriate use of React Native's UI components (including `<View>`, `<Text>`, `<Image>`, `<ListView>`, `<TouchableHighlight>`, etc.)
- [X] Implement styles on a per-component basis using `Stylesheet.Create`
- [X] Use [React Native Navigation](https://github.com/wix/react-native-navigation) to implement a cross-platform navigator and tab bar for scene navigation
- [X] Use [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) for icon assets throughout the app (specifically, the Octicon library)
- [X] Use [Realm React Native](https://realm.io/docs/react-native/latest/) as a database

### Quality

Your project must:

- [X] Contain an organized file tree separating stateless components from stateful scenes, as well as sub-directories for organizing files with configuration code reusable functions
- [X] Be free of lint errors from ESLint

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Include a Random scene that randomly displays a photos, and allows a user to swipe the screen to load another
- [ ] Add the ability to dynamically append additional results wherever the Unsplash API permits pagination (latest photos, search results, etc.)
