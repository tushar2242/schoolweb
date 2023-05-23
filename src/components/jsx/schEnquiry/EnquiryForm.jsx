import React from "react";

export default class EnquiryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: false,
            contact: '',
            email: '',
            emailError: false,
            emailError2: false,
            message: '',
            messageError: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    }

    // isValidcontact(contactno) {
    //   return /^[6-9]\d{9}$/.test(contactno);
    // }  

    handleBlur(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });

        if (value.length <= 0 && (name === 'name')) {
            this.setState({ nameError: true });
        } else {
            this.setState({ nameError: false });
        }

        if (value.length <= 0 && (name === 'email')) {
            this.setState({ emailError: true });
            this.setState({ emailError2: false });
        } else {
            this.setState({ emailError: false });
            if (this.isValidEmail(value)) {
                this.setState({ emailError2: false });
            } else {
                this.setState({ emailError2: true });
            }
        }

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        const { name, email, message, nameError, emailError, emailError2, messageError } = this.state;

        this.setState({ nameError: name ? false : true });
        this.setState({ messageError: message ? false : true });
        this.setState({ emailError: email ? false : true });
        if (email && !emailError) { this.setState({ emailError2: this.isValidEmail(email) ? false : true }); }


        if (name && email && message && !nameError && !emailError && !emailError2 && !messageError) {
            this.setState({ formValid: true });
        } else {
            this.setState({ formValid: false });
        }

        e.preventDefault();
    }

    render() {

        const { name, email, message,contact, nameError, emailError, emailError2, messageError, formValid } = this.state;

        if (!formValid) {

            return (
                <>
                    <div className="enquryCard shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
                        <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>{this.props.title}</h3></div>
                        <div className="card-body">
                            <form action="/" onSubmit={(e) => this.handleSubmit(e)} encType="multipart/form-data" autoComplete="off">
                                <div className="form-group">
                                    <label className="mb-0">Your name<span className="text-danger">*</span></label>
                                    <input name="name" type="text" className="form-control" placeholder="Name" value={name} onChange={this.handleChange} onBlur={this.handleBlur} />
                                    {nameError
                                        ? <div className="alert alert-danger mt-2">Name is a required field.</div>
                                        : ''
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Your email<span className="text-danger">*</span></label>
                                    <input name="email" type="email" className="form-control" placeholder="Email" value={email} onChange={this.handleChange} onBlur={this.handleBlur} />
                                    {emailError
                                        ? <div className="alert alert-danger">Email is a required field.</div>
                                        : ''
                                    }
                                    {emailError2
                                        ? <div className="alert alert-danger">Email invalid.</div>
                                        : ''
                                    }
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Your contact number (Optional)</label>
                                    <input name="contact" type="text" className="form-control" placeholder="Contact" onChange={this.handleChange} value={contact} />
                                </div>
                                <div className="form-group">
                                    <label className="mb-0">Message<span className="text-danger">*</span></label>
                                    <textarea name="message" type="text" className="form-control" placeholder="Message" value={message} onChange={this.handleChange} onBlur={this.handleBlur} />
                                    {messageError
                                        ? <div className="alert alert-danger mt-2">Message is a required field.</div>
                                        : ''
                                    }
                                </div>
                                <br />
                                <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit Now" /></p>
                            </form>

                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div className="thankyou_details">
                    <div className="alert alert-success mt-3">Mail sent successfully.</div>
                </div>
            )
        }
    }
}


