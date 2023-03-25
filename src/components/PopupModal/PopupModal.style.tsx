import styled from 'styled-components'

const Container = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    border: 0;
    z-index: 13;
    position: absolute;
    width: calc(100% - 100px);
    height: auto;
    max-height: calc(100% - 120px);
    max-width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(250 250 250);
    border-radius: 10px;
    box-shadow: 0px 2px 17px -4px rgba(0, 0, 0, 0.3)

  }
  .back-drop {
    position: absolute;
    background-color: rgb(0 0 0 / 30%);
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
  }
`

export default Container
