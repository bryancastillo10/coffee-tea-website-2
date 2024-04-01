import React from 'react'

const Confirm = ({setShowModal}) => {
  return (
<div className="modal__background">
      <div className="modal__container">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal__title">
          <h1>Are you sure you want to cancel this order?</h1>
        </div>
        <div className="modal__body">
          <p>The selected item is to be removed</p>
        </div>
        <div className="modal__footer">
          <button
            onClick={() => {
              setShowModal(false);
            }}
            id="modal__cancel-btn"
          >
            Cancel
          </button>
          <button onclick={null}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Confirm
