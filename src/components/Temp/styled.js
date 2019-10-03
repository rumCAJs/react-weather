import styled from 'styled-components'
import { TYPES, SIZES, RADIUSES } from './config'

const StyledTemp = temp => styled(temp)`
  padding: 5px 10px;
  background-color: #0074d9;
  color: #fff;
  border-radius: ${props => RADIUSES[props.type] || RADIUSES[TYPES.NORMAL]};
  font-size: ${props => SIZES[props.type] || SIZES[TYPES.NORMAL]};
`

export { StyledTemp }
