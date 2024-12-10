import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useLoading } from "../../../contexts/LoadingContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const { showLoading, hideLoading } = useLoading(); 

  useEffect(() => {
    const fetchCategory = async () => {
      showLoading();
      try {
        const category = await api.get("/categories/"+id);
        setCategory(category.data.category_name);
      } catch (error) {
        toast.error("Failed to fetch category details.");
      } 
      hideLoading();
    };
    
    fetchCategory();
  }, [id]);
  
  const handleSave = async () => {
    showLoading();
    try {
      await api.put(`/categories/${id}`, { category });
      toast.success("category updated successfully!");
      navigate("/admin/categories");
    } catch (error) {
      toast.error("Failed to update the category.");
    }
    hideLoading();
  };

  return (
    <div className="container">
        <div className="card">
            <h5 className="card-header">Edit Category</h5>
            <div className="card-body">
                <form onSubmit={(e) => e.preventDefault()}>
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
