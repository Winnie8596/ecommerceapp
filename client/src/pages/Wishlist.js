import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import '../styles/Products/CompareProductPageStyles.css';
import Container from './../components/Container';
import { getUserProductWishlist } from './../features/user/userSlice';
import { addToWishlist } from './../features/products/productSlice';

const Wishlist = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getWishlistFromDb();
    }, []);
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishlist());
    };

    const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
    const removeWishlist = (id) => {
        dispatch(addToWishlist(id))
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        }, 300);
    };

    return (
        <>
            <Meta title={'Wishlist'} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
                <div className="row">
                    {wishlistState?.length > 0 ? (
                        wishlistState && wishlistState?.map((item, index) => {
                            return (
                                <div className="col-3" key={index}>
                                    <div className="wishlist-card position-relative">
                                        <img
                                            onClick={() => removeWishlist(item?._id)}
                                            src="images/cross.svg"
                                            alt="cross"
                                            className="position-absolute cross1 img-fluid"
                                        />
                                        <div className="wishlist-card-image bg-white">
                                            <img
                                                src={item?.images[0]?.url ? item?.images[0]?.url : 'images/watch.jpg'}
                                                className="img-fluid w-100 d-block mx-auto"
                                                alt="watch"
                                                width={160}
                                            />
                                        </div>
                                        <div className="py-3 px-3">
                                            <h5 className="title">
                                                {item?.title}
                                            </h5>
                                            <h6 className="price">$ {item?.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h1>No items in wishlist</h1>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Wishlist;
