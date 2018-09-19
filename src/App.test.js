import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Form Validation', () => {

  it('firstName should be required', () => {
    const firstName = ''
    const lastName = 'Bogus'
    const email = 'bogus@bogus.com'

    const wrapper = shallow(<App />)
    wrapper.setState({ firstName, lastName, email })
    expect(wrapper.state().firstName.length).toBe(0)

    const button = wrapper.find('button')
    button.simulate('click')

    // const form = wrapper.find('form')
    // form.simulate('submit', {
    //   preventDefault() {
    //
    //   }
    // })

  })
  it('firstName should be at least 2 characters')
  it('firstName should be at most 128 characters')

  it('lastName should be required')
  it('lastName should be at least 2 characters')
  it('lastName should be at most 128 characters')

  it('email should be required')
  it('email is an email address')

})

