import React from 'react'
import Modal from './Modal'

const UpdateBannerModal = ({setIsOpen, imgHandler}) => {
  const sizes = {
    h:true,
    sec:'80px'
  }
  return (
    <Modal setIsOpen={setIsOpen} sizes={sizes}>
      <div className="">
        <input className="" type="file" name="imgupload" id="imgupload"  onChange={imgHandler}/>
      </div>
    </Modal>
  )
}

export default UpdateBannerModal