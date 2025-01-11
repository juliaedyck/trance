import styled from "styled-components";
import img from "../images/hypno poster 19.01.25.jpg"
import Listen from "./Listen";
import { NavLink } from "react-router-dom";


const Homepage = ()=> {

    return (
        <Wrapper>
      <BtnWrap><StyledNavLink to= "/about"> <Button>about </Button></StyledNavLink></BtnWrap>

 <Img src= {img}/>
 <BtnWrap><StyledNavLink to= "/listen"> <Button>listen </Button></StyledNavLink></BtnWrap>

 
        </Wrapper>

    )

}

const Wrapper = styled.div`
height:100vh;
max-width: 100%;
display:flex;
flex-direction: column; 
justify-content:center;
align-items: center;
background-color: var(--background-color);
font-family: "Sonsie One";


@media (min-width: 821px) {
    display:flex;
    flex-direction: row;
justify-content:center;
align-items: center;
}
`
const Button = styled.button`
font-family: "Sonsie One";
color: var(--background-color);
background-color: white;
border:0px;
border-radius: 3%;
width: 100%;
height: 50px;
margin-top: 7%;
margin-bottom: 7%;
font-size: 20px;
cursor:pointer;



@media (min-width: 821px) {
width: 100px;
height: 50px;
border-radius: 3%;
margin: 50px;

}
`

const Img = styled.img`
max-height: 80%;
max-width: 90%;

`

const StyledNavLink = styled(NavLink)`
cursor: pointer;

`;

const BtnWrap = styled.div`



`
export default Homepage;