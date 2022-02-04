import { ReactElement, useEffect } from "react";

// style
import styled from "styled-components";
import { colours, mediaQueries, sizes } from "../Assets/Style/style";
import { pageLoadAnimation } from "../Assets/Style/styled-components";

// styled components
const ContactFormContainer = styled.div`
    ${pageLoadAnimation}
    padding: ${sizes.pagePadding};
    margin-top: ${sizes.pageMarginTop};
    @media ${mediaQueries.mobile} { 
        padding: .5em;
        margin-top: 0;
    }
`
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
    @media ${mediaQueries.mobile} { 
        padding: 0; 
        gap: .5em
    }
`
const sharedStyle = `
    border: ${colours.ultraViolet} 1px solid;
    border-radius: 5px;
    &:focus-visible {
        outline: solid 3px ${colours.ultraViolet};
    }
`
const FormButton = styled.input`
    background: none;
    ${sharedStyle}
    color: ${colours.ultraViolet};
    font-weight: bold;
    padding: 0.5em 0;
    width: 15em;
    justify-self: center;
    &:hover { 
        cursor: pointer; 
        background: ${colours.ultraViolet};
        color: ${colours.black};
    }
    @media ${mediaQueries.mobile} { width: 10em }
`
const FormInput = styled.input` ${sharedStyle} `
const FormTextArea = styled.textarea` ${sharedStyle} `

function Contact(): ReactElement {
    // used to go at the top of the page after loading
    useEffect(() => { window.scroll({top:0}); }, [])

    return (
        <ContactFormContainer>
            <h2>Contact Me</h2>

            <ContactForm action="#">
                <label style={{gridArea: "label-name"}} htmlFor="name">Name(*)</label>
                <FormInput style={{gridArea: "name"}} type="text" name="Name:" id="name" required/>
                <label style={{gridArea: "label-fname"}} htmlFor="fName">First name</label>
                <FormInput style={{gridArea: "fname"}} type="text" name="First name" id="fName" />
                <label style={{gridArea: "label-email"}} htmlFor="email">E-mail(*)</label>
                <FormInput style={{gridArea: "email"}} type="email" name="email" id="email" required />
                <label style={{gridArea: "label-phone"}} htmlFor="phone">Phone</label>
                <FormInput style={{gridArea: "phone"}} type="tel" name="phone" id="phone" />
                <label style={{gridArea: "label-message"}} htmlFor="message">Your message(*)</label>
                <FormTextArea style={{gridArea: "message"}} name="message" id="message" cols={30} rows={10} required></FormTextArea>
                <FormButton style={{gridArea: "submit"}} type="submit" value="Send" /><FormButton style={{gridArea: "reset"}} type="reset" value="Reset" />
            </ContactForm>
        </ContactFormContainer>
    )
}

export default Contact;