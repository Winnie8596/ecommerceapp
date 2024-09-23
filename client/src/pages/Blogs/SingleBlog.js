import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/Blogs/SingleBlogPageStyles.css";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import blog1 from "../../images/blog-1.jpg";
import Container from "./../../components/Container";
import { getBlog } from "../../features/blogs/blogSlice";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const blogState = useSelector((state) => state?.blog?.singleBlog);
  useEffect(() => {
    getSingleBlog();
  }, []);
  const getSingleBlog = () => {
    dispatch(getBlog(getBlogId));
  };
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link
                to="/blogs"
                className="d-flex align-items-center gap-10 mb-3"
              >
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img
                src={
                  blogState?.images[0]?.url ? blogState?.images[0]?.url : blog1
                }
                className="img-fluid my-4 w-75"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: blogState?.description.substr(0, 70) + "...",
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
