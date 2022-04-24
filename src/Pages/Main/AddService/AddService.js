import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User addded successfull');
                data.reset();
            });

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Category' type='text' {...register("category")} />
                <input placeholder='Description' type='text'{...register("description")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='img url' type='text'{...register("img")} />
                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;