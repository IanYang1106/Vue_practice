document.addEventListener('DOMContentLoaded', () => {
  const { createApp, ref } = Vue

  const am = createApp({
    data() {
      return {
        price: 100,
        quantity: 2,
      }
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
})
