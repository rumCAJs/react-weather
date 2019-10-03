import React from 'react'
import { Button } from '../index'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Button>Facebook</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
