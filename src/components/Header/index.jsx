import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import { IoIosContact } from "react-icons/io";
import { Container, ContainerIncons2, LinkPage } from "../css/cssPages";
import Sidebar from "../Sidebar";

const Headar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSideBar = () => setSidebar(!sidebar)

  return(
    <div>
      <Container>
        <FaBars onClick={showSideBar} />
        {sidebar && <Sidebar active={setSidebar} />}
        <ContainerIncons2>
          <a href="http://localhost:3000/login">
          <IoIosContact/>
          </a> 
        </ContainerIncons2>
      </Container>
    </div>
    
  )
}

export default Headar