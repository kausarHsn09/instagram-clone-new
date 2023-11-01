import Modal from "../components/modal/Modal"
import { createPortal } from "react-dom"
const Message = () => {
  return (
    <div>{createPortal( <Modal/>,document.body)}</div>
  )
}

export default Message