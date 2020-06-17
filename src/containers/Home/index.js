import React from 'react';
import './style.css';
import HomeCoffee from '../../components/HomeCoffee';
import Interior from '../../components/Interior';
import Space from '../../components/Space';
import ForCoffee from '../../components/ForCoffee';

/**
* @author
* @function Home
**/

const Home = (props) => {
  console.log('Home render');
  return(
    <div className="Home">
      <div className="img">
        <h1>CafeFreesia</h1>
        <p>By GangDuck</p>
        <p>It is a freesia cafe leading the trend ahead of culture.</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <section>
        <HomeCoffee />
      </section>
      <section>
        <Interior />
      </section>
      <section>
        <Space />
      </section>
      <section>
        <ForCoffee />
      </section>
    </div>
   )

 }

export default Home