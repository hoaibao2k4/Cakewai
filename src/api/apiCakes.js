
import {response} from '~/services/axios'

export const getCake = (typeId) => {
    return response.get(`/api/public/products/${typeId}`)
}

export const getCakeById = (id) => {
    return response.get(`/api/public/product/${id}`)
}

export const fetchBestSeller = () => {
    return response.get('/api/public/products/')
}