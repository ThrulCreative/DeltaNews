import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="">
        <main className="footer-items">
                <div className="footer-links">
            
                   <Link to='./politics' className="nav-buttons">Politics</Link>
                   <Link to='./business' className="nav-buttons">Business</Link>
                   <Link to='./science-tech' className="nav-buttons">Science &amp; Tech</Link>
                   <Link to='./sports' className="nav-buttons">Sports</Link>
                   <Link to='./entertainment' className="nav-buttons">Entertainment</Link>
            
                </div>
                <section className="food-images">

                    <h5 className="tags-div">Photo gallery</h5>
                    <hr className="footer-lines" style={{color: "white", fontWeight: "600"}}></hr>
                    <div className='row'>
                        <div className='col-4 gallery'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer1.png'} class="d-block w-100" alt="..."/>
                        </div>

                        <div className='col-4'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer2.png'} class="d-block w-100" alt="..."/>
                        </div>
                        <div className='col-4'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer3.png'} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 gallery'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer5.png'} class="d-block w-100" alt="..."/>
                        </div>

                        <div className='col-4'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer5.png'} class="d-block w-100" alt="..."/>
                        </div>
                        <div className='col-4'>
                            <img  src={process.env.PUBLIC_URL  + '/Footer6.png'} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    
                    
                </section>
                <section>
                <div className="footer-socials">
                    <h5 className="tags-div">Tags</h5>
                    <strong><hr className="footer-lines"></hr></strong>
                </div>
                <div className="tags-text">
                     <p>Football</p>
                    <p>Cricket</p>
                    <p>Covid-19</p>
                    <p>Life Style</p>
                    </div>
                <div className="tags-text">
                    <p>Trending News</p>
                    <p>Technology</p>
                    <p>Travel</p>
                    
                </div>
                <div className="tags-text">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-youtube-square"></i>
                    
                </div>
                </section>
                <section>
                <div className="contact-us">
                    <h5 className="tags-div">Stay in Touch</h5>
                    <strong><hr className="footer-lines"></hr></strong>
                </div>
                <div className="tags-text-one">
                    <h5>To be updated with all the latest news,  <br></br> offers and special announcements</h5>
                    <input type= "text" className="tags-input" placeholder=" &nbsp; &nbsp; &nbsp; Your email Address"/>
                    <button className="tags-btn">Subscribe</button>
                </div>
                </section>
        </main>
        </div>
    )
}
