import axios from 'axios'
import { API_BASE_URL } from '../../api/config'

async function postRegister(body) {
  await axios
    .post(API_BASE_URL + 'user/', body)
    .then((res) => {
      console.log('postRegister response: ', res)
    })
    .catch((err) => {
      return err
    })
}

export { postRegister }
