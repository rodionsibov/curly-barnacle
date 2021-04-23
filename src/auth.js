export default function (next, store) {
    !store.state.isLoggedIn ? next('/') : next()
}