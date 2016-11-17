import Router from '../navigation/routes.js'

export const _goToUser = (navigator, username) => () => {
    navigator.push(Router.getRoute('user', {username: username}));
}
export const _goToLightBox = (navigator, blob) => () => {
    navigator.push(Router.getRoute('lightbox', {photoBlob: blob}));
}

export const _goBack = (navigator) => {
        navigator.pop();
}
