import React from 'react'

export default function Product(props) {
    return (
        <div className="row">
            <div className="col-6">
                <h2>{props.product.name} <span className="badge bg-secondary">₹{props.product.price}</span> </h2>
                </div>
                <div className="col-4">
                <button className="btn btn-danger">-</button>
                <button className="btn btn-warning">Quantity</button>
                <button className="btn btn-success">+</button>
                </div>
            </div>
        
    )
}
