 import React from 'react'
 import { useEffect, useState } from 'react'
 import axios from 'axios';
 import Header from '../Components/Header'
 import { Link } from 'react-router-dom';
 import Deploy from '../NewsApp Props/Deploy.png'
//  import Proud1 from '../NewsApp Props/Proud1.jpg'
//  import Proud2 from '../NewsApp Props/Proud2.jpg'
 import News from '../Components/News'
import Footer from '../Components/Footer';


 
 export default function Politics() {
         const d = new Date();
         const [ politics, setPolitics ] = useState([]);

  useEffect(() => {
        axios.get('https://backend-news-app-api.herokuapp.com/api/stories/category/politics')
        .then((res)  => {
            console.log(res.data.data)
            setPolitics(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
  }, [])

     return (
         <main>
            <Header /> 

                    <div className="label">
                        <img  style={{width: "20px"}} src={process.env.PUBLIC_URL  + '/Calender.png'}  alt="..."/>
                        <p>{d.toLocaleTimeString()}</p>
                        <p>{d.toDateString()}</p>
                        <p className="breaking-news">Breaking News</p>
                        <p>Indonesian says located black box recorders from crashed plane.</p>
                        <p>We'll deploy more resources to other sectors in 2022 -Okowa</p>
                        <Link to='./signin' style={{marginTop:"5px", fontSize:"20px", fontWeight:"700px,"}}  className="nav-signin">Admin Sign In</Link>
                        <img  style={{ marginTop: "10px",width: "auto", height:"40px"}}  src={process.env.PUBLIC_URL  + '/Search.png'}  alt="..."/>
                        {/* <i style={{ marginTop: "-15px"}} class="fas fa-search"></i> */}
                    </div>
                    <div className="spacing">
                <div className="politics-header">
                    <p>We'll deploy more resources to other sectors in 2022 -Okowa</p>
                </div>
                </div>
                
                <div>
                <div className="spacing">
                   <img src={Deploy} style={{width: "80%vw"}} alt=""/> 
                 </div>
                 <div className="spacing">
                <bold><blockquote className="paragraph-one"> Jonah Ejike 1h ago</blockquote></bold>
                  <p className="paragraph-two"> Delta Governor, Sen. (Dr) Ifeanyi Okowa, on Friday, said every sector of the state economy would receive attention within the limit of available resources in 2022.<br/> <br/>

Okowa made the disclosure while inaugurating Omene Road, Lawrence/Iju Road and Laboard Road all in Sapele as well as Hon. Onosa Road, Jesse and Sargin Erhivieta/Mission Road Jesse, in Sapele and Ethiope West Local Government Areas of the state.<br/> <br/>

Other projects executed by the state government which were also inaugurated by Governor Okowa included the Oghara Modern Market, Ogini Grammar School in Ogharaefe Ethiope West Local Government Area of the state. <br/> <br/>
Inaugurating the road projects Okowa stated that more attention would be paid to other sectors of the state economy by next year, adding that in doing that, the development of road infrastructure will not be ignored.<br/> <br/>

“I am glad that these three roads that we are commissioning today in Sapele have been executed to specification as the Commissioner for Works (Urban Roads and Highways) has spoken.“We will continue to provide road infrastructure because we realised the importance of providing good roads for our people. “We will also try to ensure that other aspects of our economy do not suffer because of road construction.
“It is our intention that next year, we will be spending more resources on other aspects of the state economy. 
Even as we do that, we are not going to ignore road construction. <br/> <br/>
“However, l have noted the request for more roads made by the Chairman of the Local Government Council, l will try to give consideration to it,” the governor said. <br/> <br/>

He told the Orodje of Okpe kingdom, HRM, Maj. Gen. Felix Mujakperuo (Rtd.) Orhue l, that the request for a faculty from the new universities in the state to be cited at Sapele Technical College would be scrutinised. At Jesse, Governor Okowa said the infrastructural transformation in the road sector was aimed at linking rural and urban communities with motorable roads and bridges. <br/> <br/>

Speaking at Ogini Grammar School, Ogharaefe, , the governor said he was impressed with the state-of-the-art facilities and said the school would be renamed as Ogini Model College, Ogharaefe.<br/> <br/>

He noted that out of the 12 model secondary school projects initiated by the former Governor Emmanuel Uduaghan administration, one was completed and inaugurated by him (Dr. Uduaghan) before he left office as governor.<br/> <br/>

Okowa pointed out that nine of the model schools inherited by his administration have been completed while the remaining two would be completed before the end of his tenure, and called on communities to protect government projects and facilities in their areas from vandals.

“Former Governor Emmanuel Uduaghan has a good intention for starting 12 of such model schools in Delta State. 
Unfortunately, he was only able to commission one of them before he left office as Governor. <br/> <br/>

“But because we are responsive, responsible and happy that he had a good thought in mind for the people of Delta to build such schools, we have been able to move ahead to complete nine of them so far and we are hoping that the other two that are left will be completed before the end of our tenure.<br/> <br/>

“So, our congratulations and thanks goes to Dr. Uduaghan for these projects that he started and just as we promised from the beginning, every good projects started by our predecessors both former Governors Uduaghan and James Ibori, we shall continue to strive to bring them to completion for the good and for the use of our people.<br/> <br/>

“Because of the facilities in the school, we are going to rename the school to Ogini Model College. I want to reassure you that we will continue to ensure that the facilities in this school are maintained.</p> 
                    </div>
                </div>
               

                {
                 politics.map((news) => (

                     <News  key={news.id} news={news} />

                 )) 
             }

           
            
                <Footer />
              </main>
     )
 }
 