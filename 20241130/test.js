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

  const hm = createApp({
    data() {
      return {
        twd: 0.2204,
        jpy: 1,
      }
    },
    methods: {
      totalmoney1: function () {
        return (this.jpy = Number.parseFloat(Number(this.twd) / 0.2204).toFixed(
          4
        ))
      },
      totalmoney2: function () {
        return (this.twd = Number.parseFloat(Number(this.jpy) * 0.2204).toFixed(
          4
        ))
      },
    },
  })
  hm.mount('#app7')

  const im = createApp({
    data() {
      return {
        twd: 0.2204,
      }
    },
    computed: {
      jpy: {
        get() {
          return Number.parseFloat(Number(this.twd) / 0.2204).toFixed(4)
        },
        set(val) {
          this.twd = Number.parseFloat(Number(val) * 0.2204).toFixed(4)
        },
      },
      usd: {
        get() {
          return Number.parseFloat(Number(this.twd) / 32.73).toFixed(4)
        },
        set(val) {
          this.twd = Number.parseFloat(Number(val) * 32.73).toFixed(4)
        },
      },
    },
  })
  im.mount('#app8')

  const jm = createApp({
    data() {
      return {
        isBtnDisabled: true,
      }
    },
  })
  jm.mount('#app9')

  im.mount('#app8')

  const km = createApp({
    data() {
      return {
        picked: 1,
      }
    },
  })
  km.mount('#app10')

  const lm = createApp({
    data() {
      return {
        picked: [],
      }
    },
  })
  lm.mount('#app11')
})
