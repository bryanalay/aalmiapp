import axios from 'axios'
import { API_BASE_URL } from '../../api/config'

async function getTags() {
  return await axios
    .get(API_BASE_URL + 'tags')
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return []
    })
}

export { getTags }
