import { useState } from "react"
import Modal from "./Modal"
import UpdateBannerModal from "./UpdateBannerModal"
import DeleteUserModal from "./DeleteUserModal"

const ProfileOptionsModal = ({imgHandler, setIsOpen}) => {
  const [isOpenUpdateBannerModal,setIsOpenUpdateBannerModal] = useState(false)
  const [isOpenDeleteModal,setIsOpenDeleteModal] = useState(false)

  const sizes = {
    h:true,
    sec:'50px'
  }
  return (
    <Modal sizes={sizes} setIsOpen={setIsOpen} >
      <div className="row-span-1 items-center">
        <div className="grid cursor-pointer gap-4">
          <div className="w-full h-full bg-violet-500 hover:bg-slate-300" onClick={()=>{setIsOpenUpdateBannerModal(true)}} >Update Banner</div>
          <div className="w-full h-full bg-violet-500 hover:bg-slate-300" onClick={()=>{setIsOpenDeleteModal(true)}} >Delete User</div>
        </div>
        {isOpenUpdateBannerModal && <UpdateBannerModal imgHandler={imgHandler} setIsOpen={setIsOpenUpdateBannerModal}/>}
        {isOpenDeleteModal && <DeleteUserModal setModalIsOpen={setIsOpenDeleteModal} />}
      </div>
    </Modal>
    )
}

export default ProfileOptionsModal