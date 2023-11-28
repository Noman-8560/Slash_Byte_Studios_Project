import React, { useState } from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";

const UserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/add_user/", formData);
      console.log("User added successfully:", formData);
      setFormData({ name: "", email: "", role: "" });
      onUserAdded();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        name="name"
        style={{ marginBottom: "8px" }}
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "8px" }}
      />
      <TextField
        label="Role"
        type="text"
        name="role"
        value={formData.role}
        onChange={handleChange}
        fullWidth
        style={{ marginBottom: "8px" }}
      />
      <Button type="submit" variant="outlined" style={{ marginTop: "8px", textAlign:'center' }}>
        Add User
      </Button>
    </form>
  );
};

export default UserForm;
