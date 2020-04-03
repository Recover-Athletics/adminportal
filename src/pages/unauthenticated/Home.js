import React, { useState } from 'react';
import './styles/Home.css'
import { Modal } from '../components/recovermodal/Modal';
import { RecoverInput } from '../components/recoverinputs/RecoverInput';
const Home = () => {
  const [modalLogin,  setModalLogin] = useState({
    open: true
  })

  const LoginModal = ({
    currentstatus
  }) => {

    const [username, setUsername] = useState({
      username: ""
    })
    const [password , setPassword ]= useState({
      password: ""
    })

     if (currentstatus === true) {
      return (
        <Modal>
          <div className="login-modal">
            <div className="container">
            <span className="closemodal" onClick={() => {
              setModalLogin({
               open: false
              })
            }} >&times;</span>
            <h2 className="text-center">Login</h2>
            <RecoverInput
            placeholder="Username"
            onvaluechange={(e) => {
              setUsername({ username: e.target.value })
            }}
            type="text"
            />
            <RecoverInput
            placeholder="Password"
            onvaluechange={(e) => {
              setPassword({
                password: e.target.value
              })
            }}
            type="password"
            />
            <div className="button-container">
             <button className="button-recover" onClick={() => {
               setModalLogin({
                 open: true
               })
             }}>Recover Admin Login</button>
            </div>
            </div>
          </div>
        </Modal>
      )
     } else {
       return null;
     }
  }
    return (
        <div>
          <div className="Home-Page">
           <div className="container">
            <div className="home-page-content">
              <h1 className="text-center" >Recover Athletics Admin</h1>
            </div>
            <div className="button-container">
             <button className="button-recover" onClick={() => {
               setModalLogin({
                 open: true
               })
             }}>Login Here</button>
            </div>
           </div>
          </div>
          <LoginModal currentstatus={modalLogin.open} />
        </div>
    )
}

export default Home;