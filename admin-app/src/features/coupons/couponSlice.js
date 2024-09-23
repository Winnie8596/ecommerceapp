import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import couponService from './couponService';

export const getCoupons = createAsyncThunk('coupon/get-coupons', async (thunkAPI) => {
    try {
        return await couponService.getCoupons();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const createCoupons = createAsyncThunk(
    'coupon/create-coupons',
    async (couponData, thunkAPI) => {
        try {
            return await couponService.createCoupons(couponData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const updateCoupon = createAsyncThunk('coupon/update-coupon', async (coupon, thunkAPI) => {
    try {
        return await couponService.updateCoupon(coupon);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getCoupon = createAsyncThunk('coupon/get-coupon', async (id, thunkAPI) => {
    try {
        return await couponService.getCoupon(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteCoupon = createAsyncThunk('coupon/delete-coupon', async (id, thunkAPI) => {
    try {
        return await couponService.deleteCoupon(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const resetState = createAction('reset-all');

const initialState = {
    coupons: [],
    isError: false,
    isLoading: false,
    isSucess: false,
    message: '',
};

export const couponSlice = createSlice({
    name: 'coupons',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoupons.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoupons.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucess = true;
                state.coupons = action.payload;
            })
            .addCase(getCoupons.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSucess = false;
                state.message = action.error;
            })
            .addCase(createCoupons.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createCoupons.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucess = true;
                state.createCoupon = action.payload;
            })
            .addCase(createCoupons.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSucess = false;
                state.message = action.error;
            })
            .addCase(getCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucess = true;
                state.couponName = action.payload.name;
                state.couponExpiry = action.payload.expiry;
                state.couponDiscount = action.payload.discount;
            })
            .addCase(getCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSucess = false;
                state.message = action.error;
            })
            .addCase(updateCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucess = true;
                state.updatedCoupon = action.payload;
            })
            .addCase(updateCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSucess = false;
                state.message = action.error;
            })
            .addCase(deleteCoupon.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCoupon.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSucess = true;
                state.deletedCoupon = action.payload;
            })
            .addCase(deleteCoupon.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSucess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);
    },
});

export default couponSlice.reducer;
