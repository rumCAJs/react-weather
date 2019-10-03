import React from 'react'
import { Loader } from '../Loader'
import { SuggestItem } from '../SuggestItem'
import { Wrapper, Line } from './styled'

const SuggestList = ({ items, onSuggestItemClick, isLoading, error, activeItem }) => {
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
