const products = require('./products')


module.exports = [
  // 3 for 2 ult_small
  (cart) => {
    const ult_small = products.find(p => p.code === 'ult_small')
    const ult_small_cart = cart.items.filter(p => p.code === 'ult_small')
    const free = Math.floor(ult_small_cart.length / 3)
    const discount = ult_small.price * free
    return discount
  },
  // ult_large > 3, each item - 5
  (cart) => {
    const ult_small_cart = cart.items.filter(p => p.code === 'ult_large')
    const len = ult_small_cart.length
    let discount = 0;

    if (len > 3) {
      discount = len * 5
    }

    return discount
  }
]