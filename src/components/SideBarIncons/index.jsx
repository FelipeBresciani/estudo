import React from 'react'
import { ContainerIncons } from '../css/cssPages'


const SidebarItem = ({ Icon, Text }) => {
  return (
    <ContainerIncons>
      <Icon />
      {Text}      
    </ContainerIncons>
  )
}

export default SidebarItem