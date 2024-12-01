document.addEventListener('DOMContentLoaded', () => {
  const { createApp, ref } = Vue

  const vm = createApp({
    data() {
      return {
        price: 100,
        quantity: 2,
      }
    },
  })

  vm.mount('#app')

  const cm = createApp({
    setup() {
      const message = ref('Hello vue!')
      const noname = ref('YAYA')
      return {
        message,
        noname,
      }
    },
  })
  cm.mount('#app1')

  const xm = createApp({
    data() {
      return {
        name: 11,
      }
    },
  })

  xm.mount('#app2')
})
