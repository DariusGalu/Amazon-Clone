import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" 
            />

            {/* product id, title, price, rating, image */}
            <div className="home_row">
            <Product
            id="1254334"
            title="AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot (2-Pack) (Durability Rated 4,000 Bends)"
            price={11.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/613sgQiTf0L._AC_SL1500_.jpg"
            />
            <Product
            id="122334"
            title="KINGSLONG 17 17.3 Inch Laptop Case Bag Sleeve, Lightweight Laptop Computer Notebook Ultrabooks Carrying Case Sleeve Handbag Cover for Men Women Fit for Acer Asus Dell Lenovo HP Toshiba, Gray"
            price={15.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81f4r-bCVmL._AC_SL1500_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
            id="1234345"
            title="Charging Dock Stations | 4-In-1 Charger Stand Wireless Charging Station for Multiple Devices Multi-Device Charger for Apple Product iPhone Se 2020/11/11 /XS/8 Samsung Galaxy S20 AirPods iWatch (White)"
            price={41.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51-ky%2BwfHVL._AC_SL1000_.jpg"
            />
            <Product
            id="1254334"
            title="
            Apple iPhone Xs Max, 512GB, Space Gray - Fully Unlocked (Renewed)"
            price={631.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71XeQzRDyML._AC_SL1500_.jpg"
            />
            <Product
            id="23123434"
            title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Black"
            price={21.96}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41WzHq0SkRL._AC_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
            id="2341234"
            title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
            price={801.36}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
            />
            </div>

        </div>
    )
}

export default Home;
