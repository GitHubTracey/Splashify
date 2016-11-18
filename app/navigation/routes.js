import {
  createRouter,
} from '@exponent/ex-navigation';

import NavigationLayout from './NavigationLayout'
import About from '../scenes/About'
import Favourites from '../scenes/Favourites'
import Random from '../scenes/Random'
import Recent from '../scenes/Recent'
import User from '../scenes/User'
import LightBox from '../scenes/LightBox'

/**
  * This is where we map route names to route components. Any React
  * component can be a route, it only needs to have a static `route`
  * property defined on it, as in HomeScreen below
  */
export const Router = createRouter(() => ({
  navigationLayout: () => NavigationLayout,
  random: () => Random,
  favourites: () => Favourites,
  about: () => About,
  recent: () => Recent,
  user: () => User,
  lightbox: () => LightBox,
}));

export default Router