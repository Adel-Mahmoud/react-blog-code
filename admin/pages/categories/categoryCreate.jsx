import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useLoading } from "../../../contexts/LoadingContext";

const Create = () => {
    const { showLoading, hideLoading } = useLoading(); 
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const createNewCategory = async (e) => {
        e.preventDefault();
        showLoading();
        try {
            const response = await api.post("/categories",{category}); 
            if (response) {
                toast.success("Create a new Category is successful!");
                setTimeout(() => {
                  navigate("/admin/categories");
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
                    <h5 className="card-header">Add New Category</h5>
                    <div className="card-body">
                        <form onSubmit={createNewCategory}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="category">Category Name</label>
                                <input
                                type="text"
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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