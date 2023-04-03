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
    <div className={`bg-violet-100 rounded-md py-2 my-4 mx-2`} id={id}>
      {console.log(id)}
      <h1>{username}</h1>
      <p>{cuerpo}</p>
      
      {user_id == lost.user ? (
        <button className={`inline-block text-center h-10 px-4 py-2 font-semibold rounded-md bg-slate-400 text-white`} onClick={() => deleteEx()}>Delete post</button>
      ) : (
        ""
      )}
    </div>
  );
}

export { Post };
