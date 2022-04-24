import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleService.css';

const SingleService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div>
            <h1>Service Name: {service.category}</h1>
        </div>
    );
};

export default SingleService;