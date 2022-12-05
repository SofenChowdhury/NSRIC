import React, { useState, useEffect } from "react";
import Router from "next/router";

// bootstarp
import Form from "react-bootstrap/Form";

//redux imports
import { connect } from "react-redux";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

// Icon imports
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const RegisterForm = ({ token }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [roles, setRoles] = useState([]);

  const [admin_roles, setSelectedRole] = useState([]);

  const rolesAdd = (e) => {
    setSelectedRole([]);
    setSelectedRole((admin_roles) => [...admin_roles, Number(e.target.value)]);
  };

  useEffect(() => {
    const apiRoles = BASE_URL + "api/v1/roles";
    axios
      .get(apiRoles, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.data.status == true) {

          setRoles(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  async function register(e) {
    e.preventDefault();
    const apiUrl = BASE_URL + "api/v1/admin/store";
    const regData = { email, password, name, phone, admin_roles };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios.post(apiUrl, regData, config).then((response) => {
      console.log(response.data);
      if (response.data.status) {
        Router.push({
          pathname: "/",
        });
      } else {
        setFormErrors(Object.values(response.data.errors));
      }
    });
  }

  return (
    <div className="mt-2">
      <h4 className="text-danger" style={{ fontWeight: 200 }}>
        {formErrors[0]}
      </h4>
      <form>
        {/* Name */}
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <PersonIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        {/* Email */}
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <AlternateEmailIcon />
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        {/* Password */}
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <KeyIcon />
          </span>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        {/* Phone */}
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <PhoneAndroidIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="phone"
            required
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        {/* Role */}
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <Diversity3Icon />
          </span>
          <Form.Select onChange={rolesAdd}>
            <option>Select a Role</option>
            {roles.map((role, index) => (
              <option key={index} value={role.id}>
                {role.name}
              </option>
            ))}
          </Form.Select>
        </div>

        <button onClick={register} className="btn btn-success mb-3">
          Create User
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(RegisterForm);
