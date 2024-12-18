import {response} from '~/services/axios'
export const generateImage = async (token, promt, instance) => {
  try {
    const res = await instance.post(
      '/api/protected/generate-image',
      { user_input: promt },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return res.data;
  } catch (err) {
    if (err.response) console.error('Server err: ', err.response.message, err.response.status);
    else console.error('Request err: ', err.message);
  }
};

