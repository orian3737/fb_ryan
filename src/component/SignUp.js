import React, { useState, useEffect } from 'react';
import '../css/Sign-up.css';

const SignUp = () => {
  const [leftBoxColor, setLeftBoxColor] = useState('blue');
  const [agreedToTerms, /*setAgreedToTerms*/] = useState([false, false, false]);

  useEffect(() => {
    // Update box color every 5 seconds
    const interval = setInterval(() => {
      setLeftBoxColor((prevColor) => (prevColor === 'blue' ? 'yellow' : 'blue'));
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

 /* const handleCheckboxChange = (e) => {
    setAgreedToTerms((prev) => {
        const index = parseInt(e.target.className);
        return { ...prev, [index]: !prev[index] };
    });
};*/


  const handleCheckoutClick = (link) => {
    if (agreedToTerms[0] || agreedToTerms[1] || agreedToTerms[2]) {
      // Navigate to the specified link
      window.location.href = link;
    } else {
      alert('Please read and agree to the terms and conditions before proceeding to checkout.');
    }
  };

  return (
    <div className="header2">
      <img src='images/signupjpg.jpg' alt='space' className='student'/>
    <div className='signup-container'>
      <h1 className="signup">Sign Up</h1>
      {/* <h2>Pre-Purchase the Beta Version</h2> */}
      <h2 className='banner'>
          Secure your spot now, only{' '}
          <span style={{ color:"aqua",backgroundColor: leftBoxColor, padding: '2px 5px', borderRadius: '5px' }}>27</span> spots left to
          take advantage of this exclusive offer!
      </h2>
      </div>
      <div className="app">
        {/* Left Plan */}
        <div className="left-rectangle">
          <h2>One-Time Offer</h2>
          <p>$1.99 / student / month</p>
          <ul>
            <li>Lock in the price forever</li>
            <li>Before Release of Production Version:</li>
            <ul>
              <li>Free access to all test pages/test games</li>
            </ul>
            <li>After Release of Production Version:</li>
            <ul>
              <li>Unlimited lifetime access to the basic plan of the website with the price never to go up</li>
            </ul>
          </ul>
          <div className='check-out'>
      
            <button
              onClick={() =>
                handleCheckoutClick('https://buy.stripe.com/bIYg0f5KXew068E001')
              }
            >
              Checkout
            </button>
          </div>
        </div>
          {/* Right Plan */}
          <div className="right-rectangle">
            <h2>Lifetime Unlimited</h2>
            <p>$399 One-Time Payment</p>
            <ul>
              <li>
                Pre-purchase discount = to 400 dollars, making the purchase price $399 instead of $799.
              </li>
              <li>Before Release of Production Version:</li>
              <ul>
                <li>Free access to all test pages/test games</li>
              </ul>
              <li>After Release of Production Version:</li>
              <ul>
                <li>Unlimited lifetime access to our unlimited plan with the price never to go up</li>
              </ul>
            </ul>
            <div className='check-out'>
              
              <button
                onClick={() =>
                  handleCheckoutClick('https://buy.stripe.com/9AQeWbgpBafK2WsbII')
                }
              >
                Checkout
              </button>
            </div>
          </div>
          {/* Middle Plan */}
        <div id='2' className="middle-rectangle">
            <h2>Donate to Help a Child</h2>
            <p>Helps 1 Child</p>
            <p>$27.99 1 time payment</p>
            <ul>
              <li>
                Upon release of the Production version, 1 child on the waiting list will be granted 6 months of free access to
                our online learning platform.
              </li>
            </ul>
            <div className='check-out'>
      
              <button
                onClick={() =>
                  handleCheckoutClick('https://buy.stripe.com/aEU7tJgpB9bG7cIcMO')
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      <h2 className='tc-head2'>Terms and Conditions</h2>
      <div className="terms-and-conditions">
        <ul className='tc-offers'>
          <li className='tc-offer'> 1. One-Time Offer: $1.99 / student / month
              <ul>
                <li>1.1 Payment:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- The One-Time Offer is priced at $1.99 per student per month.<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Payments are recurring on a monthly basis unless canceled by you.
                </li>
                <li>1.2 Exclusive Offer:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- The offer is limited to 27 spots. Once all spots are filled, the offer may no longer be available.<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- The price is locked in forever for those who secure a spot during this exclusive offer.
                </li>
                <li>1.3 Before Release of Production Version:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Free access to all test pages/test games.
                </li>
                <li>1.4 After Release of Production Version:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Unlimited lifetime access to the basic plan with the price never to increase.
                </li>
              </ul>
          </li>
          <li className='tc-offer'>2. Donate to Help a Child: $27.99 1 time payment<br/>
              <ul>
                <li>2.1 Payment:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- The Donate to Help a Child product is available for a one-time payment of $27.99.
                </li>
                <li>2.2 Child Assistance:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Upon release of the Production version, one child on the waiting list will receive 6 months of free access to our online learning platform.
                </li>
              </ul>
          </li>

          <li classNam='tc-offer'>3. Lifetime Unlimited: $399 One-Time Payment<br/>
              <ul>
                <li>3.1 Payment:<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;- The Lifetime Unlimited product is available for a one-time discounted payment of $399, reduced from $799.
                </li>
                <li>3.2 Pre-Purchase Discount:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Pre-purchase discount of $400 is applied, making the purchase price $399 instead of $799.
                </li>
                <li>3.3 Before Release of Production Version:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Free access to all test pages/test games.
                </li>
                <li>3.4 After Release of Production Version:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;- Unlimited lifetime access to our unlimited plan with the price never to increase.
                </li>
              </ul>
          </li>

            General Terms:<br/>

          <li className='tc-offer'>4. Intellectual Property:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- All content, including but not limited to text, graphics, logos, and software, is the property of Flexi Solutions and is protected by intellectual property laws.<br/>
          </li>
          <li className='tc-offer'>5. Cancellation and Refund:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- All sales are final. Refunds will not be issued unless otherwise stated explicitly in the product description.<br/>
          </li>
          <li className='tc-offer'>6. Modification of Terms:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- We reserve the right to modify, update, or change these terms at any time. It is your responsibility to review these terms periodically for changes.<br/>
          </li>
          <li className='tc-offer'>7. User Responsibilities:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- You agree not to use our products and services for any illegal or unauthorized purpose and to comply with all applicable laws and regulations.<br/>
          </li>
          <li className='tc-offer'>8. Data Security and Privacy:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- We are committed to protecting your privacy. Your data will be handled in accordance with our Privacy Policy.<br/>
          </li>
          <li className='tc-offer'>9. Indemnification:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- You agree to indemnify and hold Flexi Solutions harmless from any claims, losses, or damages arising out of your use of our products and services or any violation of this Agreement.<br/>
          </li>
          <li className='tc-offer'>10. Disclaimer of Warranties:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- Our products and services are provided "as is" without any warranty. We do not guarantee the accuracy, completeness, or reliability of any content.<br/>
          </li>
          <li className='tc-offer'>11. Limitation of Liability:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- To the maximum extent permitted by law, Flexi Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.<br/>
          </li>
          <li className='tc-offer'>12. Governing Law and Dispute Resolution:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;- This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], and any disputes shall be resolved through arbitration in accordance with the rules of the [Arbitration Institution].<br/>
          </li>
        </ul>
        <p>
          By purchasing and using our products and services, you acknowledge that you have read, understood, and agreed to be bound by these terms and conditions. If you do not agree to these terms, please refrain from using our products and services.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
