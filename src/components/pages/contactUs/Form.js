import React, { Component } from "react";
import axios from "axios";
const API_PATH = "http://localhost:3000/api/index.php";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      mailSent: false,
      error: null
    };
  }
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };
  render() {
    return (
      <form action="#" id="contact_form" className="contact-form" method="post">
        <ul className="row">
          <li className="col-sm-12">
            <label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </label>
          </li>
          <li className="col-sm-12">
            <label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </label>
          </li>
          <li className="col-sm-12">
            <label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={this.state.subject}
                onChange={e => this.setState({ subject: e.target.value })}
              />
            </label>
          </li>
          <li className="col-sm-12">
            <label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              ></textarea>
            </label>
          </li>
          <li className="col-sm-12">
            <button
              type="submit"
              value="submit"
              className="btn btn-1"
              id="btn_submit"
              onClick={e => this.handleFormSubmit(e)}
            >
              Send Message <i className="fa fa-caret-right"></i>
            </button>
          </li>
        </ul>
        <div>
          {this.state.mailSent && <div>Thank you for contcting us.</div>}
        </div>
      </form>
    );
  }
}

export default ContactForm;
