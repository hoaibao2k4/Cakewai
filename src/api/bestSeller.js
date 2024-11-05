import response from '~/services/axios'

const fetchBestSeller = () => {
    return response.get('/api/public/products/')
}

export { fetchBestSeller }