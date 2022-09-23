import './contact.css'
const ContactCard = ({ contact }) => {
    return (
        <article className='contact__option'>
            {<contact.icon className="contact__option-icon"/>}
            <h4>{contact.type}</h4>
            <h5>{contact.detail}</h5>
            <a href={contact.action}>Send a message</a>
        </article>
    )
}
export default ContactCard