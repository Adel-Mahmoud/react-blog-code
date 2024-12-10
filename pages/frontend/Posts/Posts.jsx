import React, { useEffect,useState } from "react";
import api from "../../../services/api";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  
  const imgBase = 'http://192.168.1.219/adel/blog/v1/backend/public/storage/';

  const handlePosts = async () => {
    const response = await api.get("/posts"); 
    setPosts(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    handlePosts();
  }, []);

  return (
    <>
    {posts.map((post) => (
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
          <a href="#!">
            <div
              className="mask"
              style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}
            ></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}>
          </p>
        </div>
      </div>
    </div>
    ))
    }
    </>
  );
  
};

export default Posts;
