import axios from 'axios'
import { API_BASE_URL } from '../../api/config'
import { getLocalstorage } from '../data/localStorage'

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

async function updateRegister(url, info) {
  const { id, urlString } = info
  const { token } = getLocalstorage()

  if (token) {
    console.log('este es el token: ' + token)
    const body = {
      userid: id,
      urlString: urlString
    }
    await axios
      .put(url, body, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log('Updated Message: ' + response.data)
      })
      .catch((err) => {
        console.log('Error al actualizar perfil: ' + err)
      })
  }
}

export { postRegister, updateRegister }
