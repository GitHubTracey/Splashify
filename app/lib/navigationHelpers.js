import Router from '../navigation/routes.js'

_goToPage = (navigator, route) => {
    navigator.push(Router.getRoute(route));
}

_goBack = (navigator) => {
    if (navigator.getCurrentIndex() > 0)
        navigator.pop();
}