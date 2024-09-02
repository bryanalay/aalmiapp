import React from 'react'
import Modal from './Modal'
import { deleteUser } from '../../utils/user'
import { API_BASE_URL } from '../../../api/config'

const DeleteUserModal = ({setModalIsOpen, userid}) => {
  async function action(){
    //elimina perfil
    console.log('Eliminado...')
    setModalIsOpen(false)
    console.log('cerrado...');
    //cierra sesion elimina tokens
    await deleteUser()
  }
  const sizes = {
    h:true,
    sec:'50px'
  }
  return (
    <div>
      <Modal action={action} setIsOpen={setModalIsOpen} sizes={sizes} textBtnAction={'Eliminar'}>
        <div>Seguro de eliminar perfil?</div>
      </Modal>
    </div>
  )
}

export default DeleteUserModal