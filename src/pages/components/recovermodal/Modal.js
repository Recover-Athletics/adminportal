import React from 'react';
import './styles/Modal.css';
 export const Modal = (props) => {
    return (
        <div>
          <div className="modal-component">
            <div className="container">
             <div className="modal-padding">
              <div className="modal-container">
               {props.children}
              </div>
             </div>
            </div>
          </div>
        </div>
    )
}

