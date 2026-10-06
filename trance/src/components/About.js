import styled from "styled-components";
import img from "../images/trance3_dd edit.jpg"
import photo1 from "../images/9R4A8724.jpg"
import photo2 from "../images/P1250371thangible.jpg"
import photo3 from "../images/group_4.jpg"
import photo4 from "../images/materiel-appui_dyck-julia-4.jpg"
import { NavLink } from "react-router-dom";
import CloseButton from "react-bootstrap/CloseButton";
import { Email } from "./Email";

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
<Title>Transcendence and Relaxation through Aural and Narrative Community Experience</Title>
<Intro>
A group hypnosis session organised monthly in Brussels by{" "}
<WebLink href="https://www.juliaedyck.com/" target="blank">Julia E. Dyck</WebLink>
{" "}and{" "}
<WebLink href="https://dianaduta.com/" target="blank">Diana Duta</WebLink>
</Intro>

<Section>
<Des>
t.r.a.n.c.e is an ongoing collaborative project by hypnotherapist and artist Julia E. Dyck and sound artist Diana Duta, exploring the hypnotic trance state as a collective, transformative experience. Combining live soundscapes, storytelling, and guided meditation, the sessions create a space for metaphoric, somatic, and sensory exploration through the subconscious.
</Des>
</Section>
<Email/>
<Img src= {img}/>
<Section>
<Heading>The Session</Heading>
<Des>
Each session lasts approximately 90 minutes, divided into three parts:
</Des>
<Steps>
<li>
<StepTitle>Welcome &amp; Orientation</StepTitle>
<Des>Participants are invited to lie down or sit comfortably (blankets provided in colder months).</Des>
<Des>Julia introduces the core principles of the session:</Des>
<Bullets>
<li>This is a safe, inclusive, and voluntary space.</li>
<li>Emotions are welcome; support is available afterward if needed.</li>
<li>Participants are fully in control of their experience at all times.</li>
</Bullets>
<Des>An optional round where participants may share their names and intentions.</Des>
</li>

<li>
<StepTitle>Hypnosis &amp; Sound Journey (~45 minutes)</StepTitle>
<Des>Julia guides the session using metaphor and visualization.</Des>
<Des>Diana layers a live ambient soundscape, responding in real time to the flow of the narrative.</Des>
</li>
<li>
<StepTitle>Integration &amp; Sharing (15–30 minutes)</StepTitle>
<Des>Space for reflection, conversation, tea, and sometimes sensory tasting.</Des>
<Des>Shared impressions often inform the next session’s theme</Des>
</li>
</Steps>
</Section>

<Section>
<Heading>Past Journeys</Heading>
<Des>
Each session is unique. Past journeys include:
</Des>
<Bullets>
<li>Becoming a seapunk creature to explore emotional fluidity.</li>
<li>Entering the quantum field of infinite possibility.</li>
<li>Taking a train to visit former versions of the self.</li>
<li>Looking through the eyes of an insect to access regeneration and hope.</li>
<li>An autumn equinox descent to the center of the earth for grounding and balance.</li>
</Bullets>
</Section>

<Gallery>
<Photo src={photo1} alt="A performer holding a drum stands among participants lying on cushions in a warmly lit room" />
<Photo src={photo2} alt="Two performers in blue and purple light, one speaking into a microphone beside candles and singing bowls" />
<Photo src={photo3} alt="A performer sits cross-legged at a microphone surrounded by candles and tuning forks while participants rest" />
<Photo src={photo4} alt="Participants relax on cushions in a bright room with tall windows" />
</Gallery>

<Section>
<Heading>Who It’s For</Heading>
<Des>
The sessions are open to all—no previous experience with hypnosis or meditation is required. Participants only need curiosity and a willingness to be present with themselves.
</Des>
<Des>
Benefits include:
</Des>
<Bullets>
<li>Access deeper layers of imagination, intuition, and emotional awareness</li>
<li>Develop self-trust, focus, and creative insight</li>
<li>Gently rewire limiting beliefs through metaphor and suggestion</li>
<li>Cultivate community through shared inner journeys</li>
</Bullets>
</Section>

<Section>
<Heading>The Artists</Heading>
<Bios>
<Des>
Julia E. Dyck is an artist, hypnotist and radio producer originally from Treaty One Territory/ Winnipeg who currently works and lives between Brussels and Montreal/Tiohtià:ke. In 2022, she completed a two year training in clinical hypnotherapy under National Hypnosis Guild certified mentor, Andrea Iya Young.
</Des>
<Des>
Diana Duta’s research explores the voice and sound as both objects of theoretical reflection and cultural practices. In 2023, she received a training in Sound therapy from the Institut Français de Sonothérapie at the Abbaye de Valsaintes, France.
</Des>
</Bios>
</Section>

<Section>
<Heading>Support</Heading>
<Bullets>
<li>Debut LP released in September 2025 with BBJTC Records (Hamburg)</li>
<li>Funded by Fédération Wallonie-Bruxelles</li>
<li>Hosted by / supported by: Artist Commons, Zinneke, Semaine du Son, Betonsalon, La Fonderie, Radiophrenia, Chapelle du Grand Hospice</li>
</Bullets>
</Section>


</Wrapper>
</Background>

</>


    )

}

const Img = styled.img`
max-width: 90%;
height: auto;
margin-bottom: 3%;


@media (min-width: 768px) {
    max-height: 500px;
    width: auto;
  }

`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: "Sonsie One";
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
  margin-bottom: 5%;
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

const Title = styled.h1`
  max-width: 800px;
  text-align: center;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Intro = styled.p`
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
`;

/* One readable column for all the body text */
const Section = styled.section`
  width: 100%;
  max-width: 680px;
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const Heading = styled.h2`
  font-family: var(--font-heading);
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

const Des = styled.p`
  margin-bottom: 12px;
`;

/* The CSS reset strips list markers, so add them back */
const Bullets = styled.ul`
  list-style: disc;
  padding-left: 1.5em;
  margin-bottom: 12px;

  li {
    margin-bottom: 6px;
  }
`;

const Steps = styled.ol`
  list-style: decimal;
  padding-left: 1.5em;

  > li {
    margin-bottom: 20px;
  }

  > li::marker {
    font-weight: bold;
  }

  ${Des} {
    margin-bottom: 6px;
  }
`;

const StepTitle = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const Gallery = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  gap: 12px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  display: block;
`;

const Bios = styled.div`
  display: grid;
  gap: 8px 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const WebLink = styled.a`
color: black;
`

export default About;
