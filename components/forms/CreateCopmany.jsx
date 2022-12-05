import React, { useState } from "react";

import { Multiselect } from "multiselect-react-dropdown";

// Icon imports
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapIcon from "@mui/icons-material/Map";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";

const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [companyTin, setCompanyTin] = useState("");
  const [companyBin, setCompanyBin] = useState("");
  const [formErrors, setFormErrors] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const company = {
      companyName,
      companyAddress,
      contactNumber,
      contactPerson,
      companyBin,
      companyTin,
    };
    console.log(company);
  };

  return (
    <div className="mt-2">
      <h4 className="text-danger" style={{ fontWeight: 200 }}>
        {formErrors}
      </h4>
      <form>
        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <ApartmentIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Company Name"
          />
        </div>

        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <MapIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="address"
            required
            onChange={(e) => setCompanyAddress(e.target.value)}
            placeholder="Company Address"
          />
        </div>

        <div className="input-group mb-3 mt-2">
          <span className="input-group-text">
            <PhoneAndroidIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="contactNo"
            required
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Contact Number"
          />
        </div>

        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <PersonIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="contactPerson"
            required
            onChange={(e) => setContactPerson(e.target.value)}
            placeholder="Contact Person"
          />
        </div>

        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <InfoIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="tin"
            required
            onChange={(e) => setCompanyTin(e.target.value)}
            placeholder="Company TIN"
          />
        </div>

        <div className="input-group mb-3 mt-2">
          <span className="input-group-text" id="basic-addon1">
            <InfoIcon />
          </span>
          <input
            type="text"
            className="form-control"
            id="bin"
            required
            onChange={(e) => setCompanyBin(e.target.value)}
            placeholder="Company BIN"
          />
        </div>

        <button onClick={onSubmit} className="btn btn-success mb-3">
          Create Company
        </button>
      </form>
    </div>
  );
};

export default CreateCompany;
