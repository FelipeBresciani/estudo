import React from 'react'
import { 
  FaTimes, 
  FaHome, 
} from 'react-icons/fa'
import { FiFileText } from "react-icons/fi";
import { ContainerSide, Content, LinkPage } from '../css/cssPages'
import SidebarItem from '../SideBarIncons'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <ContainerSide sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <LinkPage href="http://localhost:3000/">
          <SidebarItem Icon={FaHome} Text="Home" />
        </LinkPage>
        <LinkPage href='http://localhost:3000/Planos' > <SidebarItem Icon={FiFileText} Text="Planos" /> </LinkPage>
      </Content>
    </ContainerSide>
  )
}

export default Sidebar