'use client'

import Image from 'next/image'

import { 
  TopBoxContainer,
  TopBoxList,
  TopBoxListItem,
  TopBoxUser,
  TopBoxUserTexts
} from './style'

import {topDealUsers} from '../../data'

const TopBox = () => {
  return (
    <TopBoxContainer>
      <h1>Top Deals</h1>
      <TopBoxList>
        {topDealUsers.map(user=>(
          <TopBoxListItem key={user.id}>
            <TopBoxUser>
              <Image width={40} height={40} src={user.img} alt="" />
              <TopBoxUserTexts>
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </TopBoxUserTexts>
            </TopBoxUser>
            <span className="amount">${user.amount}</span>
          </TopBoxListItem>
        ))}
      </TopBoxList>
    </TopBoxContainer>
  )
}

export default TopBox