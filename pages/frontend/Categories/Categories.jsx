import React, { useEffect,useState } from "react";
import api from "../../../services/api";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  const handleCategories = async () => {
    const response = await api.get("/categories"); 
    setCategories(response.data);
  }
  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        {categories.map((category) => (
          <button className="btn btn-light mx-3" key={category.id}>{ category.category_name}</button>
        ))}
      </div>
    </>
  );
  
};

export default Categories;
