import axios from "axios";

async function getPosts(token) {
  return await axios
    .get("https://almiapitest.herokuapp.com/api/v1/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res; 
    })
    .catch((err) => {
      return [];
    });
}

async function savePost(token, body) {
  console.log("body del post psot: ", body);
  return await axios
    .post(
      "https://almiapitest.herokuapp.com/api/v1/posts",body,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function elimPost(token, id) {
  console.log("info run deletePostt", token, id);
  console.log("esto es el body:", id);
  await axios
    .delete(
      `https://almiapitest.herokuapp.com/api/v1/posts/delete/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getPosts, savePost, elimPost };
