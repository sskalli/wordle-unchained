import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import App from './App.vue'

describe('App', () => {
  it('renders the starter boilerplate copy', () => {
    const wrapper = mount(App)

    expect(wrapper.get('h1').text()).toBe('Wordle Unchained')
    expect(wrapper.text()).toContain('Starter boilerplate ready for your components.')
    expect(wrapper.text()).toContain('src/components')
  })
})
