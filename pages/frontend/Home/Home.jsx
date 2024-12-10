import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../../contexts/LoadingContext";
import About from "../About/About";
import Contact from "../Contact/Contact";
import api from "../../../services/api";

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  const handleCategories = async () => {
    const response = await api.get("/categories"); 
    setCategories(response.data);
  }
  useEffect(() => {
    handleCategories();
  }, []);

  
  const imgBase = 'http://192.168.1.219/adel/blog/v1/backend/public/storage/';

  const handlePostsByCategory = async (e,category) => {
    e.preventDefault();
    const response = category ? await api.get(`/postsByCategory/${category}`) : await api.get("/posts"); 
    showLoading();
    setPosts(response.data);
    hideLoading();
  }
  
  const handlePosts = async () => {
    const response = await api.get("/posts"); 
    showLoading();
    setPosts(response.data);
    hideLoading();
  }
  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <>
      <main className="mt-5">
        <div className="container">
          <About/>

          <hr className="my-5" />
          <section className="text-center">
            <h4 className="mb-5">
              <strong>Categories</strong>
            </h4>
            <div className="d-flex justify-content-center">
              {categories.map((category) => (
                <form onSubmit={(e) => handlePostsByCategory(e, category.id)} key={category.id}>
                  <button className="btn btn-light mx-3" type="submit">{ category.category_name}</button>
                </form>
              ))}
            </div>
          </section>
          <hr className="my-5" />
          <section className="text-center">
            <div className="row">
              { posts.length > 0 ? (posts.map((post) => (
              <div className="col-lg-4 col-md-12 mb-4" key={post.id}>
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={imgBase + post.image_path}
                      className="img-fluid"
                    />
                    <div
                      className="mask"
                      style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}
                    ></div>
                  </div>
                  <div className="card-body">
                    <Link to={`category/${post.category.category_name}/post/${post.id}`}>
                      <h5 className="card-title">{post.title}</h5>
                    </Link>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}>
                    </p>
                  </div>
                </div>
              </div>
            ))
              ) : (
                <>
                <p>No posts</p>
                </>
              )
            }
            </div>
          </section>

          <hr className="my-5" />
          <Contact/>
        </div>
      </main>
    </>
  );
};

export default Home;
