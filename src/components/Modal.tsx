interface ModalProps {
  children: React.ReactNode,
  onClose: () => void
}

export function Modal({ children, onClose }: ModalProps) {
  return(
    <>
      <div className="blackout" onClick={onClose}></div>
      <div className="wrapper">{ children }</div>
    </>
  )
}
