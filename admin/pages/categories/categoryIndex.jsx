import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../../services/api";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { useLoading } from "../../../contexts/LoadingContext";

const Index = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading(); 
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 5; 
  
  const handleCategories = async () => {
    const response = await api.get("/categories"); 
    setCategories(response.data);
  }

  const handleEdit = async (id) => {
    navigate(`/admin/categories/edit/${id}`);
  };
  
  useEffect(() => {
    showLoading();
    handleCategories();
    hideLoading();
  }, []);
  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this Category?")) {
      try {
        await api.delete(`/categories/${id}`);
        toast.success("Category deleted successfully!");
        handleCategories(); 
      } catch (err) {
        toast.error("Failed to delete the Category.");
      }
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentCategories = categories.slice(offset, offset + itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="card">
      <h5 className="card-header">Categories Management</h5>
      <div className="card-body">
        <div className="table-responsivee text-nowrap">
          { categories.length > 0 ? (
            <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.category_name}</td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu">
                          <span className="dropdown-item"
                            onClick={() => handleEdit(category.id)}>
                              <i className="bx bx-edit-alt me-1"></i>
                               Edit
                          </span>
                          <button
                           onClick={() => deleteCategory(category.id)} 
                           className="dropdown-item">
                              <i className="bx bx-trash me-1"></i>
                               Delete
                          </button>                        
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={Math.ceil(categories.length / itemsPerPage)}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
                pageLinkClassName={"page-link"}
                pageClassName={"page-item"}
              />
              </>
          ) : (
            <p>No Categories available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
