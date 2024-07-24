import { API_BASE_URL } from '../../api/config'

const likesFetch = {
  addLike: (token, postid) => {
    console.log('Add')
    const body = { postid: postid }
    console.log(token, body)
    const URL = API_BASE_URL + 'like'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }

    fetch(URL, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        return res
      })
  },
  dropLike: (token, postid) => {
    console.log('deleted')
    const body = { postid: postid }
    console.log(token, body)
    const URL = API_BASE_URL + 'like'
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(body)
    }
    fetch(URL, options)
      .then((res) => res.json())
      .then((res) => {
        return res
      })
  }
}

export default likesFetch
