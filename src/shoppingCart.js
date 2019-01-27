module.exports = {
    items: [],
    promoCode: '',
    pricingRules: [],
    total: 0,

    new(pricingRules) {
      this.pricingRules = pricingRules
      return this
    },

    /**
     * 
     * @param {*} item Product
     * @param {*} promoCode string
     */
    add(item, promoCode) {
      if(promoCode) {
        this.promoCode = promoCode
      }
      this.items.push(item)
      
      this.recompute()
    },

    recompute() {
      const total = this.items.reduce((a,c) => a + c.price, 0);
      const discounts = this.pricingRules.map(rule => {
        if(typeof rule ===  'function') {
           return rule(this)
        }
        return 0
      })
      const totalDiscounts = discounts.reduce((a,c) => a + c)
      this.total = Number.parseFloat(total - totalDiscounts).toFixed(2)
      
      this.applyPromo()
    },

    // every checkout will only have one promo code
    applyPromo() {
      if (this.promoCode) {
        const promo = this.pricingRules.find(rule => rule.promoCode === this.promoCode)
        if (promo) {
            promo.apply(this)
        }
      }
    }
}