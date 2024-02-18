import { useContext } from "react"
import { Post } from "../components/PostComponents/Post"
import { Posts } from "../components/PostComponents/Posts"
import { UserContext } from "../context/UserContext"
import { useFetch } from "../hooks/useFetch"
import { getLocalstorage } from "../data/localStorage"

const ProfilePage = () => {
  const { user } = getLocalstorage()
  const {data} = useFetch(`https://almiapitest.herokuapp.com/api/v1/posts/${user}`)
  
  return (
    <div className={`col-span-12 sm:col-span-6 sm:border-x-[1px] border-black place-items-center w-full p-5`}>
      <section className="w-full h-64 bg-slate-400">
        user cosas
      </section>
      <section className="w-full h-auto bg-orange-200">
        <Posts data={data} showNewpost={false} />
      </section>
    </div>
  )
}

export default ProfilePage