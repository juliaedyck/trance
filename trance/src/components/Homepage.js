import styled from "styled-components";
import img from "../images/hypno poster 15.10.23_.jpg"

const Homepage = ()=> {

    return (
        <Wrapper>
 <Img src= {img}/>
        </Wrapper>
    )

}

const Wrapper = styled.div`
height:100vh;
max-width: 100%;
display:flex;
justify-content:center;
align-items: center;

`

const Img = styled.img`

max-width:100%;
max-height: 100vh;


`
export default Homepage;