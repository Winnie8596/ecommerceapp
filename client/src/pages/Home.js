import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import moment from "moment";
import "../styles/HomePageStyles.css";
import Meta from "../components/Meta";
import BlogCard from "./../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { getAllBlogs } from "../features/blogs/blogSlice";
import { getAllProducts } from "../features/products/productSlice";
// import { services } from "../utils/Data";

import ReactStars from "react-rating-stars-component";
import "../styles/Products/ProductCardStyles.css";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlist = (id) => {
    dispatch(addToWishlist(id));
  };

  const blogState = useSelector((state) => state?.blog?.blogs);
  const productState = useSelector((state) => state?.product?.products);

  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Meta title={"Home"} />
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-12 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>
                    From $999 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy iPad Air</h5>
                  <p>
                    From $999 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {/* {services.map((service, index) => (
                <div className="d-flex align-items-center gap-15" key={index}>
                  <img src={service.image} alt={service.title} />
                  <div>
                    <h6>{service.title}</h6>
                    <p className="mb-0">{service.tagline}</p>
                  </div>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Music & Gaming</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Camera</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Smart TV</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="smart tv" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Smart Watches</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="smart watch" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Music & Gaming</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Cameras</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Smart TV</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="smart tv" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <div className="mb-0">
                  <h6>Smart Watches</h6>
                  <p className="mb-0">10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="smart watch" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "featured") {
                return (
                  <div key={index} className="col-3">
                    <div
                      // to={`${
                      //     location.pathname === '/'
                      //         ? 'product/:id'
                      //         : location.pathname === '/product/:id'
                      //         ? '/product/:id'
                      //         : ':id'
                      // }`}
                      className="product-card position-relative"
                    >
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            wishlist(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>

                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-1"
                          alt="product"
                          width={260}
                        />
                        <img src={watch2} className="img-fluid" alt="product" />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">${item?.price}</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-white">Big Screen</h5>
                <h6 className="text-white">Smart Watch Series</h6>
                <p className="text-white">From $399 or $16.62/mo. for 24 mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Smart Phones</h5>
                <h6>iPhone 13 Pro</h6>
                <p>Now in Green, From $999 or $41.62/mo. for 24 mo</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Home Speakers</h5>
                <h6>Room-filling sound</h6>
                <p>From $699 or $116.58/mo. for 12 mo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      prodId={item?._id}
                      title={item?.title}
                      image={item?.images[0]?.url}
                      brand={item?.brand}
                      rating={item?.totalrating.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item?.tags === "popular") {
                return (
                  <div key={index} className="col-3">
                    <div
                      // to={`${
                      //     location.pathname === '/'
                      //         ? 'product/:id'
                      //         : location.pathname === '/product/:id'
                      //         ? '/product/:id'
                      //         : ':id'
                      // }`}
                      className="product-card position-relative"
                    >
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            wishlist(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>

                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          className="img-fluid mx-1"
                          alt="product"
                          width={260}
                        />
                        <img src={watch2} className="img-fluid" alt="product" />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">${item?.price}</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="marquee-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div key={index} className="col-3">
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
