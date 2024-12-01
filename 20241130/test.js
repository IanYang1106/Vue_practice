document.addEventListener('DOMContentLoaded', () => {
  const { createApp, ref, computed, methods } = Vue

  const am = createApp({
    data() {
      return {
        price: 100,
        quantity: 2,
      }
    },
    methods: {
      subtotal: function () {
        return this.price * this.quantity
      },
    },
  })

  am.mount('#app')

  const bm = createApp({
    setup() {
      const message = ref('Hello vue!')
      const noname = ref('YAYA')
      return {
        message,
        noname,
      }
    },
  })
  bm.mount('#app1')

  const cm = createApp({
    data() {
      return {
        name: 11,
      }
    },
  })

  cm.mount('#app2')

  const dm = createApp({
    template: `<div>2025年1月發售：{{new_game}}</div>`,
    data() {
      return {
        name: 11,
        new_game: 'monster hunter',
      }
    },
  })

  dm.mount('#app3')

  const em = createApp({
    data() {
      return {
        price: 100,
        quantity: 2,
      }
    },
    methods: {
      subtotal: function () {
        return this.price * this.quantity
      },
    },
  })
  em.mount('#app4')

  const fm = createApp({
    data() {
      return {
        price: 100,
        quantity: 2,
      }
    },
    computed: {
      subtotal1: function () {
        return this.price * this.quantity
      },
    },
  })
  fm.mount('#app5')

  const gm = createApp({
    data() {
      return {
        twd: 0.2204,
        jpy: 1,
      }
    },
    computed: {
      totalmoney: function () {
        return this.twd * this.jpy
      },
    },
  })
  gm.mount('#app6')
})
