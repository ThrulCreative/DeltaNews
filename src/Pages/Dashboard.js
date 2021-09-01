import React from 'react'
// import AdminDashboard from '../Components/AdminDashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core/Button';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { useEffect, useState } from 'react'
import axios from 'axios'
// import Posts from '../Pages/Posts';
// import Pages from '../Pages/Pages';

export default function Dashboard() {
            const [title, setTitle] = useState();
            const [caption, setCaption] = useState();
            const [body, setBody] = useState();
            const [writer, setWriter] = useState();
            const [images, setImages] = useState();
            const [tags, setTags] = useState();
            const [category, setCategory] = useState();


            const handleSubmit = async e => {
                e.preventDefault();
                const adminPost = { title, writer, caption, body, images, tags, category}
                console.log(adminPost);
     
                axios.post('https://backend-news-app-api.herokuapp.com/api/stories', {
                 title,
                 caption,
                 body,
                 images,
                 tags,
                 category,
                 writer,
     
               })
               .then((res) => {
                 console.log('successful')
                //  setUser(true)
               })
               .catch( err => {
                 alert('err')
                     console.log(err)
               });
     

    return (
        <div>
             {/* <AdminDashboard /> */}
             <main className="main-container">
             <div className="dash-blue-one">
 
                      
 <section className='admin-dash-logo'>
     <img className="dash-img"style={{width: "180px", marginLeft: "30px"}} src={process.env.PUBLIC_URL  + '/Logo_Black 2.svg'}  alt="..."/>
 </section>
 <section className="admin-dash-right-panel">
     <div className="dash-blue">
       <Link to='dashboard' className="dash-links"> <img  src={process.env.PUBLIC_URL  + '/Home Admin.png'}  alt="..."/>Dashboard</Link>
       <Link to='/posts' className="dash-links"><img  src={process.env.PUBLIC_URL  + '/Post.png'}  alt="..."/>Posts</Link>
       <Link to='pages' className="dash-links"> <img  src={process.env.PUBLIC_URL  + '/Pages.png'} alt="..."/>Pages</Link>
       <Link to='media' className="dash-links"> <img  src={process.env.PUBLIC_URL  + '/media.png'} alt="..."/>Media</Link>
       <Link to='edit' className="dash-links"> <img  src={process.env.PUBLIC_URL  + '/Edit  Pst.png'}  alt="..."/>Edit Post</Link>
       <Link to='delete' className="dash-links"> <img  src={process.env.PUBLIC_URL  + '/delete.png'}  alt="..."/>Delete Post</Link>
     </div>
     <div className="dash-settings">
       <Link to='settings' className='dash-links'><img  src={process.env.PUBLIC_URL  + '/Settings.png'} alt="..."/>Settings</Link> 
     </div>
 </section>
 </div>
                
                    <div className="dash-body">
                    <div className="dash-welcome">
                    <div>
                        <h3 style={{marginLeft: "10px"}}><strong>Welcome!</strong></h3>
                    </div>
                <div> 
                    <input type="search" className="dash-input" placeholder= "Search" />
                    <button className="input-btn">X</button>
                </div>
            </div>
            <div style={{marginLeft: "-100px"}} className="dash-button">
                <div>
                <button> <i class="fas fa-plus"></i> &nbsp; &nbsp; Add New Post</button>
                </div>
                <div>
                <button onClick={handleSubmit} name="publish-botn"> <i class="far fa-calendar"></i> &nbsp; &nbsp; Publish</button>
                </div>

      </div>
      <div className="dash-title">
          <input type="text"style={{width: "500px", height:"50px",marginLeft: "10px", marginTop: "10px"}} onChange={e => setTitle(e.target.value)} placeholder="TITLE: GOVERNOR IFEANYI OKOWA" />

      </div>
      <div className="dash-text-area">
          <div>
          <textarea style={{width: "500px", height: "150px", allignItems: "center", marginLeft: "10px", marginTop: "10px"}} onChange={e => setBody(e.target.value)}>Type Your Story Here</textarea>
          </div>
              <div className="dash-flex">
                  <div>
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel onChange={e => setCategory(e.target.value)} value="politics" control={<Radio />} label="Politics" />
                        <FormControlLabel onChange={e => setCategory(e.target.value)}value="sports" control={<Radio />} label="Sports" />
                        <FormControlLabel onChange={e => setCategory(e.target.value)} value="business" control={<Radio />} label="Business" />
                        <FormControlLabel onChange={e => setCategory(e.target.value)} value="science & Tech" control={<Radio />} label="Science & Tech" />
                        <FormControlLabel onChange={e => setCategory(e.target.value)} value="entertainment" control={<Radio />} label="Entertainment" />
                    </RadioGroup>
                    </FormControl>
                  </div>
                    <bold><h6 onChange={e => setTags(e.target.value)}>Tags</h6></bold>
                    <input></input> <button>Add</button>
                    <bold><h6>Post Date</h6></bold>
                    <input type="text" placeholder="08/10/2021  &nbsp; &nbsp; &#x1f4c5;" /> <input type="text" placeholder="18:00  &nbsp; &nbsp; &#x1f553;"/>
                </div>
                    
            </div>
      <div className="dash-upload">
         <div className="upload-div">
            <p for="Uplaod Image*">Upload Image*</p>
            <input onChange={e => setImages(e.target.value)} className="upload" type="file" name="Upload"  />
         </div>
         <div className="upload-div">
            <p>Caption</p>
            <input className="dash-para" type="text" onChange={e => setCaption(e.target.value)} name='caption' />
         </div>
         <div className="upload-div">
            <p>Writer</p>
            <input  onChange={e => setWriter(e.target.value)} className="dash-para" type="text" />
         </div>
      </div>
      </div>


    </main>
                
        </div>

    )
}

}