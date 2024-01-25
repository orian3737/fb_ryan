import React, { /* useState */ } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/App.css';
import Home from './component/Home';
import About from './component/About';
import SignUp from './component/SignUp';
import Contact from './component/Contact';


/*function headerVanish() {
  const [ header, setHeader ] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
        setHeader(true);
      } else {
        setHeader(false);
      
      }
  }

  window.addEventListener('scroll', changeBackground)
  
};*/

 


/*<div className="background">
   <backgroud ><img src='images/LLlogoblue.png' alt='logo'className="backgroundpng"/></backgroud>
   </div>*/
function App() {
  return ( 
  <Router>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   <div className="App"> 
   <div style={{backgroundImage: "url(images/LLlogoblue.png)"}} className='backroundpng'></div>
        <header className="header active" id='sticky'>

              <div className="links">
              <div className="head">
              <h1 className='head1'>LightningLearn</h1>
            </div>
            <div className="navbar">
                <nav className='sticky'>
                  <Link className="App-link" to="/">Home</Link>
                  <Link className="App-link" to="/about">About</Link>
                  <Link className="App-link" to="/signup">Sign Up</Link>
                  <Link className="App-link" to="/contact">Contact</Link>
              
                </nav>
              </div>
          </div>
          <img className='LLlogo ,contactLogo' src="LLlogo.jpg" alt='LL-logo'></img>
        </header>
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
          

            {/* Add more routes for other pages */}
          </Routes>

        </div>    
        <footer className='footer'>
          <div className="footerContainer">
            <h3 className='Footh3'>Lightninglearn</h3>
            <div className="navbar">
                <nav className='sticky'>
                  <Link className="App-link" to="/">Home</Link>
                  <Link className="App-link" to="/about">About</Link>
                  <Link className="App-link" to="/signup">Sign Up</Link>
                  <Link className="App-link" to="/contact">Contact</Link>
                  <Link className="Footer-link" to="/contact">Terms & Conditions</Link>
                  <Link className="Footer-link" to="/contact">Privacy Policy</Link>
                </nav>
                
              </div>
            </div>
            <a href="#" class="fa fa-github" id='i-box'></a>
            <a href="#" class="fa fa-linkedin" id='i-box'></a>
            <a href="#" class="fa fa-facebook" id='i-box'></a>
          </footer>
  
      </div>
    </Router>
  );
}

export default App;
