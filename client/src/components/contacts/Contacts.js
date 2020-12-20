import React, {Fragment, useContext, useEffect} from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContexts'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const {contacts, filtered, getContact, loading} = contactContext
    useEffect(()=>{
        getContact();
        //eslint-disable-next-line
    },[])

    if(contacts == null || contacts.length === 0){
        return <h4>Please add a contact</h4>
    }
    return (
        <Fragment>
            {filtered !== null ? filtered.map(contact => (
                <ContactItem key={contact._id} contact={contact}/>
            ))
            : contacts.map(contact => (
            <ContactItem key={contact._id} contact={contact}/>
            ))}
        </Fragment>
    )
}

export default Contacts