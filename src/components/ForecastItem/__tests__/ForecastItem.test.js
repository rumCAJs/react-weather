import React from 'react'
import { ForecastItem } from '../index'
import renderer from 'react-test-renderer'

const data = [
  {
    dt_txt: '2019-09-25 09:00:00',
    main: {
      temp: 17
    },
    weather: [
      {
        icon: '04d'
      }
    ]
  }
]

it('renders correctly', () => {
  const tree = renderer.create(<ForecastItem data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
