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
    <div className={`bg-violet-300 rounded-md py-2 my-4 mx-2`} id={id}>
      {console.log(id)}
      <h1>{username}</h1>
      <p>{cuerpo}</p>
      
      {user_id == lost.user ? (
        <button className={`class="h-10 px-6 py-3 font-semibold rounded-md bg-slate-400 text-white type="submit"`} onClick={() => deleteEx()}>Delete post</button>
      ) : (
        ""
      )}
    </div>
  );
}

export { Post };
