import React, { useState } from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
        src: "https://i.pinimg.com/564x/aa/29/5f/aa295ff3370dbc7500c984a68e21f946.jpg"

    },
    {
        src: "https://i.pinimg.com/564x/71/f1/d4/71f1d4c5a54a2f7b589ef70d34266b92.jpg"

    },
    {
        src: "https://i.pinimg.com/564x/29/86/f3/2986f374667a91f7b97dcb553a556880.jpg"

    },
    {
        src: "https://i.pinimg.com/564x/a1/74/7a/a1747aa69c268f6d5d83a5616a8b958d.jpg"

    },
    {
        src: "https://i.pinimg.com/564x/68/aa/e3/68aae34c53a7b00e8a51333fad0d348f.jpg"

    },
    {
        src: "https://i.pinimg.com/564x/12/ff/2d/12ff2da7bd55c99671188121d4587060.jpg"

    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
            <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
        </div>}
        <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span className="hotelDistance">
                Excellent location - 500m from center
            </span>
            <span className="hotelPriceHighlight">
                Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
                {photos.map((photo, i)=>(
                  <div className="hotelImgWrapper">
                    <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                  </div>  
                ))}
            </div>
            <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                    <h1 className="holteTitle">Stay in the heart of Krakow</h1>
                    <p className="hotelDesc">
                        Located a 5-minute walk from St. Florian Gate in Krakow
                    </p>
                </div>
                <div className="hotelDetailsPrice">
                    <h1>Perfect for a 9-night stay!</h1>
                    <span>
                        Located in the real heart of Krakow, this property has an excellent location score of 9.8!
                    </span>
                    <h2>
                        <b>$945</b> (9 nights)
                    </h2>
                    <button>Reserve or Book Now!</button>
                </div>
            </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
