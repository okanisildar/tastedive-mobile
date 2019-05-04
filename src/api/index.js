import axios from 'axios'
import { API_KEY } from 'react-native-dotenv'

const apiUrl = 'https://tastedive.com/api/similar?'

const callApi = ({
  q = '', method = 'get', info = 1, type = '', limit = 10,
}) => {
  const url = `${apiUrl}k=${API_KEY}&type=${type}&limit=${limit}&info=${info}&q=${q}`
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
