import {
  createRouter,
} from '@exponent/ex-navigation';

import NavigationLayout from './NavigationLayout'
import About from '../scenes/About'
import Faves from '../scenes/Faves'
import Random from '../scenes/Random'
import Recent from '../scenes/Recent'
import User from '../scenes/User'
import Lightbox from '../scenes/Lightbox'

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  navigationLayout: () => NavigationLayout,
  random: () => Random,
  faves: () => Faves,
  about: () => About,
  recent: () => Recent,
  user: () => User,
  lightbox: () => Lightbox,
}));

export default Router