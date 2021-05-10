import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


import { getLoad, getContactName } from '../../redux/contact/contact-selector';
import contactOperation from '../../redux/contact/contact-operation';
import Loader from '../Loader';

import s from './Form.module.scss';



const INITIAL_STATE = {
    name: '',
    number: '',
}
class ContactForm extends Component {
    state = {
        ...INITIAL_STATE
    }
    componentDidMount() {
        this.props.fetchContact();
    }
    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }
    uniqueContact = name => {
        const contact = !this.props.name.find(contact => contact === name);
        return contact;
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        this.uniqueContact(name);
        if (this.state.name !== '') {
            if (!this.uniqueContact(name)) {
                alert(`'${name} is already in contacts'`);
                return;
            } else {
                this.props.onSubmit(this.state);
                this.resetForm();
            }
            return;
        }
        alert('Enter the name or number');
    }
    resetForm = () => this.setState(INITIAL_STATE)
    render() {
        const { name, number } = this.state;
        return (
            <>
                {this.props.loadContact && <Loader />}
                <h2 className={s.title}>Contact Form</h2>
                <form className={s.contact_form} onSubmit={this.handleFormSubmit}>
                    <input
                        className={s.contact_input}
                        type="text" name='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={this.handleChangeForm} />
                    <input
                        className={s.contact_input}
                        type="tel" name='number'
                        placeholder='Enter phone number'
                        value={number}
                        onChange={this.handleChangeForm} />
                    <button className={s.contact_bth}
                        type='submit'>Add contact</button>
                </form>
            </>
        )
    }
};



const mapStateToProps = state => ({
    loadContact: getLoad(state),
    name: getContactName(state),
});
const mapDispatchToProps = dispatch => ({
    fetchContact: () => dispatch(contactOperation.fetchContact()),
    onSubmit: data => dispatch(contactOperation.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
