import axios from 'axios'

const apiUrl = 'https://tastedive.com/api/similar?'
const apiKey = ''

const callApi = ({
  q = '', method = 'get', info = 1, type = '', limit = 1,
}) => {
  const url = `${apiUrl}k=${apiKey}&type=${type}&limit=${limit}&info=${info}&q=${q}`
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
