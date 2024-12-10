import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useLoading } from "../../../contexts/LoadingContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const { showLoading, hideLoading } = useLoading(); 

  useEffect(() => {
    const fetchUser = async () => {
      showLoading();
      try {
        const user = await api.get("/users/"+id);
        setName(user.data.name);
        setEmail(user.data.email);
        setRole(user.data.role);
        setPassword(user.data.password);
      } catch (error) {
        toast.error("Failed to fetch user details.");
      } 
      hideLoading();
    };
    
    fetchUser();
  }, [id]);
  
  const handleSave = async () => {
    showLoading();
    try {
      await api.put(`/users/${id}`, { name, email, role, password });
      toast.success("user updated successfully!");
      navigate("/admin/users");
    } catch (error) {
      toast.error("Failed to update the user.");
    }
    hideLoading();
  };

  return (
    <div className="container">
        <div className="card">
            <h5 className="card-header">Edit User</h5>
            <div className="card-body">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                      <label className="form-label" htmlFor="role">Role</label>
                      <select 
                          onChange={(e) => setRole(e.target.value)}
                          value={role}
                          className="form-control"
                      >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                      </select>
                  </div>
                  <div className="mb-3">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      />
                  </div>
                  <button className="btn btn-primary" onClick={handleSave}>
                    Save
                  </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Edit;
