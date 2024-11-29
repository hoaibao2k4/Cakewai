
import response from '~/services/axios'

const getCake = (typeId) => {
    return response.get(`/api/public/products/${typeId}`)
}

export default getCake;

export const getCakeById = (id) => {
    return response.get(`/api/public/product/${id}`)
}