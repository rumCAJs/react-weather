import styled from 'styled-components'

const color = '#0074D9'
const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  :after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${color};
    border-color: ${color} transparent ${color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export { Loader }
