import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import LinkButton from './LinkButton';
import '../css/ResponseForm.css';
import "bootstrap/dist/css/bootstrap.min.css";

const ResponseForm = (props) => {
  console.log(props)
  const { email } = useParams();

  let history = useHistory();

  const backToDashboard = () => {
    history.push('/dashboard');
  }

  const [inputs, setInputs] = useState({name: '', email, subject: '', message: ''})

  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    const {name,email,subject,message} = inputs;

    axios.post('http://localhost:3005/send', {
      name,
      email,
      subject,
      message
    }).then((response) => {
          if (response.data.status === 'success') {
            alert("Message Sent.");
            resetForm();
            backToDashboard();
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.");
          }
        });
  }

  const resetForm = () => {
    setInputs({name: '', email: '', subject: '', message: ''})
  };

 
  return (
    <div className="row">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Issue Reponse Form</h2>
                <hr />
                <form id="contact-form" onSubmit={handleSubmit}
                  method="POST">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <input placeholder="Name" name="name" type="text"
                          className="form-control" required value={inputs.name}
                          onChange={handleChange} />
                      </div>
                      <div className="col-md-6">
                        <input placeholder="Email" name="email" type="email"
                          className="form-control" aria-describedby="emailHelp"
                          required value={email} onChange=
                          {handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input placeholder="Subject" name="subject" type="text"
                      className="form-control" required value={inputs.subject}
                      onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message" name="message"
                      className="form-control" rows="10"
                      required value={inputs.message}
                      onChange={handleChange} />
                  </div>
                  <button type="submit" id="send-btn" className="primary-btn submit">Send</button>
                  <LinkButton to="/dashboard" id="cancel-btn" className="primary-btn">Cancel</LinkButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResponseForm;