module.exports = {
    items: [],
    promoCode: '',
    pricingRules: [],
    total: 0,

    new(pricingRules) {
      this.pricingRules = pricingRules
      return this
    },

    add(item, promoCode) {
      if(promoCode) {
        this.promoCode
      }
      this.items.push(item)
      
      this.recompute()
    },

    recompute() {
      const total = this.items.reduce((a,c) => a + c.price, 0);
      const discounts = this.pricingRules.map(rule => rule(this))
      const totalDiscounts = discounts.reduce((a,c) => a + c)
      this.total = total - totalDiscounts
    }
}