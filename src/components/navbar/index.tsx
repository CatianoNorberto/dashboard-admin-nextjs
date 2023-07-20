'use client'

import Image from 'next/image';

import Logo from '../../assets/images/log.svg'
import Search from '../../assets/images/search.svg'
import App from '../../assets/images/app.svg'
import Expand from '../../assets/images/expand.svg'
import Settings from '../../assets/images/settings.svg'
import NotificationImg from '../../assets/images/notifications.svg'

import {
  NavBar,
  NavLogo,
  NavIcons,
  Notifications,
  NavUser
}from './style'

const Navbar = () => {
  return (
    <NavBar>
      <NavLogo>
        <Image src={Logo} alt="" />
        <span>lamadmin</span>
      </NavLogo>
      <NavIcons>
        <Image src={Search} alt="" className="icon" />
        <Image src={App} alt="" className="icon" />
        <Image src={Expand} alt="" className="icon" />
        <Notifications className="notification">
          <Image src={NotificationImg} alt="" />
          <span>1</span>
        </Notifications>
        <NavUser className="user">
          <Image
            width={26}
            height={26}
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span>Jane</span>
        </NavUser>
        <Image src={Settings} alt="" className="icon" />
      </NavIcons>
    </NavBar>
  );
};

export default Navbar;
