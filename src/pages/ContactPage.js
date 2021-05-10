import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from "../Components/ContactForm";
import ContactList from "../Components/ContatctList";
import Filter from "../Components/Filter";
import Loader from '../Components/Loader';
import contactOperation from '../redux/contact/contact-operation';
import { getContactName, getLoad } from '../redux/contact/contact-selector';


const ContactPage = () => {
    return (
        <>
            <ContactForm />
            <Filter />
            <ContactList />
        </>
    )
}
// class ContactPage extends Component {
//     componentDidMount() {
//         console.log(this.props, 'her')
//         this.props.fetchContact();
//     }
//     render() {
//         return (
//             <>
//                 {this.props.loadContact && <Loader />}
//                 <ContactForm />
//                 <Filter />
//                 <ContactList />
//             </>
//         )
//     }
// }
// const mapStateToProps = state => ({
//     loadContact: getLoad(state)
// });
// const mapDispatchToProps = dispatch => ({
//     fetchContact: () => dispatch(contactOperation.fetchContact())
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
export default ContactPage;
