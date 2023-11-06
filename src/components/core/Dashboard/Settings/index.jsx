import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpadatePassword from './UpadatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {
  return (
    <>
        <h1 className=' mb-14 text-3xl font-medium text-richblack-5'> Edit Profile </h1>

        <ChangeProfilePicture/>

        <EditProfile/>

        <UpadatePassword/>

        <DeleteAccount/>

    </>
  )
}

export default Settings