import Router from '../navigation/routes.js'

export const _goToUser = (navigator, username) => () => {
    navigator.push(Router.getRoute('user', {username: username}));
}
export const _goToLightbox = (navigator, blob) => () => {
    navigator.push(Router.getRoute('Lightbox', {photoBlob: blob}));
}

export const _goBack = (navigator) => {
        navigator.pop();
}
