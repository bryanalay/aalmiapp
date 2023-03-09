import { getLocalstorage } from "../../data/localStorage";

function Post({ id, username, cuerpo, fecha, user_id, deletePost, data, setData }) {
  const lost = getLocalstorage();
  const tk = lost.token

  function deleteEx(){
    const newArr = data.filter((obj)=>obj.id !==id)
    console.log('id a eliminar: ',id);
    setData(newArr)
    deletePost(tk, id)
  }


  return (
    <div id={id}>
      {console.log(id)}
      <h1>{username}</h1>
      <p>{cuerpo}</p>
      
      {user_id == lost.user ? (
        <button onClick={() => deleteEx()}>Delete post</button>
      ) : (
        ""
      )}
    </div>
  );
}

export { Post };
