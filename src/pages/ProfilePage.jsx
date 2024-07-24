import { useContext } from "react"
import { Post } from "../components/PostComponents/Post"
import { Posts } from "../components/PostComponents/Posts"
import { UserContext } from "../context/UserContext"
import { useFetch } from "../hooks/useFetch"
import { getLocalstorage } from "../data/localStorage"
import { API_BASE_URL } from "../../api/config"

function ProfilePage() {
  const { username,user } = getLocalstorage()
  const {data} = useFetch(API_BASE_URL+`posts/${user}`)
  
  return (
    <div className={`col-span-12 sm:col-span-6 sm:border-x-[1px] border-black flex flex-col w-full p-5 gap-y-10`}>
      <section className="w-full h-[200px] bg-slate-400">
        <div className="bg-green-300 min-h-[150px] flex justify-between items-end px-5 py-3">
          <div>{username}</div>
        </div>
        <div className="bg-gray-300 min-h-[50px] px-5 py-3 right-0">
          Acciones
        </div>
      </section>
      <section className="w-full h-auto bg-orange-200">
        <Posts data={data} showNewpost={false} />
      </section>
    </div>
  )
}

export { ProfilePage }