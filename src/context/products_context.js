import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
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

const producInitialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {}  
}

const ProductsContext = React.createContext()



export const ProductsProvider = ({ children }) => {
  const [state,dispatch] = useReducer(products_reducer, producInitialState)

  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }

  const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

  const productsLoad = () => {
    dispatch({type: GET_PRODUCTS_BEGIN})
  }

  const productsError = () => {
    dispatch({type: GET_PRODUCTS_ERROR})
  }

  const productsSuccess = (payload) => {
    dispatch({type: GET_PRODUCTS_SUCCESS, action: payload})
  }

  return (
    <ProductsContext.Provider value='products context'>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
