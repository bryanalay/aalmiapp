import axios from 'axios'
import { setLocalStorage } from '../data/localStorage'
import { API_BASE_URL } from '../../api/config'

async function postLogin(body) {
  const options = {
    headers: {
      Accept: '*/*'
    }
  }
  await axios
    .post(API_BASE_URL + 'login/', body, options)
    .then((res) => {
      setLocalStorage(res.data.token, res.data.userid, body.username)
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export { postLogin }
