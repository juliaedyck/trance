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
{/* <Img src= {img}/> */}

<iframe title="T.R.A.N.C.E. (Pleasure/Perspective)" style={{ border: 0, width: "350px", height: "470px" }} src="https://bandcamp.com/EmbeddedPlayer/album=3728223604/size=large/bgcol=ffffff/linkcol=f171a2/tracklist=false/transparent=true/" seamless><a href="https://bbjtc.bandcamp.com/album/t-r-a-n-c-e-pleasure-perspective">T.R.A.N.C.E. (Pleasure/Perspective) by Julia E. Dyck &amp; Diana Duta</a></iframe>


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
background-color: #f171a2;
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
background-color: #f171a2;

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