import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "../../styles/HeaderStyles.css";

import compare from "../../images/compare.svg";
import wishlist from "../../images/wishlist.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import menu from "../../images/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { getProduct } from "../../features/products/productSlice";
import { getUserCart } from "../../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const productState = useSelector((state) => state?.product?.products);
  const [productOpt, setProductOpt] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [paginate, setPaginate] = useState(true);

  // const getTokenFromLocalStorage = localStorage.getItem("customer")
  //   ? JSON.parse(localStorage.getItem("customer"))
  //   : null;

  // const config2 = {
  //   headers: {
  //     Authorization: `Bearer ${
  //       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
  //     }`,
  //     Accept: "application/json",
  //   },
  // };

  // useEffect(() => {
  //   dispatch(getUserCart(config2));
  // });

  useEffect(() => {
    for (let i = 0; i < cartState?.length; i++) {
      let sum = 0;
      sum = sum + Number(cartState[i].quantity) * Number(cartState[i].price);
      setTotalAmount(sum);
    }
  }, [cartState]);

  useEffect(() => {
    //   // console.log("Product State:", productState);
    //   if (Array.isArray(productState) && productState.length > 0) {
    //     const data = productState.map((element, index) => ({
    //       id: index,
    //       prod: element._id,
    //       name: element.title.toString(), // Ensure 'name' is a string
    //     }));
    //     // console.log("Mapped Data:", data);
    //     setProductOpt(data);
    //   } else {
    //     setProductOpt([]); // Ensure productOpt is always an array
    //   }
    // }, [productState]);
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0" style={{ fontSize: "13px" }}>
                Free Shipping Over $ 100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p
                className="text-end text-white mb-0"
                style={{ fontSize: "13px" }}
              >
                Hotline:{" "}
                <Link className="text-white" to="tel:098 9831 609">
                  098 9831 609
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" style={{ fontSize: "28px" }}>
                  Digitic.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    if (selected.length > 0) {
                      navigate(`/product/${selected[0]?.prod}`);
                      dispatch(getProduct(selected[0]?.prod));
                    }
                  }}
                  options={productOpt}
                  paginate={paginate}
                  labelkey={"name"}
                  minLength={2}
                  placeholder="Search for more products..."
                  // filterBy={["name"]}
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <NavLink
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white menu-item"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Compare <br /> Products
                    </p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white menu-item"
                  >
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Favourite <br /> Wishlist
                    </p>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to={authState?.user === null ? "/login" : "/profile"}
                    className="d-flex align-items-center gap-10 text-white menu-item"
                  >
                    <img src={user} alt="user" />

                    {authState?.user === null ? (
                      <p className="mb-0" style={{ fontSize: "14px" }}>
                        Login <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome {authState?.user?.firstname}
                      </p>
                    )}
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white "
                  >
                    <img src={cart} alt="cart" />
                    <div
                      className="d-flex flex-column gap-10"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">$ {totalAmount ? totalAmount : 0}</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div className="">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 me-5 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={menu} alt="menu" className="me-2" />
                    <span className="me-5 d-inline-block">Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-30">
                  <NavLink className="menu-item" to="/">
                    Home
                  </NavLink>
                  <NavLink className="menu-item" to="/product">
                    Our Store
                  </NavLink>
                  <NavLink className="menu-item" to="/my-orders">
                    My Orders
                  </NavLink>
                  <NavLink className="menu-item" to="/blogs">
                    Blogs
                  </NavLink>
                  <NavLink className="menu-item" to="/contact">
                    Contact
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="border border-0 bg-transparent text-white text-uppercase"
                    type="button"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
