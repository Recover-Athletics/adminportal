import React from 'react';
import './styles/Input.css'
export const RecoverInput = ({
    placeholder,
    onvaluechange,
    type
}) => {
    return (
        <div>
         <div className="input-container">
           <input className="input-bar-recover" type={type} placeholder={placeholder} onChange={onvaluechange} />
         </div>
        </div>
    )
}