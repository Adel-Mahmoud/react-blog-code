import React, { useEffect , useState } from "react";
import './posts.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { useLoading } from "../../../contexts/LoadingContext";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Create = () => {
    const { showLoading, hideLoading } = useLoading(); 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data);
            } catch (err) {
                toast.error("Failed to load categories.");
            }
        };
        fetchCategories();
    }, []);

    const createNewPost = async (e) => {
        e.preventDefault();
        showLoading();
        const formData = new FormData(); 
        formData.append("title", title); 
        formData.append("content", content); 
        formData.append("category_id", categoryId); 
        if (image) {
            formData.append("image", image); 
        }

        try {
            const response = await api.post("/posts",formData, 
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            );
            if (response) {
                toast.success("Create a new post is successful!");
                setTimeout(() => {
                  navigate("/admin/posts");
                }, 2000);
            }
          } catch (err) {
            const errorMessage =
              err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                : "Ceate Data failed. Please try again.";
                console.error(errorMessage);
            toast.error(errorMessage);
          }
          hideLoading();
    };
    return ( 
        <>
            <div className="container">
                <div className="card">
                    <h5 className="card-header">Add New Post</h5>
                    <div className="card-body">
                        <form onSubmit={createNewPost}>
                            <div className="form-group p-3">
                                <label htmlFor="category" className="form-label">Title:</label>
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
                            <div className="form-group p-3">
                                <label htmlFor="title" className="form-label">Title:</label>
                                <input
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                        />
                            </div>
                            <div className="form-group p-3">
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
                            <div className="form-group p-3">
                                <label htmlFor="" className="form-label">Image:</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="form-group p-3">
                                <button className="btn btn-primary" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Create;