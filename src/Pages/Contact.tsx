import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import { mediaQueries, sizes } from "../Assets/Style/style";

const ContactForm = styled.form`
    display: grid;
    grid-template: 
        "label-name label-fname" 
        "name fname"
        "label-email label-phone"
        "email phone"
        "label-message ."
        "message message"
        ". ."
        "submit reset";
    gap: .5em 1em;
    padding:${sizes.pagePadding};
    @media ${mediaQueries.mobile} { padding: 0 }
`
function Contact(): ReactElement {
    // used to go at the top of the page after loading
    useEffect( () => {
        window.scrollTo({top:0, behavior:"smooth"});
    }, [])

    return (
        <div style={{padding: sizes.pagePadding, marginTop: sizes.pagePadding}}>
            <h2>Contact Me</h2>

            <ContactForm action="#">
                <label style={{gridArea: "label-name"}} htmlFor="name">Name(*)</label>
                <input style={{gridArea: "name"}} type="text" name="Name:" id="name" required/>
                <label style={{gridArea: "label-fname"}} htmlFor="fName">First name</label>
                <input style={{gridArea: "fname"}} type="text" name="First name" id="fName" />
                <label style={{gridArea: "label-email"}} htmlFor="email">E-mail(*)</label>
                <input style={{gridArea: "email"}} type="email" name="email" id="email" required />
                <label style={{gridArea: "label-phone"}} htmlFor="phone">Phone</label>
                <input style={{gridArea: "phone"}} type="tel" name="phone" id="phone" />
                <label style={{gridArea: "label-message"}} htmlFor="message">Your message(*)</label>
                <textarea style={{gridArea: "message"}} name="message" id="message" cols={30} rows={10} required></textarea>
                <input style={{gridArea: "submit"}} type="submit" value="Send" /><input style={{gridArea: "reset"}} type="reset" value="Reset" />
            </ContactForm>
        </div>
    )
}

export default Contact;