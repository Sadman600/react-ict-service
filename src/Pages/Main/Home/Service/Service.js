import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, category, img } = service;
    const navigate = useNavigate();
    const handleSingleService = id => {
        navigate(`/service/${id}`)
    }
    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                });
        }
    }

    return (
        <div className="card">
            <img src={img} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{category}</h1>
            <p className="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button onClick={() => handleSingleService(_id)}>Add to Cart</button></p>
            <p><button onClick={() => handleDeleteService(_id)}>Delete {category}</button></p>
        </div>
    );
};

export default Service;