import {response} from '~/services/axios'
export const getCart = async (token, instance) => {
    try {
        const res = await instance.get('/api/protected/cart', {
            headers: {Authorization: `Bearer ${token}`}
        })
        return res.data
    }
    catch(err) {
        if (err.response) 
            console.error('Server error: ', err.response.message, err.response.status)
        else
            console.error('Request error: ', err.message)
    }
}

export const updateCartItem = async (token, instance, item) => {
    try {
        const res = await instance.put(`/api/protected/cart/update_cart`, item, {
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log('Update OK!')
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error: ', err.response.message, err.response.status)
        else
            console.error('Request error: ', err.message)    
    }
}

export const removeCartItem = async (token, instance, id, size ) => {
    try {
        await instance.delete(`/api/protected/cart/item?product_id=${id}&variant=${size}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
    }
    catch(err) {
        if (err.response)
            console.error('Server error: ', err.response.message, err.response.status)
        else
            console.error('Request error: ', err.message)
    }
}

export const addCartItem = async (token, instance, item) => {
    try {
        const res = await instance.post('/api/protected/cart/additem', item, {
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log(res.data)
        return res.data
    }
    catch(err) {
        if (err.response){
            console.log(err)
            console.log(err.response)
            console.error('Server error: ', err.response.message, err.response.status)
        }
        else
            console.error('Request error: ', err.message)
    }
}

export const createOrder = async (token, instance, invoice) => {
    try {
        const res = await instance.post('/api/protected/order', invoice, {
            headers: {Authorization: `Bearer ${token}`}
        })
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error: ', err.response.message, err.response.status)
        else
            console.error('Request error: ', err.message)
    }

}

