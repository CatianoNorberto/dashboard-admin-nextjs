'use client'

import Single from "../../components/single"
import { singleUser } from "../../data"

import { UserContainer } from './style'

const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <UserContainer>
      <Single {...singleUser}/>
    </UserContainer>
  )
}

export default User