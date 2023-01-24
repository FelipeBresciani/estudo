import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1A202C; 
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 10px;
  color: whitesmoke;
`;

export const DivLine = styled.div`
  align-items: baseline;
  text-align: center;
  display: flexbox;
  margin: auto;
  justify-content: center;
`;

export const GlobalDiv = styled.div`
  align-items: center;
  text-align: center;
  text-decoration: none;
`;

export const List = styled.ul`
  align-items:  center;
  text-align: center;
  margin: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const List2 = styled.ul`
  align-items:  center;
  text-align: center;
  margin: 20px;
  border-radius: 5px;
  background-color: purple;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const List3 = styled.ul`
  display: flex;
  align-items:  center;
  text-align: center;
  margin: 20px;
  background-color: red;
  border-radius: 5px;
  color: white;
  flex-direction: column;
  
`;

export const List4 = styled.ul`
  align-items:  center;
  text-align: center;
  margin: 20px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`;

export const LiCss = styled.li`
  align-items: center;
  text-align: center;
  margin: 4px;
  flex-direction: column;
`;

export const LinkPage = styled.a`
  text-decoration: none;
`;

export const PlanTitles = styled.span`
  text-align: center;
  color: white;
`;

export const DivBLack = styled.div`
  background-color: black;
  margin: 10px;
  border-radius: 8px;
`;

export const DivLilas = styled.div`
  background-color: purple;
  margin: 10px;
  border-radius: 8px;
`;

export const DivVermelha = styled.div`
  background-color: red;
  margin: 10px;
  border-radius: 8px;
`;

export const DivAzul = styled.div`
  background-color: blue;
  margin: 10px;
  border-radius: 8px;
`;

export const TitleBlack = styled.h1`
  color: black;
`;

export const TitlePurple = styled.h1`
  color: purple;
`;

export const TitleRed = styled.h1`
  color: red;
`;

export const TitleBlue = styled.h1`
  color: blue;
`;

export const BtnBlack = styled.button`
  border: none;
  padding: 15px;
  background-color: black;
  border-radius: 6px;
  color: white;
  margin: 30px;
`;

export const BtnPurple = styled.button`
  border: none;
  padding: 15px;
  background-color: purple;
  border-radius: 6px;
  color: white;
  margin: 30px;
`;

export const BtnRed = styled.button`
  border: none;
  padding: 15px;
  background-color: red;
  border-radius: 6px;
  color: white;
  margin: 30px;
`;

export const BtnBlue = styled.button`
  border: none;
  padding: 15px;
  background-color: blue;
  border-radius: 6px;
  color: white;
  margin: 30px;
`;

export const ContainerSide = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const ContainerIncons = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: black;
  }
`;

export const ContainerIncons2 = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 35px;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 30px 30px px 5px;
  border-radius: 10px;
  margin-left: 1750px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: #6E6F80;
  }
`;