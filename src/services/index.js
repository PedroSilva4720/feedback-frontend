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

export const login = async (username, password) => {
  const res = await axios
    .post('http://localhost:9001/login', {
      username,
      password,
    })
    .then(res => {
      return { status: res.status, message: res.data.managerToken }
    })
    .catch(err => {
      return { status: err.response.status, message: err.response.data }
    })

  return res
}

export const getDashboardItems = async jwt => {
  const res = await axios.get('http://localhost:9001/feedbacks', {
    headers: {
      auth: jwt,
    },
  })

  return res.data
}
