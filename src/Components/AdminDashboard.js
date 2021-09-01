  import React from 'react'
  import { Link } from 'react-router-dom'
  
   function AdminDasboard() {

      return (
          // <>
            // <main className="main-container">
             
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
                      )
                    }

                    
                      
 export default AdminDasboard                  
      