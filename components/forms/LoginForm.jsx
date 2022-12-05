import React, { useState, useEffect } from "react";


//redux imports
import { useDispatch } from "react-redux";
import { auth } from "../../store/actions/";
import { connect } from "react-redux";

// Icons import
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";

const LoginForm = ({ message }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch(auth(email, password));

  const [formErrors, setFormErrors] = useState("");

  useEffect(() => {
    setFormErrors(message);
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(auth(email, password));
  };
  
  return (
    <div>
      <h6 className="text-danger mt-2 mb-3" style={{ fontWeight: 200 }}>
        {formErrors}
      </h6>
      <form>
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <AlternateEmailIcon />
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Adress"
          />
        </div>
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <KeyIcon />
          </span>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="check"
          />
        </div> */}
        {/* <button onClick={login} className="btn btn-success mb-3"> */}
        <button onClick={submitHandler} className="btn btn-success mb-3">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.authMsg.message,
  };
};

export default connect(mapStateToProps)(LoginForm);
