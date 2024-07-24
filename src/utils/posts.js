import axios from 'axios'
import { API_BASE_URL } from '../../api/config'

async function getPosts(token) {
  return await axios
    .get(API_BASE_URL + 'posts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return []
    })
}

async function savePost(token, body) {
  console.log('body del post psot: ', body)
  return await axios
    .post(API_BASE_URL + 'posts', body, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

async function elimPost(token, id) {
  console.log('info run deletePostt', token, id)
  console.log('esto es el body:', id)
  await axios
    .delete(API_BASE_URL + `posts/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export { getPosts, savePost, elimPost }
