import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Menu from './components/Navbar/Menu';
import Store from './components/Navbar/Store';
import New from './components/Navbar/New';
import ContactUS from './containers/ContactUS';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="Main">
          <
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/store" component={Store} />
          <Route path="/new" component={New} />
          <div className="Side">
            <Sidebar />
            <ContactUS />
          </div>
        </div>
        <footer>
        <div className="footHead">
          <ul>
            <li>사이트맵</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </div>
        <div className="footBot">
          <p>Phone : 051-203-1910 </p>
          <p>Address: 18 Nakdong-daero 535beon-gil, Saha-gu, Busan</p>
          <p>Weekdays 12:00-24:00 Open year round</p>
          <p>Weekends 11:00-24:00 Open year round</p>
        </div>
      </footer>
      </div>
    </Router>
  );
}

export default App;
