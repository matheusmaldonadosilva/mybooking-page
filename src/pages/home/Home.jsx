import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import Property from "../../components/property/Property";
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './home.css';

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">
          Browse by property type
        </h1>
        <Property/>
        <h1 className="homeTitle">
          Homes guests love
        </h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home