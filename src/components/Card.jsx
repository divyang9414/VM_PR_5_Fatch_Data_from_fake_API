import React from "react";
import "../App.css";

export default function Card({ product }) {
  const item = product;
  console.log(item);

  return (
    <>
      <div className="col-4">
        <div className="p-3">
          <div className="card">
            <div className="img_box">
              <img className="" src={item.image} alt="" />
            </div>
            <div className="pb-3">
              <h4 className="fs-4 mt-3 mb-0 p_title">{item.title}</h4>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="bg-success py-2 px-4 rounded-3 fs-5">${item.price}</span>
              <button className="btn btn-secondary rounded-3 fs-5 px-5 py-2 text-white">Add to Cart</button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-2 bg-warning px-2 rounded-3">
              <span className="fs-5">Rating {item.rating.rate}</span>
              <span className="fs-5">By <span>{item.rating.count}</span> People</span>
            </div>
            <span className="d-block h6 fs-5 mt-3 mb-1">More Details About Products</span>
            <p className="data_p fs-5 text-secondary ">{item.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
