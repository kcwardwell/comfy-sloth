import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
import { products_url as url , single_product_url as single_url } from '../utils/constants'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const productInitialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  featured_products: []
}

const ProductsContext = React.createContext()



export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, productInitialState)

  const openSidebar = () => {
    console.log("openSidebar", state)
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const productsLoad = () => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
  }

  const productsError = () => {
    dispatch({ type: GET_PRODUCTS_ERROR })
  }

  const productsSuccess = (payload) => {
    dispatch({ type: GET_PRODUCTS_SUCCESS, action: payload })
  }

  const fetchProducts = async (url) => {
    dispatch({type: GET_PRODUCTS_BEGIN})
   
    try {
      const response = await  axios.get(url)
      const products = response.data
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
    }

  }

  const fetchSingleProduct = async (url) => {
    dispatch({type: GET_SINGLE_PRODUCT_BEGIN})
    try {
      
      const response = await axios.get(url)
      const singleProduct = response.data
      dispatch({type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
      
      
    } catch (error) {
      dispatch({type: GET_SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(()=>{
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider value={
      {
        ...state,
        openSidebar,
        closeSidebar,
        productsLoad,
        productsError,
        productsSuccess
      }
    }>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
