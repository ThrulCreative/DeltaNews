 import React from 'react'
 import { useEffect, useState } from 'react'
 import axios from 'axios';
 import { Link } from 'react-router-dom';
 import News from '../Components/News'
 import Header from '../Components/Header'
 import Footer from '../Components/Footer';
 
 export default function Business() {
    const d = new Date();
    const [ business, setBusiness ] = useState([]);

  useEffect(() => {
        axios.get('https://backend-news-app-api.herokuapp.com/api/stories/category/business')
        .then((res)  => {
            console.log(res.data.data)
            setBusiness(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
  }, [])
        


    
     return (
         <div>
                <Header /> 

                <div className="label">
                  <img  style={{width: "25px"}} src={process.env.PUBLIC_URL  + '/Calender.png'}  alt="..."/>
                  <p>{d.toLocaleTimeString()}</p>
                  <p>{d.toDateString()}</p>
                  <p className="breaking-news">Breaking News</p>
                  <p>Indonesian says located black box recorders from crashed plane.</p>
                  <p>We'll deploy more resources to other sectors in 2022 -Okowa</p>
                  <Link to='./signin'style={{marginTop:"5px", fontSize:"20px", fontWeight:"700px,"}}  className="nav-signin">Admin Sign In</Link>
                  <img  style={{ marginTop: "10px",width: "auto", height:"40px"}}  src={process.env.PUBLIC_URL  + '/Search.png'}  alt="..."/>
                  {/* <i style={{ marginTop: "-15px"}} class="fas fa-search"></i> */}
              </div> 





             {
                 business.map((news) => (

                     <News  key={news.id} news={news} />

                 )) 
             }
                {/* <div className="spacing">
                <div className="politics-header">
                    <p>Comment</p>
                </div>
                </div>
                <div className="spacing">
                <div>
                    <textarea className="comment-div"></textarea> 
                </div>
                </div>
                <div className="spacing">
            <section className="comment-section">
                <div>
                <img  src={process.env.PUBLIC_URL  + '/Group 533.png'} class="d-block w-100" alt="..."/>
                </div>
                <div>
                    <button className="comment-btn"> Post Comment</button>
                </div>
            </section>
            <section className="comment-section">
                <div>
                <img className="comment-section-one" src={process.env.PUBLIC_URL  + '/Group 533.png'} class="d-block w-100" alt="..."/>
                </div>
                <div className="comment-texts">
                <h5> Opretha Oghale .︁ 2 hours ago</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra magnis enim ac interdum leo tellus. Diam feugiat rhoncus, placerat suspendisse <br/> faucibus. Nulla scelerisque convallis ut lectus vitae tempus ultrices libero. Dot amet espiliere dotre tellius lorem ipsum sit amet dols lorders vitae.</p>
                </div>                  
                </section>
                </div> */}
                
              <Footer />
            
            </div>
            
         
         
     )
 }
 