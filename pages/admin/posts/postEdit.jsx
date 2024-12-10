import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './posts.css';
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useLoading } from "../../../contexts/LoadingContext";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const { showLoading, hideLoading } = useLoading(); 

  useEffect(() => {
    const fetchPost = async () => {
      showLoading();
      try {
        const post = await api.get(`/posts/${id}`);
        setTitle(post.data.title);
        setContent(post.data.content);
        setCategoryId(post.data.category_id); 
      } catch (error) {
        toast.error("Failed to fetch post details.");
      }
      hideLoading();
    };

    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (err) {
        toast.error("Failed to load categories.");
      }
    };

    fetchPost();
    fetchCategories();
  }, [id]);

  const handleSave = async () => {
    showLoading();
    const formData = new FormData(); 
    formData.append("title", title); 
    formData.append("content", content); 
    formData.append("category_id", Number(categoryId)); 
    if (image) {
        formData.append("image", image); 
    }
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    if (!categoryId) {
      toast.error("Please select a category.");
      hideLoading();
      return;
    }
    try {
      const res = await api.put(`/posts/${id}`,formData);
      console.log(res);
      toast.success("Post updated successfully!");
      navigate("/admin/posts");
    } catch (error) {
      toast.error("Failed to update the post.");
      console.error(error.response.data); 
    }
    hideLoading();
  };

  return (
    <div className="container">
      <div className="card">
        <h5 className="card-header">Edit Post</h5>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category:</label>
              <select
                className="form-control"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Content:</label>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="" className="form-label">Image:</label>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => { 
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }
              }
              />
            </div>

            <button className="my-3 btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;