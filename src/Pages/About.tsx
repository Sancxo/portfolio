import styled from "styled-components";
import Profile from "../Assets/Imgs/hero_img.JPG";

const ProfilePicture = styled.img`
    border-radius: 100vw;
    object-fit: cover;
    float: left;
`
function About() {
    return (
        <div>
            <h1>About Me</h1>
            <ProfilePicture src={Profile} alt="Profile" width={"250em"} height={"250em"} />
            <p>In fall 2019, after working as a grocery store manager in organic shops, I decided to begin a career change in IT and web development. First, I had to update my knowledge since I was used to create static websites in HTML 4 and CSS 2.1 when I was 15. These technologies where suitable enough to display my heavy metal band website on those 2000's heavy greyish computer monitors, but 'Hey Boomer, we have iPhones now !'.</p>
            <p>So responsivity <i>oblige</i>, I started to absorb new things by myself : HTML 4, CSS 3, vanilla JavaScript ice cream and bits of Python (yummy!). Then, in 2020, I was chosen to integrate a one year fulltime fullstack training class where I went further in the matrix: Bootstrap and jQuery for the front, PHP and MySQL for the back, REST API for the CRUD, WordPress for the LOL.</p>
            <p>I also did a 2 and half month work placement during this training; 7 Lieues Technologies brought me new items to add to my fullstack arsenal: Angular and TypeScript frontend, GraphQL API and </p>
        </div>
    );
};

export default About;