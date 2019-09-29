import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Loader } from './Loader'
import { Temp, TYPES } from './Temp'
import { Icon } from './WeatherIcon'
import conf from '../config'

const SuggestList = ({ items, onSuggestItemClick, isLoading, error, activeItem }) => {
  const Wrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    cursor: pointer;
  `

  const Line = styled.div`
    text-align: center;
  `

  return (
    <>
      {items && items.length > 0 && <Line>Select one location from the below list</Line>}
      <Wrapper>
        {isLoading && <Loader />}
        {items && items.length === 0 && <Line>The location you're looking for was not found</Line>}
        {items &&
          items.map(item => (
            <SuggestItem
              key={item.id}
              item={item}
              onClick={() => {
                onSuggestItemClick(item.id)
              }}
              isActive={activeItem && activeItem.id === item.id}
            />
          ))}
      </Wrapper>
    </>
  )
}

const TempLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`

const SuggestItem = ({ item, onClick, isActive }) => {
  const Item = styled.div`
    padding: 8px;
    border: 1px solid ${props => (props.isActive ? '#0074D9' : '#AAAAAA')};
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${props => (props.isActive ? 'rgba(150, 150, 150, 0.1)' : 'transparent')};
    font-size: 24px;
    box-shadow: 0 0 5px ${props => (props.isActive ? 'rgba(0, 0, 0, 0.7)' : 'transparent')};

    :last-child {
      margin-right: 0;
    }
  `
  return (
    <Item onClick={onClick} isActive={isActive}>
      {item.name}, {item.sys.country} <img src={`${conf.FLAG_BASE_URL}${item.sys.country.toLowerCase()}.png`} />
      <TempLine>
        <Temp temp={item.main.temp} type={TYPES.NORMAL} />
        <Icon icon={item.weather && item.weather[0] ? item.weather[0].icon : null} width={28} height={28} />
      </TempLine>
    </Item>
  )
}

export { SuggestList }
