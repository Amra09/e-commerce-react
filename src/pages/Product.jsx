import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    // Filter products based on search query
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <section className="inner_page_head">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Product Grid</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Search Section */}
            <div className="search-container ">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>
            {/* Product Section */}
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our <span>Products</span>
                        </h2>
                    </div>
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
                                <div className="box">
                                    <div className="option_container">
                                        <div className="options">
                                            <button className='option1' onClick={() => addToCart(product)}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="img-box">
                                        <img src={product.image} alt={product.title} className="img-fluid" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>{product.title}</h5>
                                        <h6>${product.price.toFixed(2)}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="btn-box">
                        <Link to='/cart'>View All Cart</Link>
                    </div>
                </div>
            </section>
            {/* End Product Section */}
        </div>
    );
};

export default Product;