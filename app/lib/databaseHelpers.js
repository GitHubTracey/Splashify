import realm from '../config/models.js';

/*
    A function that checks if a particular photo has been faved. It should return true or false. 
    We can use it to conditionally render the colour of the star icon in the Photobox scene.
*/
export const isPhotoFaved = (photoId) => {
    console.log('check if isPhotoFaved: ', photoId)
    let favedPhoto = realm.objects('Fave').filtered('id==$0', photoId)
    console.log(favedPhoto)
    console.log('length > 0?', favedPhoto.length > 0)
    return favedPhoto.length > 0 ? true : false;
}
/*
    A function that saves or deletes a photo as a fave. If the photo is already faved it should be 
    deleted from the database, otherwise it should be added to the database. We can use this 
    function to take the appropriate write action when the star icon is tapped in the Photobox scene.
*/
export const updatePhotoFave = (photoId, isPhotoFaved) => {
    console.log('updatePhotoFave: ', photoId, ' isPhotoFaved: ', isPhotoFaved)
    if (isPhotoFaved) {
        console.log('photo is faved')
        let photo = realm.objects('Fave').filtered('id==$0', photoId)

        realm.write(() => {
            realm.delete(photo)
        })
    } else {
        console.log('photo not yet faved')
        realm.write(() => {
            realm.create('Fave', { id: photoId, faved_on: new Date() })
        })
    }
}