import React from 'react'
import { ForecastList } from '../index'
import { getForecastData } from './data'
import renderer from 'react-test-renderer'

const data = getForecastData()
it('renders correctly', () => {
  const tree = renderer.create(<ForecastList forecast={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
