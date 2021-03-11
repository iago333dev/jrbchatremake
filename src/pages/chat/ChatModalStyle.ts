
import styled from 'styled-components'
export const Fade = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0000007f;
  z-index: 3;
  opacity: 0;
  transition: 0.15s ease-in;
  ${({ state }: { state: boolean }) =>
    state && `
      opacity: 1;
    `
  };
`
export const ModalContainer = styled.div`
  position: fixed;
  margin: 10vh auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-height: 80vh;
  max-width: 90vw;
  min-width: 290px;
  overflow:hidden;

  background-color: white;

`
