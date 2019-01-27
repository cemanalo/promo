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
  // ult_large > 3, each item 39.9
  (cart) => {
    const ult_large = products.find(p => p.code === 'ult_large')
    const ult_large_cart = cart.items.filter(p => p.code === 'ult_large')
    const len = ult_large_cart.length
    let discount = 0;
    
    if (len > 3) {
      const discountEach = ult_large.price - 39.9
      discount = len * discountEach
    }
    return discount
  },
  // 1 ult_medium = 1 free 1gb
  (cart) => {
    const _1g = products.find(p => p.code === '1gb')
    const ult_medium_cart = cart.items.filter(p => p.code === 'ult_medium')
    const _1g_cart = cart.items.filter(p => p.code === '1gb')
    
    const free = Math.min(ult_medium_cart.length, _1g_cart.length)

    return _1g.price * free
  },
  {
    promoCode: 'I<3AMAYSIM',
    apply: (cart) => {
      const discount = cart.total * .1
      
      cart.total = Number.parseFloat(cart.total - discount).toFixed(2)
    }
  }
]