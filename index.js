const pricingRules = require('./src/pricingRules')
const ShoppingCart = require('./src/shoppingCart')
const products = require('./src/products')

// 0 = ult_small
// 1 = ult_medium
// 2 = ult_large
// 3 = 1gb

const cart = ShoppingCart.new(pricingRules)

cart.add(products['0'])
cart.add(products['3'], 'I<3AMAYSIM')

console.log(cart.items)
console.log(cart.total)
