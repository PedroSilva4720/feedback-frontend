import axios from 'axios'

export const createUser = async (name, email, phone, companyId) => {
  const res = await axios.post(
    `http://localhost:9001/create-user/${companyId}`,
    {
      name,
      email,
      phone,
    }
  )
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
      return { status: res.status, response: res.data }
    })
    .catch(err => {
      return { status: err.response.status, response: err.response.data }
    })

  return res
}

export const getDashboardItems = async (jwt, companyId) => {
  try {
    const res = await axios.get(
      `http://localhost:9001/dashboard/${companyId}`,
      {
        headers: {
          auth: jwt,
        },
      }
    )

    const resp = res.data.map(item => {
      if (item.active) {
        return item
      } else {
      }
    })
    return resp
  } catch (e) {
    return 'error'
  }
}

export const getQuests = async companyId => {
  const res = await axios.get(`http://localhost:9001/get-quests/${companyId}`)

  return res.data
}

export const getQuestsName = async () => {}
