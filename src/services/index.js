import axios from 'axios'

export const createUser = async (name, email, phone) => {
  const res = await axios.post('http://localhost:9001/create-user', {
    name,
    email,
    phone,
  })
  return res.data
}

export const createPost = async (data, userId) => {
  const res = await axios.post(
    'http://localhost:9001/create-post',
    {
      ...data,
    },
    {
      headers: {
        userId,
      },
    }
  )
  return res.data
}

export const validateToken = async token => {
  const res = await axios.post('http://localhost:9001/verify-token', {
    token,
  })

  return res
}
