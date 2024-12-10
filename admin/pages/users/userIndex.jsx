import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../../services/api";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { useLoading } from "../../../contexts/LoadingContext";

const Index = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading(); 
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 5; 
  
  const handleUsers = async () => {
    const response = await api.get("/users"); 
    setUsers(response.data);
  }

  const handleEdit = async (id) => {
    navigate(`/admin/users/edit/${id}`);
  };
  
  useEffect(() => {
    showLoading();
    handleUsers();
    hideLoading();
  }, []);
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await api.delete(`/users/${id}`);
        toast.success("User deleted successfully!");
        handleUsers(); // Refresh users
      } catch (err) {
        toast.error("Failed to delete the user.");
      }
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentUsers = users.slice(offset, offset + itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="card">
      <h5 className="card-header">Users Management</h5>
      <div className="card-body">
        <div className="table-responsivee text-nowrap">
          { users.length > 0 ? (
            <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
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
                            onClick={() => handleEdit(user.id)}>
                              <i className="bx bx-edit-alt me-1"></i>
                               Edit
                          </span>
                          <button
                           onClick={() => deleteUser(user.id)} 
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
                pageCount={Math.ceil(users.length / itemsPerPage)}
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
            <p>No users available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
