import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
function Hero() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-container paddings innerWidth flexCenter">
          <div className="flexColStart hero-left">
            <div className="hero-title">
            <div className="orange-circle"/>
              <h1>Discover<br/> Most Suitable <br/>Property.</h1>
              <div className="flexColStart hero-des">
             
              <span>buy homes live happily and give us money sadly.</span>
              <span>Enjoy the life man Why care about future when your persent is perfect.</span>

              </div>
         
            </div>
            <div className="flexCenter search-bar">
               <HiLocationMarker color="var(--blue)" size={25}/>
               <input type="text" placeholder="Your Dream"/>
               <button className="button">
                Search 
               </button>
              
              </div>
              <div className="flexCenter stats">
                <div className="flexColStart stat">
                  <span>
                    <CountUp start={8800} end = {9000} duration={4}/>
                    <span>
                      +
                    </span>
                  </span>
                  <span>Premium Products</span>
                </div>
                <div className="flexColStart stat">
                  <span>
                    <CountUp  start ={1500} end = {2384} duration={3}/>
                    <span>
                      +
                    </span>
                  </span>
                  <span>Happy Customers</span>
                </div>
                <div className="flexColStart stat">
                  <span>
                    <CountUp  end = {23} duration={5}/>
                    <span>
                      +
                    </span>
                  </span>
                  <span>Award Winnings</span>
                </div>
               </div>
          </div>
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
