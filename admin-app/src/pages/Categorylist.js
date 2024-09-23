import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { deleteProdCategory, getCategories } from './../features/prodCategory/ProdCategorySlice';
import CustonModal from '../components/CustomModal';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Categorylist = () => {
    const [open, setOpen] = useState(false);
    const [prodCategoryId, setProdCategoryId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setProdCategoryId(e);
    };
    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const categoryState = useSelector((state) => state.prodCategories.categories);
    const data1 = [];
    for (let i = 0; i < categoryState.length; i++) {
        data1.push({
            key: i + 1,
            name: categoryState[i].title,
            action: (
                <>
                    <Link to={`/admin/category/${categoryState[i]._id}`} className="fs-3 text-danger">
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(categoryState[i]._id)}
                        className="fs-3 ms-3 text-danger bg-transparent border-0"
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }

    const delProdCategory = (e) => {
        dispatch(deleteProdCategory(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getCategories());
        }, 100);
    };
    return (
        <div>
            <h3 className="mb-4 title">Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustonModal
                hideModal={hideModal}
                open={open}
                performAction={() => delProdCategory(prodCategoryId)}
                title="Are you sure you want to delete this product category?"
            />
        </div>
    );
};

export default Categorylist;
