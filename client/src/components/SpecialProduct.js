import React from "react";
import ReactStars from "react-rating-stars-component";
import "../styles/Products/SpecialProductStyles.css";
import { Link } from "react-router-dom";

import watch from "../images/watch.jpg";

const SpecialProduct = (props) => {
  const { title, brand, image, price, sold, quantity, rating, prodId } = props;
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src={image ? image : watch}
              className="img-fluid"
              alt="watch"
              width={300}
            />
          </div>

          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$ {price}</span> &nbsp;{" "}
              <strike>$ {price + 100}</strike>
            </p>
            {/* <div className="discount-till d-flex align-items-center gap-10"> */}
            <p className="mb-0">
              <b>500 </b>days
            </p>
            <div className="d-flex align-items-center" style={{ gap: "7px" }}>
              <span
                style={{ padding: "13.5px", width: "42px", height: "40px" }}
                className="badge rounded-circle bg-danger"
              >
                20
              </span>
              :
              <span
                style={{ padding: "13.5px", width: "42px", height: "40px" }}
                className="badge rounded-circle bg-danger"
              >
                1
              </span>
              :
              <span
                style={{ padding: "13.5px", width: "42px", height: "40px" }}
                className="badge rounded-circle bg-danger"
              >
                1
              </span>
            </div>
          </div>
          <div className="prod-count my-3">
            <p className="">Product: {quantity}</p>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={(quantity / (sold + quantity)) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: (quantity / (sold + quantity)) * 100 + "%" }}
              />
            </div>
          </div>

          <Link className="button" to={"/product/" + prodId}>
            View
          </Link>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SpecialProduct;
