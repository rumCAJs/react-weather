import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Loader } from './Loader'
import { SuggestItem } from './SuggestItem'

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

export { SuggestList }
