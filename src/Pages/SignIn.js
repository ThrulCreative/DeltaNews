import React from 'react'
import Logo3 from '../NewsApp Props/Logo3.png'
import { useState  } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default function SignIn() {

  const [ user, setUser] = useState('');
  const History = useHistory()      
         const [username, setUserName] = useState();
         const [password, setPassword] = useState();

       

         const handleSubmit = async e => {
           e.preventDefault();
           const admin = { username , password}
           console.log(admin);

          

           axios.post('https://backend-news-app-api.herokuapp.com/api/admin/login', {
            username,
            password,

          })
          .then((res) => {
            let adminPayload = res.data.data;
            console.log('You are logged In', adminPayload)
            setUser(adminPayload)
            window.localStorage.setItem('admin', JSON.stringify(adminPayload));
            History.push("/dash")
          })
          .catch( err => {
            // alert('Enter Correct Login Details')
                console.log(err)
          });

         }
    return (
        <div className="admin-container">
          <div className="singin-logo">
          <img  src={Logo3} alt=""/>
          </div>
        <section className='signin-main'>
        
        
        

                <div  className="signin-container">
                      <h1>Welcome Back</h1>
                      <p className="p-tag">Enter your Admin Details</p>
                      <div>
                          
                      </div>
                      <input type= "text" onChange={e => setUserName(e.target.value)} placeholder="&#x1f464; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; enter your username" 
                      className="signin-input" require/>
                      <input type="password"  onChange={e => setPassword(e.target.value)}  placeholder="&#x1f512; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Enter your password"className="signin-input" required />
                       <button onClick={handleSubmit} className="signin-botn">Sign In</button>
                      </div>
                      </section>
                      <div className="reset-password">
                      <p className="forgot-password">Forgot your Password?</p>
                      <p>Contact your Support Centre</p>
                      </div>
                
                </div>

    )
}
