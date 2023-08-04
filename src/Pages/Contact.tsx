import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import axios from 'axios';

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
    @media ${mediaQueries.mobileLandscape} { 
        padding: 0; 
        gap: .5em;
        grid-template: 
            "label-name ." 
            "name name"
            "label-fname ." 
            "fname fname"
            "label-email ."
            "email email"
            "label-phone ."
            "phone phone"
            "label-message ."
            "message message"
            ". ."
            "submit reset";
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
const FormInput = styled.input` ${sharedStyle} `;
const FormTextArea = styled.textarea` ${sharedStyle} `;

function Contact(): ReactElement {
    // use state to handle the form
    const [formData, setFormData] = useState({
        "name": "",
        "fName": "",
        "email": "",
        "phone": "",
        "message": ""
    });
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [error, setError]: [any, Dispatch<SetStateAction<any>>] = useState("");

    // used to go at the top of the page after loading
    useEffect(() => { window.scroll({ top: 0 }); }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) {
        setFormData({ ...formData, [field]: e.target.value });
    }

    function handleFormSubmit(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        e.preventDefault();
        axios.post(process.env.REACT_APP_CONTACT_PATH!, formData)
            .then(res => {
                const json = JSON.parse(res.data.replace("Array", ""))
                if (json.sent) {
                    setIsMessageSent(true);
                    setError(false);
                } else {
                    setIsMessageSent(false);
                    setError(json.message);
                };
            })
            .catch(err => {
                setIsMessageSent(false);
                setError(err.message);
            });
    }

    return (
        <ContactFormContainer>
            <h2 style={{ marginBottom: "0" }}>Contact Me</h2>

            <p style={{ marginTop: "0" }}><sub>(*) = Required</sub></p>
            <ContactForm>
                <label style={{ gridArea: "label-name" }} htmlFor="name">Name(*)</label>
                <FormInput
                    style={{ gridArea: "name" }}
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={e => handleChange(e, "name")}
                    required
                />
                <label style={{ gridArea: "label-fname" }} htmlFor="fName">First name</label>
                <FormInput
                    style={{ gridArea: "fname" }}
                    type="text"
                    name="First name"
                    id="fName"
                    value={formData.fName}
                    onChange={e => handleChange(e, "fName")}
                />

                <label style={{ gridArea: "label-email" }} htmlFor="email">E-mail(*)</label>
                <FormInput
                    style={{ gridArea: "email" }}
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={e => handleChange(e, "email")}
                    required
                />
                <label style={{ gridArea: "label-phone" }} htmlFor="phone">Phone</label>
                <FormInput
                    style={{ gridArea: "phone" }}
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={e => handleChange(e, "phone")}
                />

                <label style={{ gridArea: "label-message" }} htmlFor="message">Your message(*)</label>
                <FormTextArea
                    style={{ gridArea: "message" }}
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={e => handleChange(e, "message")}
                    cols={30}
                    rows={10}
                    required>
                </FormTextArea>
                <FormButton
                    style={{ gridArea: "submit" }}
                    type="submit"
                    value="Send"
                    onClick={e => handleFormSubmit(e)}
                />
                <FormButton
                    style={{ gridArea: "reset" }}
                    type="reset"
                    value="Reset"
                />
            </ContactForm>
            {isMessageSent && <p style={{ color: colours.neonGreen }}>Thank you for contacting me, your message has been succesfully sent !</p>}
            {error && <p style={{ color: colours.neonFuchsia }}>An error occurred ! Please try again later or contact me at simon.tirant@gmail.com</p>}
        </ContactFormContainer>
    )
}

export default Contact;