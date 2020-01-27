import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders hello component', () => {
    const msg = 'Welcome to Your Vue.js App'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.hello h1').text()).toMatch(msg)
  })

  it('renders hello component with mount()', () => {
    const msg = 'Welcome to Your Vue.js App'
    const wrapper = mount(HelloWorld)
    expect(wrapper.find('.hello h1').text()).toMatch(msg)
  })
})
