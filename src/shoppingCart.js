module.exports = {
    items: [],
    promoCode: '',
    pricingRules: [],
    total: 0,
    purchasedItems: [],
    freebies: [],

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
      this.purchasedItems.push(item)
      
      this.recompute(item)
    },

    recompute(item) {
      const rules = this.pricingRules.map(rule => {
        if(typeof rule ===  'function') {
           return rule(this, item)
        }
        return 0
      })

      // console.log(rules)
      this.applyFreebies(rules)
      this.applyDiscount(rules)
      this.applyPromo()
    },

    applyFreebies(rules) {
      const freebies = rules.filter(rule => typeof rule === 'object' && rule.type === 'product')
      const flattendFreebies = freebies.reduce((a, c)=> a.concat(c.products), [])
      // console.log(flattendFreebies)
      this.items = this.purchasedItems.concat(flattendFreebies)
    },
    applyDiscount(rules) {
      const total = this.purchasedItems.reduce((a,c) => a + c.price, 0);
      const discounts = rules.filter(rule => typeof rule === 'number')
      const totalDiscounts = discounts.reduce((a,c) => a + c)
      this.total = Number.parseFloat(total - totalDiscounts).toFixed(2)
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