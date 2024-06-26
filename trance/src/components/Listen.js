import styled from "styled-components";
import img from "../images/hypno poster 29.06.23.jpg"
import { NavLink } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";


const Listen = () => {

    return (
<>
<Background>
<Close>
        <Alink href="/">
          X 
        </Alink>
      </Close>
<Wrapper>
<Img src= {img}/>

<iframe src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&hide_artwork=1&feed=%2Fjulia-dyck%2Fpleasure-leisure%2F" allow="autoplay"></iframe> 


</Wrapper>
</Background>
</>


    )

}

const Img = styled.img`

max-width:100%;
max-height: 500px;
margin-bottom: 3%;


`

const Wrapper = styled.div`

display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
background-color: #fe579c;
font-family: "Sonsie One";
  padding-left: 5%;
  padding-right: 5%;

  @media (min-width: 768px) {
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
  }

`
const Background = styled.div`
height: 100vh;
width: 100%;
background-color: #fe579c;

overflow: scroll;
font-family: "Sonsie One";

`;


const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3%;
  text-decoration: none;

`;

const Alink = styled.a`
text-decoration: none;
font-size: 20px;
color: black;
`


export default Listen;