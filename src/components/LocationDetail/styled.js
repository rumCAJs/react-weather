import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  padding: ${props => (props.hide ? '0' : '15px')};
  background: rgba(150, 150, 150, 0.1);

  a {
    color: #0074d9;
  }
`

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > * {
    margin-right: 10px;
  }

  > *:last-child {
    margin-right: 0;
  }
`

const WeatherDescription = styled.span`
  font-style: italic;
  font-size: 24px;
`

const Heading = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 0px #fff;
`

export { Wrapper, Line, WeatherDescription, Heading }
