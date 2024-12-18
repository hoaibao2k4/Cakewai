import { response } from "~/services/axios";

export const getBlogs = async () => {
    try {
        const res = await response.get('/api/public/event_blog')
        return res.data
    }
    catch(err) {
        console.log(err)
    }
}