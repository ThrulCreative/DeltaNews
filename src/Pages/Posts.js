import React from 'react'
import AdminDashboard from '../Components/AdminDashboard'

function Posts() {
    return (
        <div style={{display:'flex'}}>
            {/* <AdminDashboard />  */}
            <main className="main-container">
            
                
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
                  <button> <i class="far fa-calendar"></i> &nbsp; &nbsp; Publish</button>
                </div>

              </div>
              <div className="dash-title">
                  <input type="text"style={{width: "500px", height:"50px",marginLeft: "10px", marginTop: "10px"}} placeholder="TITLE: GOVERNOR IFEANYI OKOWA" />

              </div>
              <div className="dash-text-area">
                  <div>
                  <textarea style={{width: "500px", height: "150px", allignItems: "center", marginLeft: "10px", marginTop: "10px"}}>Type Your Story Here</textarea>
                  </div>
                      <div className="dash-flex">
                          <p> <img className="under-images" src={process.env.PUBLIC_URL  + '/Checker Active.png'}  alt="..."/>Politics</p>
                          <p> <img className="under-images" src={process.env.PUBLIC_URL  + '/Checker Inactive.png'}  alt="..."/> Business</p>
                          <p> <img className="under-images" src={process.env.PUBLIC_URL  + '/Checker Inactive.png'}  alt="..."/>Science & Tech</p>
                          <p> <img className="under-images" src={process.env.PUBLIC_URL  + '/Checker Inactive.png'}  alt="..."/>Sports</p>
                          <p> <img className="under-images" src={process.env.PUBLIC_URL  + '/Checker Inactive.png'}  alt="..."/>Entertaiment</p>
                    <bold><h6>Tags</h6></bold>
                    <input></input> <button>Add</button>
                    <bold><h6>Post Date</h6></bold>
                    <input type="text" placeholder="08/10/2021  &nbsp; &nbsp; &#x1f4c5;" /> <input type="text" placeholder="18:00  &nbsp; &nbsp; &#x1f553;"/>
                    </div>
                    
              </div>
              <div className="dash-upload">
                 <div className="upload-div">
                    <p for="Uplaod Image*">Upload Image*</p>
                    <input className="upload" type="file" name="Upload" />
                 </div>
                 <div className="upload-div">
                    <p>Caption</p>
                    <input className="dash-para" type="text" name='caption' />
                 </div>
                 <div className="upload-div">
                    <p>Writer</p>
                    <input className="dash-para" type="text" />
                 </div>
              </div>
              </div>


            </main>
        </div>
    )
}

export default Posts
