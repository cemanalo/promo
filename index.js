const pricingRules = require('./src/pricingRules')
const ShoppingCart = require('./src/shoppingCart')
const products = require('./src/products')

const cart = ShoppingCart.new(pricingRules)

// 0 = ult_small
// 1 = ult_medium
// 2 = ult_large
// 3 = 1gb

// add product here
// sample 4th scenario
// cart.add(products['0'])
// cart.add(products['3'], 'I<3AMAYSIM')

cart.add(products[0])
cart.add(products[1])
cart.add(products[1])

// log the cart
console.log(cart.items)
console.log(cart.total)
