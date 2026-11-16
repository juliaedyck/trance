import styled from "styled-components";
import img from "../images/trance03.12.26.png"
import Listen from "./Listen";
import { NavLink } from "react-router-dom";


const Homepage = ()=> {

    return (
        <Wrapper>
      <BtnWrap><StyledNavLink to= "/about"> <Button>about </Button></StyledNavLink></BtnWrap>

 <Center>
 <Img src= {img}/>
 <RsvpButton as="a" href="https://hipsy.be/event/266529-trance-community-hypnosis" target="_blank" rel="noreferrer">rsvp</RsvpButton>
 </Center>
 <BtnWrap><StyledNavLink to= "/listen"> <Button>listen </Button></StyledNavLink></BtnWrap>

 
        </Wrapper>

    )

}

const Wrapper = styled.div`
min-height:100vh;
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

/* Same look as the about/listen buttons, but it's a link to Hipsy */
const RsvpButton = styled(Button)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
margin: 0;

@media (min-width: 821px) {
margin: 0;
}
`

const Img = styled.img`
max-height: 80vh;
max-width: 100%;
margin-bottom: 20px;
`

/* Image with the ticket widget underneath */
const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
padding-top: 40px;
padding-bottom: 40px;

@media (min-width: 821px) {
width: auto;
flex: 0 1 700px;
}
`

const StyledNavLink = styled(NavLink)`
cursor: pointer;

`;

const BtnWrap = styled.div`



`
export default Homepage;