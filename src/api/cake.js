
import response from '~/services/axios'

const fetchCake = (typeId) => {
    return response.get(`/api/public/products/${typeId}`)
}

export default fetchCake;