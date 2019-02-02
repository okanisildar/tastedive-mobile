import axios from 'axios'

const apiUrl = 'https://tastedive.com/api/similar?'

const callApi = (params = '', method = 'get') => {
  const url = `${apiUrl}q=${params}`

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method,
        url,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}

export default callApi
