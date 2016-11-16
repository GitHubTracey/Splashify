import Router from '../navigation/routes.js'

export const _goToUser = (navigator, username) => () => {
    navigator.push(Router.getRoute('user', {name: username}));
}

// export const _goBack = (navigator) => {
//     if (navigator.getCurrentIndex() > 0)
//         navigator.pop();
// }
