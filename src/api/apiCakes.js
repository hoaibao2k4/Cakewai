
import {response} from '~/services/axios'

export const getCake = (typeId) => {
    return response.get(`/api/public/products/${typeId}`)
}

export const getCakeById = (id) => {
    return response.get(`/api/public/product/${id}`)
}

export const getAllCakes = () => {
    return response.get('/api/public/products/');
};

export const createCake = (product_name, image_link, description, product_type_id, product_variant) => {
    const data = {
        product_name: product_name,
        image_link: image_link,
        description: description,
        product_type_id: product_type_id,
        product_variant: Array.isArray(product_variant) ? product_variant : [product_variant]
    };
    return response.post('/api/public/product', data)
}

export const deleteCake = (id) => {
    return response.delete(`/api/public/product/${id}`)
}

export const updateCake = (_id, product_name, image_link, description, product_type_id, product_variant) => {
    const data = {
        _id,
        product_name,
        image_link,
        description,
        product_type_id,
        product_variant: product_variant
    };
    return response.put(`/api/public/product/${_id}`, data)
}

export const fetchBestSeller = () => {
    return response.get('/api/public/products/')
}

export const sortCakes = async (order) => {
    try {
        const res = await response.get(`/api/public/products/sort?field=variant.price&order=${order}`)
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error:', err.response, err.response.status)
        console.error('Request error: ', err.message)
    }
}

export const searchCakes = async (query) => {
    try {
        const res = await response.get(`/api/public/product/search?query=${query}`)
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error:', err.response, err.response.status)
        console.error('Request error: ', err.message)
    }
}