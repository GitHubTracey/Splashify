import Router from '../navigation/routes.js'

export const _goToUser = (navigator, username) => () => {
    navigator.push(Router.getRoute('user', {name: username}));
}
export const _goToLightBox = (navigator, blob) => () => {
    console.log('_goToLightBox, photoBlob: ', blob)
    navigator.push(Router.getRoute('lightbox', {photoBlob: blob}));
}

// export const _goBack = (navigator) => {
//     if (navigator.getCurrentIndex() > 0)
//         navigator.pop();
// }
