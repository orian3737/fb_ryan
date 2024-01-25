import React from 'react';
import '../css/contact.css';

 

const Contact = () => (
  <div className='contact'>
    <div className="totalPage">
    <img className='contactLogo' src="LLlogo.jpg" alt='LL-logo'></img>
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


              {/* Additional information or form can be added here */}
            </section>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="column">
        <div className="card">
    <div className="form">
      <h2>Form</h2>
   <form className='form2'>
        <label>Form</label>
    <div className="inputbox">
          <input 
          type='text'
          required
          className='form3'
          />
    </div>


                  <div className="formbody">
                    <label>Form Body</label>
                  <textarea required className='textarea'></textarea>
                    <label>Form Author</label>
                      <select className='checkbox'>
                        <option value="User">User</option>
                        <option value="New User">New User</option>
                      </select>
               
                    </div>
                  <button>Submit</button>
    </form>
            </div>
          </div>
        </div>
       </div>
       <img src='images/students.jpg' alt='students' className='studentsjpg'></img>
    </div>
  </div>
);

export default Contact;
 