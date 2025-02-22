import Card from './Card';
import Form from './Form';
import React from 'react';
import Table from './Table';

const Home = () => {
    return (
        <div className="container mt-4">
            <div className="bg-primary text-white text-center p-5 rounded shadow-lg">
                <h1 className="fw-bold">Assalamu Alaykum.</h1>
                <p className="lead">In this page you can do whatever you want my bro.</p>
            </div>

            {/* Use a single column layout for all components */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="p-3 border rounded shadow bg-light">
                        <Card />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="p-3 border rounded shadow bg-light">
                        <Table />
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Home;
