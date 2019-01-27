const pricingRules = require('./src/pricingRules')
const ShoppingCart = require('./src/shoppingCart')
const products = require('./src/products')

// 0 = ult_small
// 1 = ult_medium
// 2 = ult_large
// 3 = 1gb

const cart = ShoppingCart.new(pricingRules)

cart.add(products[0])
cart.add(products[1])
cart.add(products[1])

console.log(cart.items)
console.log(cart.total)

// console.log(cart.items.filter(p => p.code === 'ult_small'))
// console.log(products.find(p => p.code === 'ult_small'))
// console.log(Math.floor(cart.items.filter(p => p.code === 'ult_small').length / 3))