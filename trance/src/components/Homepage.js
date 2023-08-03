import styled from "styled-components";
import img from "../images/hypno poster 29.06.23.jpg"

const Homepage = ()=> {

    return (
        <Wrapper>
 <Img src= {img}/>
        </Wrapper>
    )

}

const Wrapper = styled.div`
max-height:100vh;
max-width: 100%;
display:flex;
justify-content:center;

`

const Img = styled.img`

max-width:100%;
max-height: 100vh;


`
export default Homepage;