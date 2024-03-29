import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import Profile from "../Assets/Imgs/simon_tirant_img.JPG";

// icon imports
import elixirIcon from "../Assets/Imgs/icons/elixir.png";
import phoenixIcon from "../Assets/Imgs/icons/phoenix.png";
import tsIcon from "../Assets/Imgs/icons/typescript.png";
import nodeIcon from "../Assets/Imgs/icons/node.png";
import reactIcon from "../Assets/Imgs/icons/react.png";
import angularIcon from "../Assets/Imgs/icons/angular.png";

// style
import { mediaQueries, sizes } from "../Assets/Style/style";
import { pageLoadAnimation } from "../Assets/Style/styled-components";

// styled components
const AboutContainer = styled.div`
    ${pageLoadAnimation}
    margin-top: ${sizes.pageMarginTop};
    padding: ${sizes.pagePadding};
    @media ${mediaQueries.mobile} { margin-top: 0; }
`
const SummaryContainer= styled.div`
    text-align: justify;
    @media ${mediaQueries.mobile} {
        text-align: center;
        & :not(:first-child) { text-align: justify; }
    }
`
const ProfilePicture = styled.img`
    border-radius: 100vw;
    object-fit: cover;
    float: left;
    margin: auto 2em 1em 2em;
    @media ${mediaQueries.mobile} {
        width: 100%;
        margin: auto 0 3em 0;
        border-radius: 0;
        float: none;
    }
`
const Icon = styled.a`
    margin: auto 1em;
    & img {
        height: 8em;
        transition: transform 300ms ease-in-out;
        @media ${mediaQueries.mobile} {
            height: 4em;
        }
    }
    & img:hover { transform: scale(1.5); }
`

function About(): ReactElement {
    // used to go at the top of the page after loading
    useEffect( () => { window.scroll({top:0}); }, [])

    return (
        <AboutContainer>
            <div style={{textAlign: "center", marginBottom: sizes.pageMarginTop}}>
                <p>My favourite technologies:</p>
                <Icon href="https://elixir-lang.org/" target="_blank" rel="noreferrer" title="Elixir website"><img src={elixirIcon} alt="Elixir icon"/></Icon>
                <Icon href="https://www.phoenixframework.org/" target="_blank" rel="noreferrer" title="Phoenix website"><img src={phoenixIcon} alt="Phoenix icon"/></Icon>
                <Icon href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title="TypeScript website"><img src={tsIcon} alt="TypeScript icon"/></Icon>
                <Icon href="https://reactjs.org/" target="_blank" rel="noreferrer" title="Node website"><img src={nodeIcon} alt="Node icon"/></Icon>
                <Icon href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React website"><img src={reactIcon} alt="React icon"/></Icon>
                <Icon href="https://angular.io/" target="_blank" rel="noreferrer" title="Angular website"><img src={angularIcon} alt="Angular icon"/></Icon>
            </div>

            <SummaryContainer>
                <ProfilePicture src={Profile} title="Simon Tirant picture" alt="Picture of Simon Tirant" width={"250em"} height={"250em"} />
                <h2>About Me:</h2>
                <p>In fall 2019, after working as a grocery store manager in organic shops, I decided to begin a career change in IT and web development. First, I had to update my knowledge since I was used to create static websites in <strong><code>HTML</code></strong> 4 and <strong><code>CSS</code></strong> 2.1 when I was 15. These technologies where suitable enough to display my heavy metal band website on those 2000's heavy greyish computer monitors, but '<i>Hey Boomer, we have iPhones now !</i>'.</p>
                <p>So <strong><code>responsivity</code></strong> <i>oblige</i>, I started to absorb new things by myself : HTML 5, CSS 3, vanilla <strong><code>JavaScript</code></strong> ice cream and bits of <code><strong>Python</strong></code> (<i>yummy</i>!). Then, in 2020, I was chosen to integrate a one year fulltime full-stack training class at the <a href="https://www.greta-92.fr/1-accueil" target="_blank" rel="noreferrer" title="GRETA des Hauts-de-Seine"><code>GRETA des Hauts-de-Seine</code></a>, where I went further in the matrix: <code><strong>Bootstrap</strong></code> and <code><strong>jQuery</strong></code> for the front, <code><strong>PHP</strong></code> and <code><strong>SQL</strong></code> for the back, <code><strong>REST API</strong></code> for the CRUD, <code><strong>WordPress</strong></code> for the money.</p>
                <p>I also did a 2 and half months work placement during this training; <a href="https://7lieues.io/fr/accueil/" target="_blank" rel="noreferrer" title="7 Lieues Technologies"><code>7 Lieues Technologies</code></a> brought me new items to add to my full-stack arsenal: <code><strong>Angular</strong></code> and <code><strong>TypeScript</strong></code> frontend, <code><strong>GraphQL API</strong></code> and - last but not least 😍 - the <code><strong>Elixir</strong></code> back-end language and his <code><strong>Phoenix</strong></code> framework !</p>
                <p>Nowadays I am still working at <a href="https://7lieues.io/fr/accueil/" target="_blank" rel="noreferrer" title="7 Lieues Technologies"><code>7 Lieues Technologies</code></a>, but as an apprentice since I started my 2 years full-stack training class at <a href="https://openclassrooms.com" target="_blank" rel="noreferrer" title="OpenClassrooms"><code>OpenClassrooms</code></a>, where I am learning <code><strong>React</strong></code>, <code><strong>UML</strong></code>, <code><strong>Ruby</strong></code> and <code><strong>Ruby on Rails</strong></code>; while being 4 days a week in the professional field.</p>
            </SummaryContainer>
            
            <div style={{marginTop: sizes.pageMarginTop}}>
                <h2>Certifications:</h2>
                <ul>
                    <li>2021 - 2023: OpenClassrooms - Full-stack Developer (eq. Bachelor / Master's degree).</li>
                    <li>2020 - 2021: GRETA des Hauts-de-Seine - Web and Mobile Web Developper Professional Qualification (eq. BTEC Higher National Diploma).</li>
                </ul>
            </div>
        </AboutContainer>
    );
};

export default About;