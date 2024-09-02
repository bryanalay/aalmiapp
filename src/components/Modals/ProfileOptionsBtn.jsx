import { useState } from 'react'
import ProfileOptionsModal from './ProfileOptionsModal'

const ProfileOptionsBtn = ({imgHandler}) => {
  const [isOpenModalOpt, setIsOpenModalOpt] = useState(false)

  return (
    <>
      <div class="flex flex-col items-center justify-center space-y-1 w-10 h-10 bg-slate-200 cursor-pointer"  onClick={()=>{setIsOpenModalOpt(!isOpenModalOpt)}}>
        <span class="block w-1 h-1 bg-gray-800 rounded-full"></span>
        <span class="block w-1 h-1 bg-gray-800 rounded-full"></span>
        <span class="block w-1 h-1 bg-gray-800 rounded-full"></span>
      </div>
      {isOpenModalOpt && <ProfileOptionsModal setIsOpen={setIsOpenModalOpt} imgHandler={imgHandler}/>}
    </>
  )
}

export default ProfileOptionsBtn