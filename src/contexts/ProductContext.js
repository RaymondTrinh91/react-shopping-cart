import React, { useState, createContext } from 'react';

import data from '../data';

export const ProductContext = createContext()

export const ProductContextProvider = props => {
    const [products] = useState(data);

    return (
        <ProductContext.Provider value={[products]}>
            {props.children}
        </ProductContext.Provider>
    )
}