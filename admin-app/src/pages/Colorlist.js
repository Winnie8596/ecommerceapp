import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { getColors } from './../features/colors/colorSlice';
import CustonModal from '../components/CustomModal';
import { deleteColor } from '../features/colors/colorSlice';

const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

const Colorlist = () => {
    const [open, setOpen] = useState(false);
    const [colorId, setColorId] = useState('');
    const showModal = (e) => {
        setOpen(true);
        setColorId(e);
    };
    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getColors());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const colorState = useSelector((state) => state.colors.colors);
    const data1 = [];
    for (let i = 0; i < colorState.length; i++) {
        data1.push({
            key: i + 1,
            name: colorState[i].title,
            action: (
                <>
                    <Link to={`/admin/color/${colorState[i]._id}`} className="fs-3 text-danger">
                        <BiEdit />
                    </Link>
                    <button
                        onClick={() => showModal(colorState[i]._id)}
                        className="fs-3 ms-3 text-danger bg-transparent border-0"
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }

    const delColor = (e) => {
        dispatch(deleteColor(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getColors());
        }, 100);
    };
    return (
        <div>
            <h3 className="mb-4 title">Colors List</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustonModal
                hideModal={hideModal}
                open={open}
                performAction={() => delColor(colorId)}
                title="Are you sure you want to delete this color?"
            />
        </div>
    );
};

export default Colorlist;
