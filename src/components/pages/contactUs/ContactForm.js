import React, { Component } from 'react';
import axios from 'axios';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: ""
        }
      }
      resetForm(){
          this.setState({name: ""})
          this.setState({email: ""})
          this.setState({subject: ""})
          this.setState({message: ""})
      }

      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
      onSubjectChange(event){
        this.setState({subject: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
      handleSubmit(e){
        e.preventDefault();
    
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }
    render() { 
        return ( 
            <form id="contact_form" onSubmit={this.handleSubmit.bind(this)} className="contact-form" method="post">
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
                onChange={this.onNameChange.bind(this)}
                required
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
                aria-describedby="emailHelp" 
                value={this.state.email} 
                onChange={this.onEmailChange.bind(this)}
                required
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
                onChange={this.onSubjectChange.bind(this)}
                required
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
                onChange={this.onMessageChange.bind(this)}
                required
              ></textarea>
            </label>
          </li>
          <li className="col-sm-12">
            <button
              type="submit"
              value="submit"
              className="btn btn-1"
              id="btn_submit"
            >
              Send Message <i className="fa fa-caret-right"></i>
            </button>
          </li>
        </ul>
        <div>
          
        </div>
      </form>
         );
    }
}
 
export default ContactForm;