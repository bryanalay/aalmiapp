import { useLocation } from "react-router-dom"
import { Post } from "../components/PostComponents/Post"

export const PostPage = () => {
  const loc = useLocation()
  const info = loc.state || {}
  console.log("info del state del react router dom", info);
  return (
    <div className={`sm:grid sm:col-span-3 sm:border-x-[1px] border-black`}>
      <div className="py-4 font-bold">
        Post de {info?.username}
      </div>
      <div className="bg-gray-100">
        <Post 
            info={info} key={info.id}
            id={info.id}
            username={info.username}
            cuerpo={info.cuerpo}
            fecha={info.fecha}
            user_id={info.user_id}
            likes={info.likes}/>
      </div>
    </div>
  )
}
