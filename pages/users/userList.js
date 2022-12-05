import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";

//redux imports
import { connect } from "react-redux";

// Theme imports
import { tokens } from "../theme";
import { Typography, useTheme } from "@mui/material";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

// Component imports
import Sidebar from "../../components/global/SideBar";
import Topbar from "../../components/global/TopBar";

// Icon import
import EditIcon from "@mui/icons-material/Edit";

const userList = ({ token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUsers = BASE_URL + "api/v1/admin-list";

    axios
      .get(apiUsers, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.data.status == true) {
          setUsers(res.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editUser = (id) => {

  };

  return (
    <>
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
              User List
            </Typography>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <Link href={`/users/updateUser/${user.id}`}>
                        <EditIcon cursor="pointer" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(userList);
