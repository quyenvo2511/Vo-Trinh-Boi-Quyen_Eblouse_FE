/**
 * Author: Quyen Vo
 * File name: LoginForm.js
 * Last Modified Date: 20/1/2021
 * Purpose: This component is using for Log in/Log out of user and clinic
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Form } from "react-bootstrap";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

import authActions from "../../redux/actions/auth.actions";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

/**
 * This component let user log in and log out the app.
 *
 * @param {Boolean} showModal The Boolean to let the modal appears in UI if it true
 * @param {EventHandler} handleHideModal The Event Handler to handle hiding of modal
 * @param {Function} setShowModal The Function to change the status of modal
 */
const LoginForm = ({ showModal, handleHideModal, setShowModal }) => {
  // This component is in PublicNavBar from components/navbar/PublicNavBar.js
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginWithFacebook = (response) => {
    dispatch(authActions.loginFacebook(response.accessToken));
    setShowModal(false);
  };

  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogle(response.accessToken));
    setShowModal(false);
  };

  const loginWithEmailPassword = (e) => {
    e.preventDefault();
    dispatch(authActions.loginRequest({ email: email, password: password }));
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="login-signup-divider">
          <div className="left"></div>
          <p className="text">Login</p>
          <div className="right"></div>
        </div>
        <Form onSubmit={loginWithEmailPassword}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <button
            className="login-btn"
            style={{
              backgroundColor: "#5aa469",
            }}
            type="submit"
          >
            Login
          </button>
        </Form>
        <div className="login-signup-divider" style={{ marginTop: 20 }}>
          <div className="left"></div>
          <p className="text">Or</p>
          <div className="right"></div>
        </div>
        <div className="login-signup-box">
          <GoogleLogin
            className="google-btn d-flex justify-content-center"
            clientId={GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="login-btn"
                style={{
                  backgroundColor: "#ef4f4f",
                }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i className="fab fa-google" style={{ marginRight: "1em" }}></i>
                Login with Google
              </button>
            )}
            onSuccess={loginWithGoogle}
            onFailure={(err) => console.log("GOOGLE LOGIN ERROR", err)}
            cookiePolicy="single_host_origin"
          />
          <FacebookLogin
            appId={FB_APP_ID}
            fields="name,email,picture"
            callback={loginWithFacebook}
            onFailure={(err) => console.log("FB LOGIN ERROR", err)}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                className="login-btn"
                style={{ backgroundColor: "#4267B2" }}
              >
                <i
                  className="fab fa-facebook-square"
                  style={{ marginRight: "1em" }}
                ></i>
                Login with Facebook
              </button>
            )}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
