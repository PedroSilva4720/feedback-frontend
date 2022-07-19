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

    let resp = await res.data.map(item => (item.active ? item : null))

    resp = resp.filter(Boolean)

    return resp
  } catch (e) {
    return 'error'
  }
}

export const getQuests = async companyId => {
  const res = await axios.get(`http://localhost:9001/get-quests/${companyId}`)

  return res.data
}

export const sendQuestsConfigs = async (companyId, auth, data) => {
  await axios.post(
    `http://localhost:9001/create-quest-management/${companyId}`,
    { ...data },
    {
      headers: {
        auth,
      },
    }
  )
}

export const refreshToken = async token => {
  try {
    const res = await axios.get('http://localhost:9001/verify-token', {
      headers: { auth: token },
    })
    return res.data
  } catch (err) {
    return 'error'
  }
}

export const useToken = async token => {
  const res = axios.post('http://localhost:9001/verify-token', {
    token,
  })

  return res
}

export const setMarkdownStatus = async (status, companyId, jwt) => {
  const res = await axios.post(
    `http://localhost:9001/edit-markdown-status/${companyId}`,
    { status },
    { headers: { auth: jwt } }
  )

  return res
}
export const setTokenStatus = async (status, companyId, jwt) => {
  const res = await axios.post(
    `http://localhost:9001/edit-token-status/${companyId}`,
    { status },
    { headers: { auth: jwt } }
  )

  return res
}

export const getConfigsDefaultState = async (companyId, jwt) => {
  const res = await axios.get(
    `http://localhost:9001/get-configs-default-status/${companyId}`,
    { headers: { auth: jwt } }
  )

  return res.data
}
