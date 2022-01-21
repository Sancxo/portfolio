import styled from "styled-components";

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
`
function Contact() {
    return (
        <div>
            <h2>Contact Me</h2>

            <ContactForm action="#">
                <label htmlFor="name">Name(*)</label>
                <input type="text" name="Name:" id="name" required/>
                <label htmlFor="fName">First name</label>
                <input type="text" name="First name" id="fName" />
                <label htmlFor="email">E-mail(*)</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" />
                <label htmlFor="message">Your message(*)</label>
                <textarea name="message" id="message" cols={30} rows={10} required></textarea>
            </ContactForm>
        </div>
    )
}

export default Contact;