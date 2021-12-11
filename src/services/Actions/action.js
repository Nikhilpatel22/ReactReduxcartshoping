import React from 'react'
import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'

export const addToCart = (data) => {
    //console.warn("action")
    return {
        type: ADD_TO_CART,
        data:data
    }
}

export const removeToCart = () => {
    console.warn("action")
    return {
        type: REMOVE_TO_CART,
    }
}