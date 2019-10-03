import styled from 'styled-components'

const height = '64px'
const fontSize = '32px'
const StyledInput = Input => styled(Input)`
  background: transparent;
  border-radius: 6px;
  box-sizing: border-box;
  border: 2px solid ${props => props.color || '#0074D9'};
  color: ${props => props.color || '#0074D9'};
  margin: 15px 5%;
  padding: 0.25em 0.7em;
  height: ${height};
  line-height: ${height};
  width: 90%;
  font-size: ${fontSize};
  text-align: center;

  @media screen and (min-width: 500px) {
    margin: 15px 15%;
    width: 70%;
  }
`

export { StyledInput }
