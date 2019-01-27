const assert = require('assert')
const _ = require('lodash')
const pricingRules = require('../src/pricingRules')
const ShoppingCart = require('../src/shoppingCart')
const products = require('../src/products')

describe('Shopping Cart', () => {
  describe('Scenario 1: 94.70', () => {
    it('should have total of 94.70', () => {
      const cart = _.cloneDeep(ShoppingCart)
      cart.new(pricingRules)
      cart.add(products[0])
      cart.add(products[0])
      cart.add(products[0])
      cart.add(products[2])

      assert.equal(cart.total, 94.70)
    })
  })

  describe('Scenario 2: 209.40', () => {
    it('should have total of 209.40', () => {
      const cart = _.cloneDeep(ShoppingCart)
      cart.new(pricingRules)
      cart.add(products[0])
      cart.add(products[0])
      cart.add(products[2])
      cart.add(products[2])
      cart.add(products[2])
      cart.add(products[2])

      assert.equal(cart.total, 209.40)
    })
  })

  describe('Scenario 3: 84.70', () => {
    it('should have total of 84.70', () => {
      const cart = _.cloneDeep(ShoppingCart)
      cart.new(pricingRules)
      cart.add(products[0])
      cart.add(products[1])
      cart.add(products[1])

      assert.equal(cart.total, 84.70)
    })
  })

  describe('Scenario 4: 31.32', () => {
    it('should have total of 31.32', () => {
      const cart = _.cloneDeep(ShoppingCart)
      cart.new(pricingRules)
      cart.add(products[0])
      cart.add(products[3], 'I<3AMAYSIM')

      assert.equal(cart.total, 31.32)
    })
  })
})