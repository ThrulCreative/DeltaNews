import React from 'react'
// import { useEffect, useState } from 'react'
//  import axios from 'axios';
import { Link } from 'react-router-dom';
 import Header from '../Components/Header';
//  import Carousel  from 'react-responsive-carousel';
 import "react-responsive-carousel/lib/styles/carousel.min.css";
//  import News from '../Components/News'
import Footer from '../Components/Footer';
 
 
 
 
 
 export default function Home() {
     const d = new Date();
    //  const [ stories, setStories ] = useState([]);

    //  useEffect(() => {
    //        axios.get('https://backend-news-app-api.herokuapp.com/api/stories')
    //        .then((res)  => {
    //            console.log(res.data.data)
    //            setStories(res.data.data)
    //        }).catch((err) => {
    //            console.log(err)
    //        })
    //  }, [])
      
     
     return (
         <main>
          <div>
              <Header />
                    <div className="label">
                        <img  style={{width: "25px"}} src={process.env.PUBLIC_URL  + '/Calender.png'}  alt="..."/>
                        <p>{d.toLocaleTimeString()}</p>
                        <p>{d.toDateString()}</p>
                        <p className="breaking-news">Breaking News</p>
                        <p>Indonesian says located black box recorders from crashed plane.</p>
                        <p>We'll deploy more resources to other sectors in 2022 -Okowa</p>
                        <Link to='./signin'style={{marginTop:"5px", fontSize:"20px", fontWeight:"900px,"}} className="nav-signin">Admin Sign In</Link>
                        <img  style={{ marginTop: "10px",width: "auto", height:"40px"}}  src={process.env.PUBLIC_URL  + '/Search.png'}  alt="..."/>
                        {/* <i sclass="fas fa-search"></i> */}
                    
                    </div>
                    
                    <div className="spacing">
                            <div id="carousel-div" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" style={{height: "10px", borderRadius: "5px"}} data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" style={{height: "10px", borderRadius: "5px"}} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" style={{height: "10px", borderRadius: "5px"}} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src={process.env.PUBLIC_URL  + '/Frontend.png'} class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL  + '/Deploy.png'} class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL  + '/After.png'} class="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="spacing">
                                    <div className="carousel-caption">
                                        <p className="carousel-p">Craig Bator - 27 June 2021</p>
                                        <h6 className="carousel-h">After all is said and done, more is done.</h6>
                                        </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                            </div>
                            </div>




                
                 </div>
                 <div className="spacing">
                <div className="home-paragraph">
                {/* <Link to='./politics' className="nav-buttons">Politics</Link> */}
                      <Link to='./politics'>  <p className="home-links">Politics</p></Link>
                        <strong><hr></hr></strong>
                    </div>
                    <div>
                   <Link to='./politics'>  <img src={process.env.PUBLIC_URL  + '/Governor.png'} class="d-block w-100" alt="..."/></Link>
                    <p className="img-paragraph">Governor Okowa came to power on May 29th 2015 with a <br/> development template codified as smart agenda.</p>
                </div>
                
                <section className="under-img">
                        <div className="card-img">
                        <div class="card mb-3" style={{width: '400px'}}>
                    <div class="row g-0 row--container">
                        <div class="col-md-4">
                        <img className="under-images" src={process.env.PUBLIC_URL  + '/work.png'} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-title">Craig Bator- 29th July, 2021</p>
                            <p class="card-text">Work for United Delta <br/> Okowa urges Commisioners.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>

                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Proud.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title">Craig Bator- 29th July, 2021</p>
                    <p class="card-text">We're proud of your representation, <br/> Okowa tells Elumelu.</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Health.png'} class="d-block" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 29th July, 2021</p>
                    <p class="card-text">Heath insurance will check maternal, <br/> infant mortality -Okowa.</p>
                </div>
                </div>
            </div>
            </div>        
                </div>
                
           </section>
           </div>
           
           <div className="spacing">
           <div className="home-paragraph">
               <Link to='./business'> <p className="home-links">Business</p> </Link>
               <strong><hr></hr></strong>
           </div>
           <div>
           <Link to='./business'> <img src={process.env.PUBLIC_URL  + '/Abuja.png'} class="d-block w-100" alt="..."/> </Link>
           <p className="img-paragraph">Abuja banks comply with CBN forex directive, <br/>sell Dollar at N412</p>
           </div>
           <section className="under-img">
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4"> 
                <img className="under-images" src={process.env.PUBLIC_URL  + '/card1.jpg'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">Manufactures in Edo, Delta groan under poor <br/> power supply, others -MAN Chairman.</p>
                </div>
                </div>
            </div>
            </div>
                </div>

                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/card2.jpg'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">NNPC earns N2.129trn from product sales.</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/card3.jpg'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">MTN posts 790bn revenue, loses 7.6m  <br/> subscibers in 6months.</p>
                </div>
                </div>
            </div>
            </div>        
                </div>
               
           
    </section>
    </div>

            <div className="spacing">
            <div className="home-paragraph">
               <Link to='./science'><p className="home-links">Science & Tech</p> </Link>
               <strong><hr></hr></strong>
            </div>
            <div>
            <img src={process.env.PUBLIC_URL  + '/Oghene.png'} class="d-block w-100" alt="..."/>
            <p className="img-paragraph">Ogheneobukome emerges best student in Delta State <br/> on March 2nd, 2021.</p>
            </div>
            <section className="under-img">
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Innovation.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 202</p>
                    <p class="card-text">Re-Innovation of Delt-hub.</p>
                </div>
                </div>
            </div>
            </div>
                </div>

                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Delta.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">Delta govt gives resons for  <br/> establishing three new varsities.</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Engr.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">Engr. Matthew Tsekiri -Hon Commissioner of<br/> Science and Technology</p>
                </div>
                </div>
            </div>
            </div>        
                </div>
           
            </section>
            </div>

            <div className="spacing">
            <div className="home-paragraph">
              <Link to='./sports'> <p className="home-links">Sports</p> </Link>
               <strong><hr></hr></strong>
            </div>
            <div>
            <img src={process.env.PUBLIC_URL  + '/Medal.png'} class="d-block w-100 medal--image" alt="..."/>
            <p className="img-paragraph-sports">Tokyo Olympics: Guide to track cycling</p>
            </div>
            <section className="under-img">
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/South.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 202</p>
                    <p class="card-text">Re-Innovation of Delt-hub.</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Southee.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">Delta govt gives resons for  <br/> establishing three new varsities.</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Success.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 2 August 2021</p>
                    <p class="card-text">Engr. Matthew Tsekiri -Hon Commissioner of<br/> Science and Technology</p>
                </div>
                </div>
            </div>
            </div>        
                </div>
           
            </section>
            </div>
            
            
           <div className="spacing">
           <div className="home-paragraph">
               <Link to='./entertainment'> <p className="home-links">Entertainment</p> </Link>
               <strong><hr></hr></strong>
            </div>
            <div>
            <Link to='./entertainment'><img src={process.env.PUBLIC_URL  + '/Amanda1.png'} class="d-block w-100" alt="..."/></Link>
            <p className="img-paragraph-two">Amanda seyfried became "really obsessed" with ghost stories: <br/> Hollywood Actress Amanada Seyfried has recalled the time <br/> when she became obsessed with ghost stories.</p>
            </div>
            <section className="under-img">
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Amanda2.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 29th July, 2021</p>
                    <p class="card-text">Amanda seyfried became "really <br/> obsessed" with ghost stories  .</p>
                </div>
                </div>
            </div>
            </div>
                </div>

                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Before.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                  <p class="card-title">Craig Bator- 29th July, 2021</p>
                    <p class="card-text">Irrfan Khan's last film "The song of <br/> Scorpions" to be released in 2021 .</p>
                </div>
                </div>
            </div>
            </div>
                </div>
                <div className="card-img">
                <div class="card mb-3" style={{width: '400px'}}>
            <div class="row g-0 row--container">
                <div class="col-md-4">
                <img className="under-images" src={process.env.PUBLIC_URL  + '/Apee.png'} class="d-block w-100" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <p class="card-title">Craig Bator- 29th July, 2021</p>
                    <p class="card-text">Apee Karim Blessed <br/> with a daughter.</p>
                </div>
                </div>
            </div>
            </div>        
                </div>

          </section>
          </div>

           <Footer />
         </main>
     )
 }
 