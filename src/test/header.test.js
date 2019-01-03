import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import TestRenderer from 'react-test-renderer'
import Headerdesktop from '../components/layout/header/Headerdesktop'

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer()
  renderer.render(<Headerdesktop />)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should render Header correctly1', () => {
  const rendered  = TestRenderer.create(<Headerdesktop />)
  console.log(rendered.root)
  // expect(wrapper.find('a').text()).toBe('')
})