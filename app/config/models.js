import Realm from 'realm';

import Faves from './RealmObjects/Faves.js'

export default new Realm({ schema: [Faves] });