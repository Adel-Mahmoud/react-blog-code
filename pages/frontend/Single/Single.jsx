import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/frontend/Header";
import './Single.css';
import api from "../../../services/api";

const Single = () => {

  const { id } = useParams();

  const [post, setPost] = useState({
    category: { category_name: '' },
    user: { name: '' },
    content: '',
    image_path: ''
  }); 
  
  const imgBase = 'http://192.168.1.219/adel/blog/v1/backend/public/storage/';

  const handlePost = async () => {
    const response = await api.get(`/posts/${id}`); 
    setPost(response.data);
    // console.log(response.data);
  }
  useEffect(() => {
    handlePost();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // الأشهر تبدأ من 0
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <>
      <Header/>
      <div className="col-md-12 mb-4">
        <main className="mb-5" style={{marginTop:'85px'}}>
          <div className="container">
            <section className="border-bottom mb-4">
              <div className="post-image" style={{position:'relative'}}>
                <h3> { post.category.category_name } </h3>
                <img
                    src={`http://192.168.1.219/adel/blog/v1/backend/public/storage/${post.image_path}`}
                    className="img-fluid shadow-2-strong rounded mb-4 w-100"
                    alt=""
                  />
              </div>
              <div className="row align-items-center mb-4">
                <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
                    className="rounded shadow-1-strong me-2"
                    height="35"
                    alt=""
                    loading="lazy"
                  />
                  <span> Published <u>{ formatDate(post.created_at) }</u> by </span>
                  <a href="" className="text-dark">{ post.user.name }</a>
                </div>

              </div>
            </section>
            <section>
              <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </section>
            <section className="text-center border-top border-bottom py-4 mb-4">
              <p><strong>Share with your friends:</strong></p>

              <button
                type="button"
                className="btn btn-primary me-1"
                data-mdb-ripple-init
              >
                <i className="fas fa-comments me-2"></i>Add comment
              </button>
            </section>

            <section className="border-bottom mb-3">
              <p className="text-center"><strong>Comments: 3</strong></p>

              <div className="row mb-4">
                <div className="col-2">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                    className="img-fluid shadow-1-strong rounded"
                    alt=""
                  />
                </div>

                <div className="col-10">
                  <p className="mb-2"><strong>Marta Dolores</strong></p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio est ab iure inventore dolorum consectetur?
                    Molestiae aperiam atque quasi consequatur aut? Repellendus
                    alias dolor ad nam, soluta distinctio quis accusantium!
                  </p>
                </div>
              </div>

            </section>
            <section>
              <p className="text-center"><strong>Leave a reply</strong></p>

              <form>
                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="text" id="form4Example1" className="form-control" />
                  <label className="form-label" htmlFor="form4Example1">Name</label>
                </div>

                <div className="form-outline mb-4" data-mdb-input-init>
                  <input type="email" id="form4Example2" className="form-control" />
                  <label className="form-label" htmlFor="form4Example2"
                    >Email address</label
                  >
                </div>

                <div className="form-outline mb-4" data-mdb-input-init>
                  <textarea
                    className="form-control"
                    id="form4Example3"
                    rows="4"
                  ></textarea>
                  <label className="form-label" htmlFor="form4Example3">Text</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form4Example4"
                  />
                  <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this comment
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  data-mdb-ripple-init
                >
                  Publish
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Single;
