import response from '~/services/axios'

export const updateUser = async (token, user, instance) => {
    try {
        const res  = await instance.put(`/api/protected/user/${user.id}`, user, {
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log('Update Ok')
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error: ', err.response.message, err.response.code)
        console.error('Request error: ', err.message)
    }
}
export const getCurrentUser = async (instance, token) => {
    try {
        const res = await instance.get('/api/protected/user/current_user', {
            headers: {Authorization: `Bearer ${token}`}
        })
        return res.data
    }
    catch(err) {
        if (err.response)
            console.error('Server error: ', err.response.message, err.response.code)
        console.error('Request error: ', err.message)
    }
}