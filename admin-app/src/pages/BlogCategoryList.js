import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import {
  getBlogCategories,
  deleteBlogCategory,
} from "../features/blogCategory/blogCategorySlice";
import CustonModal from "../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCategoryList = () => {
  const [open, setOpen] = useState(false);
  const [blogCategoryId, setBlogCategoryId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setBlogCategoryId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const blogCategoryState = useSelector(
    (state) => state.blogCategories.categories
  );
  const data1 = [];
  for (let i = 0; i < blogCategoryState.length; i++) {
    data1.push({
      key: i + 1,
      name: blogCategoryState[i].title,
      action: (
        <>
          <Link
            to={`/admin/blog-category/${blogCategoryState[i]._id}`}
            className="fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            onClick={() => showModal(blogCategoryState[i]._id)}
            className="fs-3 ms-3 text-danger bg-transparent border-0"
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }

  const delBlogCategory = (e) => {
    dispatch(deleteBlogCategory(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogCategories());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Blog Categories List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustonModal
        hideModal={hideModal}
        open={open}
        performAction={() => delBlogCategory(blogCategoryId)}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default BlogCategoryList;
