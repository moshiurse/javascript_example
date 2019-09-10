const user = {
    name: 'Moshiur',
    active: true,
    cart: [],
    purchases: []
};

const compose = (f,g) => (...args) => f(g(...args))

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItem,
    addItemToCart
)(user,{name: 'Mobile', price: 2000});

function purchaseItem(...fns) {
    return fns.reduce(compose);
}

function addItemToCart(user, item) {
    const updateCart = user.cart.concat(item);
    return Object.assign({},user,{item: updateCart});
}

function applyTaxToItem(user) {
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return{
            name: item.name,
            price: item.price*taxRate
        }
    })

    return Object.assign({},user,{cart: updatedCart});
}

function buyItem(user) {
    return Object.assign({}, user,{purchases: user.cart});
}

function emptyCart(user) {
    return Object.assign({},user,{cart: []});
}