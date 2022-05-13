export default function ({ route, store, redirect }) {
    // console.log("navigation context", route.name);
    if (route.name) {
        if (route.name.includes('index')) {
            store.dispatch("nav/changePage", 'index');
        } else if (route.name.includes('login')) {
            store.dispatch("nav/changePage", 'login');
        } else if (route.name.includes('signup')) {
            store.dispatch("nav/changePage", 'signup');
        } else if (route.name.includes('bestfood')) {
            store.dispatch("nav/changePage", 'bestfood');
        } else if (route.name.includes('cart')) {
            store.dispatch("nav/changePage", 'cart');
        } else if (route.name.includes('food')) {
            store.dispatch("nav/changePage", 'food');
        } else if (route.name.includes('food-requests')) {
            store.dispatch("nav/changePage", 'food-requests');
        } else if (route.name.includes('legals')) {
            store.dispatch("nav/changePage", 'legals');
        } else if (route.name.includes('orders')) {
            store.dispatch("nav/changePage", 'orders');
        } else if (route.name.includes('profile')) {
            store.dispatch("nav/changePage", 'profile');
        } else if (route.name.includes('search')) {
            store.dispatch("nav/changePage", 'search');
        } else if (route.name.includes('track-food')) {
            store.dispatch("nav/changePage", 'track-food');
        } else if (route.name.includes('transactions')) {
            store.dispatch("nav/changePage", 'transactions');
        } else if (route.name.includes('vendor')) {
            store.dispatch("nav/changePage", 'vendor');
        }
    }
}