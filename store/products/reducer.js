import {handleActions} from 'redux-actions';
import {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    filterProducts,
    searchProducts,
    hasProduct,
    getProductsAll,
    getNewProducts,
    getImportantProducts,
    getProductsCategories, clearProducts
} from './actions';

const initialState = {
    products: [],
    importantProducts: [],
    newProducts: [],
    searchResult: [],
    selectedProduct: null,
    isFetching: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
};

const productReducer = handleActions(
    {
        [getProducts.success]: (state, {payload}) => ({
            ...state,
            products: payload,
            isFetching: false,
        }),
        [clearProducts.success]: (state) => ({
            ...state,
            products: [],
            isFetching: false,
        }),
        [getProductsCategories.success]: (state, {payload}) => ({
            ...state,
            products: payload,
            isFetching: false,
        }),
        [getProductsCategories.request]: (state) => ({
            ...state,
            isFetching: true,
        }),
        [getNewProducts.success]: (state, {payload}) => ({
            ...state,
            newProducts: payload,
            isFetching: false,
        }),
        [getImportantProducts.success]: (state, {payload}) => ({
            ...state,
            importantProducts: payload,
            isFetching: false,
        }),
        [getProductsAll.success]: (state, {payload}) => ({
            ...state,
            products: payload,
            isFetching: false,
        }),
        [hasProduct.success]: (state, {payload}) => ({
            ...state,
            products: state.products.map((product) =>
                product.id === payload.data.id ? payload.data : product
            ),
            isFetching: false,
        }),
        [filterProducts.success]: (state, {payload}) => ({
            ...state,
            products: payload,
            isFetching: false,
        }),
        [searchProducts.success]: (state, {payload}) => ({
            ...state,
            searchResult: payload,
            isFetching: false,
        }),
        [getProduct.success]: (state, {payload}) => ({
            ...state,
            selectedProduct: payload,
            isFetching: false,
        }),
        [addProduct.success]: (state, {payload}) => ({
            ...state,
            products: [...state.products, payload],
            isAdding: false,
        }),
        [updateProduct.success]: (state, {payload}) => ({
            ...state,
            products:state.products.map((product) =>
                product.id === payload.id ? payload : product
            ),
            isUpdating: true,
        }),
        [deleteProduct.success]: (state, {payload}) => ({
            ...state,
            products: state.products.filter((product) => product.id !== payload),
            isDeleting: false,
        }),
        [getProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [clearProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getProductsCategories.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getNewProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getImportantProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getProductsAll.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [filterProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [hasProduct.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [searchProducts.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [getProduct.failure]: (state, {payload}) => ({
            ...state,
            isFetching: false,
            error: payload,
        }),
        [addProduct.failure]: (state, {payload}) => ({
            ...state,
            isAdding: false,
            error: payload,
        }),
        [updateProduct.failure]: (state, {payload}) => ({
            ...state,
            isUpdating: false,
            error: payload,
        }),
        [deleteProduct.failure]: (state, {payload}) => ({
            ...state,
            isDeleting: false,
            error: payload,
        }),
    },
    initialState
);

export default productReducer;
