

// Dependencies
import React, { useEffect, useState, useRef } from 'react'
// Components
import { Fade, ModalContainer } from './ChatModalStyle'

//Props
export interface FadeProps {
  isOpen: boolean
  close: () => void
}

const Modal: React.FC<FadeProps> = ({ isOpen, children, close }) => {
  /* States
  ---------- */
  const [state, setState] = useState(false)
  /* Refs
  -------- */
  const containerRef = useRef(null)
  /* Functions
  ------------- */
  function handleClose(event: MouseEvent) {
    if (event.target === containerRef.current) {
      close()
    }
  }
  /* Effects
  ----------- */
  useEffect(() => {
    setTimeout(() => {
      setState(isOpen)
    }, 0)
    if (isOpen) {
      window.addEventListener('mousedown', handleClose)
    } else {
      window.removeEventListener('mousedown', handleClose)
    }
  }, [isOpen])
  /* Render
  ---------- */
  if (!isOpen) return null
  return (
    <Fade ref={containerRef} state={state}>
      <ModalContainer>{children}</ModalContainer>
    </Fade>
  )
  };

export default Modal
