import Realm from 'realm';

export default class Faves extends Realm.Object {}
Faves.schema = {
    name: 'Faves',
    primaryKey: 'id',
    properties: {
        id: 'string',
        faved_on: 'date',
    }
};