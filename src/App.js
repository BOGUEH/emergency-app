
import './App.css';
import {  Switch,  Route,  Link} from "react-router-dom";
import ContactUs from './Components/ContactUs';

import About from './Components/About';
import Service from './Components/Service';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">


    <div id="navbar">  
      <div id="logo">
          Emergency Report
        </div> 
      <nav>    
         
              
              <Link to ="/downloadapp"className="navDetails" id="downloadLogo">Download App </Link>
               <Link to ="/service" className="navDetails"> SERVICE</Link> 
              <Link to ="/about"className="navDetails">ABOUT </Link>
              <Link to ="/contact" className="navDetails"> CONTACT US </Link>
              <Link to ="/home" className="navDetails">HOME</Link> 
   
      </nav>
    </div>
      <Switch>
          <Route path="/contact">
            <ContactUs />
          </Route>
      

          <Route path="/service">
            <Service />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

      </Switch>
   
    </div>
  );
}

export default App;
