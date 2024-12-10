import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../../services/api";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import { useLoading } from "../../../contexts/LoadingContext";

const Index = () => {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = useLoading(); 
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 5; 
  
  const handlePosts = async () => {
    const response = await api.get("/posts"); 
    setPosts(response.data);
  }

  const handleEdit = async (id) => {
    navigate(`/admin/posts/edit/${id}`);
  };
  
  useEffect(() => {
    showLoading();
    handlePosts();
    hideLoading();
  }, []);
  
  const deletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await api.delete(`/posts/${id}`);
        toast.success("Post deleted successfully!");
        handlePosts(); // Refresh posts
      } catch (err) {
        toast.error("Failed to delete the post.");
      }
    }
  };

  const offset = currentPage * itemsPerPage;
  const currentPosts = posts.slice(offset, offset + itemsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="card">
      <h5 className="card-header">Posts Management</h5>
      <div className="card-body">
        <div className="table-responsivee text-nowrap">
          { posts.length > 0 ? (
            <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td style={{textVerflow: 'ellipsis',maxWidth: '200px',whiteSpace: 'normal'}}>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn p-0 dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div className="dropdown-menu">
                          <span className="dropdown-item"
                            onClick={() => handleEdit(post.id)}
                            ><i className="bx bx-edit-alt me-1"></i> Edit</span
                          >
                          <button
                           onClick={() => deletePost(post.id)} 
                           className="dropdown-item"
                            >
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
                pageCount={Math.ceil(posts.length / itemsPerPage)}
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
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
