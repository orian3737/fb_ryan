import { React, useState } from 'react';
import '../css/contact.css';



const Contact = () => {
  const [formTitle, setFormTitle] = useState('');
  const [formBody, setFormBody] = useState('');
  const [formAuthor, setFormAuthor] = useState('User');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    console.log('Submitted', { formTitle, formBody, formAuthor });
  
  };
  return (
    <div className='contact'>
      <div className="totalPage">
        <img className='contactLogo' src= "images/2-31.jpg" alt='LL-logo'></img>
        <h1 className='flexih1'>Lightning Learn & Flexi Solutions</h1>
        <div className="row">
          <div className="column">
            <div className="card">
              {/* Contact Information Section */}
              <section>
                <h2>Contact Information:</h2>
                <p>For inquiries, assistance, or collaboration opportunities, please reach out to us via email at:</p>

                {/* Email */}
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:flexisolutions.augda@gmail.com">flexisolutions.augda@gmail.com</a>
                </p>

                <p>
                  <strong>Address:</strong>{' '}

                </p>
                <p>3358 W Charlene St, Meridian, ID 83641 </p>


                
              </section>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="form">
                <h2>Email</h2>
                <form className='form2' onSubmit={handleSubmit}>
                  <label>Email</label>
                  <div className="inputbox">
                    {/*handle email state*/}
                    <input
                      type='text'
                      required
                      className='form3'
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                    />
                  </div>
                  <div className="formbody">
                    {/*handle email content*/}
                    <label>Inquiry</label>
                    <textarea
                      required
                      className='textarea'
                      value={formBody}
                      onChange={(e) => setFormBody(e.target.value)}
                    ></textarea>
                    <label>A little bit about yourself</label>
                    <select
                      className='checkbox'
                      value={formAuthor}
                      onChange={(e) => setFormAuthor(e.target.value)}
                    >
                      <option value="User">User</option>
                      <option value="New User">New User</option>
                    </select>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img src='images/students.jpg' alt='students' className='studentsjpg'></img>
      </div>
    </div>
  );
}

export default Contact;
