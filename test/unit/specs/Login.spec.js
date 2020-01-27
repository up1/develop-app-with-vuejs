import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login component', () => {
  it('renders login component', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.contains('.login')).toBe(true)
    expect(wrapper.contains('#email')).toBe(true)
  })
})
