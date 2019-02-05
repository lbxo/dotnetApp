import Vue from 'vue'
import SopList from '@/components/SopList'

describe('SopList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SopList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
