import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "./modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef } from "react";

const Modal = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const modalRef = useRef(null);

  function handleCick() {
    dispatch(toggleModal(false));
  }

  useEffect(() => {
    function outSideClick(event: MouseEvent) {
      const target = event.target;
      if (modalRef.current && !modalRef.current.contains(target)) {
        dispatch(toggleModal(false));
      }
    }

    document.addEventListener("click", outSideClick, true);
  }, [dispatch]);

  return (
    <>
      {open && (
        <div className="msodals w-screen h-screen  fixed left-0 top-0 bottom-0 right-0  m-auto bg-[#00000071] z-10">
          <button className="absolute right-5 top-5" onClick={handleCick}>
            <AiOutlineClose className="text-white text-[30px]" />
          </button>
          <div
            ref={modalRef}
            className="w-[350px] h-[390px] lg:w-[750px] lg:h-[795px] md:w-[620px] md:h-[660px] bg-white rounded-md drop-shadow-xl  fixed left-0 top-0 bottom-0 right-0  m-auto z-100"
          >
            <p className="text-center py-4 text-black">Create a new post</p>
            <hr />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
