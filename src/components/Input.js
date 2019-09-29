import React from 'react'
import styled from 'styled-components'

function Input({ className, defaultValue, onChange, placeholder }) {
  return (
    <input
      className={className}
      defaultValue={defaultValue}
      onChange={evt => onChange(evt.target.value)}
      placeholder={placeholder}
    />
  )
}

const height = '48px'
const StyledInput = styled(Input)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.color || '#0074D9'};
  color: ${props => props.color || '#0074D9'};
  margin: 15px 0;
  padding: 0.25em 1em;
  height: ${height};
  line-height: ${height};
  width: 70%;
  font-size: 24px;
  text-align: center;
  margin-left: 15%;
`

export { StyledInput as Input }
