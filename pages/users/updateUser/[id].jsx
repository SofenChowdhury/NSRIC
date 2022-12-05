import React, { useState, useEffect } from "react";

//redux imports
import { connect } from "react-redux";

// Theme imports
import { tokens } from "../../theme";
import { Typography, useTheme } from "@mui/material";

//axios
import axios from "axios";
import { BASE_URL } from "../../../base";

// Components
import Sidebar from "../../../components/global/SideBar";
import Topbar from "../../../components/global/TopBar";

// Icon imports
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const UserDetails = ({ query, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [userDetails, setUserDetails] = useState({});
  const [allRoles, setAllRoles] = useState([]); 

  // FETCH USER DETAILS
  useEffect(() => {
    const apiUrl = `http://52.66.207.126/api/v1/admins/${query.id}`;
    axios
      .get(apiUrl, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.data.status == true) {
          setUserDetails(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // FETCH ALL ROLES
  useEffect(() => {
    const apiRoles = BASE_URL + "api/v1/roles";
    axios
      .get(apiRoles, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.data.status == true) {
          setAllRoles(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const update = () => {
    alert("updating users");
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="holder">
          <Typography
            variant="h2"
            className="mb-4"
            color={colors.greenAccent[300]}
          >
            Update Details of {userDetails.name}
          </Typography>

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
              value={userDetails.name}
              // onChange={(e) => setName(e.target.value)}
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
              value={userDetails.email}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="input-group mt-2">
            <small className="text-secondary">
              Assign new temporary Password
            </small>
          </div>
          <div className="input-group mb-3 mt-2">
            <span className="input-group-text" id="basic-addon1">
              <KeyIcon />
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              // onChange={(e) => setPassword(e.target.value)}
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
              value={userDetails.phone}
              // onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
            />
          </div>

          <button onClick={update} className="btn btn-success mb-3">
            Update User
          </button>
        </div>
      </div>
    </div>
  );
};

UserDetails.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(UserDetails);
