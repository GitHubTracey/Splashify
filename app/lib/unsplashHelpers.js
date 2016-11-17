import Unsplash, { toJson } from 'unsplash-js/native';
import { unsplash } from '../config/apikeys.js';

export const getFullPhotoData = (photosJson) => {
    return Promise.all(photosJson.map(photo => {
        return unsplash.photos.getPhoto(photo.id)
            .then(toJson)
            .then(json => {
                return json;
            })
            .catch(error => console.log(`getFullPhotoData: Error fetching photo JSON: ${error}`));
    }));
}