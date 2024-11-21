
import response from '~/services/axios'

const fetchCake = () => {
    return response.get('/api/public/products/')
}

export default fetchCake;