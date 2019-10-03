import styled from 'styled-components'

const height = '48px'
const StyledInput = Input => styled(Input)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${props => props.color || '#0074D9'};
  color: ${props => props.color || '#0074D9'};
  margin: 15px 15%;
  padding: 0.25em 1em;
  height: ${height};
  line-height: ${height};
  width: 70%;
  font-size: 24px;
  text-align: center;
`

export { StyledInput }
