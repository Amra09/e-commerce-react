import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* Inner page section */}
      <section className="inner_page_head">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Blog List</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End inner page section */}

      {/* Why section */}
      <section className="why_section layout_padding">
        <div className="container">
          
         
          {/* Categories Section */}
          <div className="heading_container heading_center">
            <h2>Categories</h2>
          </div>
          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <div className="box">
                  <div className="detail-box">
                    <h5>{category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End why section */}
    </div>
  );
};

export default Blog;