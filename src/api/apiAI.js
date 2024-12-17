import {response} from '~/services/axios'
export const translatePromt = async (token, promt, instance) => {
  try {
    const res = await instance.post(
      '/api/protected/translate',
      { user_input: promt },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return res.data;
  } catch (err) {
    if (err.response) console.error('Server err: ', err.response.message, err.response.code);
    else console.error('Request err: ', err.message);
  }
};

export const generateImage = async (prompt) => {
  try {
    
  } catch (err) {
    if (err.response) console.error('Server err: ', err);
    else console.error('Request err: ', err.message);
  }
};

