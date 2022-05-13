export default function (context) {
    if (context.store.getters.users.user === null) {
        //check content.route.name
        context.redirect('/auth')
    }
}
