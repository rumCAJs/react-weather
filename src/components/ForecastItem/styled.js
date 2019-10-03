import styled from 'styled-components'

const minWidth = 190
const marginRigth = 15
const globalMargin = 30
const Wrapper = styled.div`
  min-width: ${minWidth}px;
  border: 1px solid #0074d9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  flex-grow: 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  background: #fff;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: ${(minWidth + marginRigth) * 2 + globalMargin}px) {
    width: 45%;
  }

  @media screen and (min-width: ${(minWidth + marginRigth) * 4 + globalMargin}px) {
    width: auto;
    margin-right: 15px;
    flex-grow: 1;
    :last-child {
      margin-right: 0;
    }
  }
`

const Line = styled.div`
  border-bottom: 1px solid rgba(33, 33, 33, 0.4);
  padding: 15px 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;

  :last-child {
    border: none;
  }

  > * {
    margin-right: 5px;
  }
`

const Heading = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #0074d9;
`

const DateRow = styled.div`
  text-align: center;
`

export { Wrapper, Line, Heading, DateRow }
