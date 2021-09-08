import React from 'react'



export default function News({news}) {
    
    return (
        <div className="spacing">
            

           
            
                <div className="home-paragraph-sports">
                    <p style={{fontSize: "30px",  fontWeight: "600", marginLeft: "2px", marginTop: "15px", color: "white", borderRadius: "5px", padding: "10px"}}>{news.title}</p> 
                </div>
                <div style={{width: "100%vw", height: "500px", borderRadius: "6px"}}>
                    <img style={{width: "100%vw", height: "500px", borderRadius: "6px"}} src={news.imageUrl} alt=""/> 
              </div>
               <div>
               <h5 style={{marginLeft: "50px", fontWeight: "600", color: 'red'}}>{news.tags}</h5>
               <bold><blockquote  style={{fontSize: "20px"}} className="paragraph-one">{news.caption}</blockquote></bold>
              <p className="paragraph-two"style={{fontSize: "20px"}}>{news.body}</p>
              <h5 className="paragraph-two">{news.writer}</h5>
              <p>{news.comment}</p>
              
            </div>
        </div>
    )
}
