import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useLoading } from "../../../contexts/LoadingContext";

const Create = () => {
    const { showLoading, hideLoading } = useLoading(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const createNewUser = async (e) => {
        e.preventDefault();
        showLoading();
        try {
            const response = await api.post("/users",
                                    {
                                        name,
                                        email,
                                        role,
                                        password
                                    }); 
            if (response) {
                toast.success("Create a new user is successful!");
                setTimeout(() => {
                  navigate("/admin/users");
                }, 2000);
            }
          } catch (err) {
            const errorMessage =
              err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                : "Ceate Data failed. Please try again.";
            toast.error(errorMessage);
          }
          hideLoading();
    };
    return ( 
        <>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Add New User</h5>
                    <div className="card-body">
                        <form onSubmit={createNewUser}>
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
                            <div className="form-group p-3">
                                <button className="my-3 btn btn-primary" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Create;