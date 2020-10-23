const micros = [
  {
    name: 'vue01',
    entry: process.env.VUE_APP_CHILD_VUE01,
    activeRule: '/vue'
  },
  {
    name: 'react01',
    entry: process.env.VUE_APP_CHILD_REACT01,
    activeRule: '/react'
  }
]
const apps = micros.map(item => {
  return {
    ...item,
    container: '#micro-viewport', // 子应用挂载元素id
    props: {
      routerBase: item.activeRule // 下发基础路由
    }
  }
})

export default apps
