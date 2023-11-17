import React from "react";

const Modal = (props) => {
  return (
    <div data-testid="myModal" className="modal">
      <div className="modal-content">
        <p>{props.message}</p>
        <button data-testid="proceedAction" className="proceed" onClick={()=> props.proceedAction()}>Proceed</button>
        <button className="cancel" onClick={()=> props.changeModalStatus()}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
