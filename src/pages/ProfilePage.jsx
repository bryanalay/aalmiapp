import { useContext, useState } from "react"
import { Post } from "../components/PostComponents/Post"
import { Posts } from "../components/PostComponents/Posts"
import { UserContext } from "../context/UserContext"
import { useFetch } from "../hooks/useFetch"
import { getLocalstorage } from "../data/localStorage"
import { API_BASE_URL } from "../../api/config"
import { uploadFile } from "../firebase/config"
import { updateRegister } from "../utils/user"
import ProfileDropdown from "../components/DropDown/ProfileDropDown"
import ProfileOptionsModal from "../components/Modals/ProfileOptionsModal"
import ProfileOptionsBtn from "../components/Modals/ProfileOptionsBtn"

function ProfilePage() {
  const { username,user } = getLocalstorage()
  const {data} = useFetch(API_BASE_URL+`posts/${user}`)
  const userinfo = useFetch(API_BASE_URL+`user/${user}`)
  
  console.log('data postde usuario en perfil: ', data);
  async function imgFileInputHandler(evt){
    const file = evt.target.files[0]
    const updateUrl = API_BASE_URL+'user/update'
    try {
      const urlString = await uploadFile(file, username+'Avatar')
      const info = {
        id:user,
        urlString
      }
      //guardar actualizacion en db
      await updateRegister(updateUrl, info)
      //actualizar fprofile
      const newUserInfo = [{
        id:userinfo.data[0].id,
        username: userinfo.data[0].username,
        fprofile: userinfo.data[0].fprofile = urlString,
        fbanner: userinfo.data[0].fbanner
      }]

      userinfo.setData(newUserInfo)

    } catch (error) {
      console.log('Error: '+error);
    }
  }

  return (
    <div className={`sm:border-x-[1px] border-black w-full p-5 h-full`}>
      <div className="h-6 mb-5">{username}`s profile</div>
      <section className="w-full grid grid-rows-[1fr] ">
        <div className="bg-slate-100 row-span-1">
          {userinfo?.data && <img src={userinfo?.data[0]?.fprofile} alt="fprofile" className="h-[auto] md:h-52" />}
          <div className="flex justify-between">
            <div className="text-left ml-5 p-2" >{username}</div>
            <ProfileOptionsBtn imgHandler={imgFileInputHandler}/>
          </div>
        </div>
        
      </section>
      <section className="w-full h-auto bg-orange-200">
        <Posts data={data} showNewpost={false} />
      </section>
    </div>

  )
}

export { ProfilePage }