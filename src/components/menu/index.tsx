'use client'

import Link from "next/link";
import Image from "next/image";

import { menu } from "../../data";

import {
  MenuContainer,
  MenuContents
}from './style'

const Menu = () => {
  return (
    <MenuContainer className="menu">
      {menu.map((item) => (
        <MenuContents className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link href={listItem.url} className="listItem" key={listItem.id}>
              <Image src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </MenuContents>
      ))}
    </MenuContainer>
  );
};

export default Menu;
