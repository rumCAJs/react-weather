import styled from 'styled-components'

const TempLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`

const Item = styled.div`
  padding: 8px;
  border: 1px solid ${props => (props.isActive ? '#0074D9' : '#AAAAAA')};
  border-radius: 5px;
  margin: 0 5px 5px 0;
  background-color: ${props => (props.isActive ? 'rgba(150, 150, 150, 0.1)' : 'transparent')};
  font-size: 24px;
  box-shadow: 0 0 5px ${props => (props.isActive ? 'rgba(0, 0, 0, 0.7)' : 'transparent')};

  :last-child {
    margin-right: 0;
  }
`
export { TempLine, Item }
