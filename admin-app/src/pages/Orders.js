import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { getOrders, updateOrder } from "./../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const orderState = useSelector((state) => state.auth.orders.orders);
  const data1 = [];
  if (orderState && orderState.length > 0) {
    for (let i = 0; i < orderState.length; i++) {
      data1.push({
        key: i + 1,
        name:
          orderState[i].user?.firstname + " " + orderState[i].user?.lastname,
        product: (
          <Link to={`/admin/order/${orderState[i]._id}`}>View Orders</Link>
        ),
        amount: orderState[i].totalPrice,
        date: new Date(orderState[i]?.createdAt).toLocaleString(),
        action: (
          <>
            <select
              name=""
              className="form-control form-select"
              defaultValue={orderState[i]?.orderStatus}
              onChange={(e) =>
                updateOrderStatus(orderState[i]._id, e.target.value)
              }
            >
              <option value="Ordered" disable selected>
                Ordered
              </option>
              <option value="Processed">Processed</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered"> Delivered</option>
            </select>
          </>
        ),
      });
    }
  }

  const updateOrderStatus = (a, b) => {
    dispatch(updateOrder({ id: a, status: b }));
  };
  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Orders;
