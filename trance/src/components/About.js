import styled from "styled-components";
import img from "../images/trance3_dd edit.jpg"
import { NavLink } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";


const About = () => {

    return (
<>
<Background>
<Close>
        <Alink href="/">
          X 
        </Alink>
      </Close>
<Wrapper>
    <h1>Transcendence and Relaxation through Aural and Narrative Community Experience
</h1>
<Des>
A group hypnosis session organised monthly in Brussels by 
<WebLink href= "https://www.juliaedyck.com/" target="blank"> Julia E. Dyck  </WebLink>
 and 
<WebLink href= "https://dianaduta.com/" target="blank"> Diana Duta  </WebLink>
 Diana Duta.
</Des>
<Des>

Hypnosis taps into the power of the trance state in order to create positive change. While this might seem intimidating at first, it is something we have all experienced in one way or another through everyday activities such as meditation, exercise, dancing, making music, sex, etc. 
</Des>
<Des>

The collective aspect of this practice is important, even if each person is on a personal journey in their own mind.

</Des>
<Des>


Julia E. Dyck is an artist, hypnotist and radio producer originally from Treaty One Territory/ Winnipeg who currently works and lives between Brussels and Montreal/Tiohtià:ke. In 2022, she completed a two year training in clinical hypnotherapy under National Hypnosis Guild certified mentor, Andrea Iya Young.
</Des>
<Des>

Diana Duta’s research explores the voice and sound as both objects of theoretical reflection and cultural practices. In 2023, she received a training in Sound therapy from the Institut Français de Sonothérapie at the Abbaye de Valsaintes, France.


    </Des>
<Img src= {img}/>
</Wrapper>
</Background>
</>


    )

}

const Img = styled.img`
max-width: 90%;
height: auto;
margin-bottom: 3%;
margin-top: 3%;

@media (min-width: 768px) {
    max-height: 500px;
    width: auto;



  }

`

const Wrapper = styled.div`

display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
font-family: "Sonsie One";
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  margin-bottom: 5%;


  @media (min-width: 768px) {
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;

  }

`
const Background = styled.div`
height: 100vh;
width: 100%;
background-color: white;

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
const Des = styled.p`
  font-family: var(--font-body);
  font-size: 18px;
  margin-top: 2%;

  @media (min-width: 768px) {
    font-size: 16px;


  }
`;

const WebLink = styled.a`
color: black;`

export default About;