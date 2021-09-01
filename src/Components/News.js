import React from 'react'



export default function News({news}) {
    
    return (
        <div>
            

           

                <div className="home-paragraph-sports">
                    <p style={{fontSize: "30px",  fontWeight: "600", marginLeft: "2px", marginTop: "15px", color: "white", borderRadius: "5px", padding: "10px"}}>{news.title}</p> 
                </div>
                <div style={{width: "1200px", height: "500px", borderRadius: "4px"}}>
                    <img src={news.imageUrl} alt=""/> 
              </div>
               <div>
               <h5 style={{marginLeft: "50px", fontWeight: "600"}}>{news.tags}</h5>
               <bold><blockquote  style={{fontSize: "20px"}} className="paragraph-one">{news.caption}</blockquote></bold>
              <p className="paragraph-two">{news.body}</p>
              <h5 className="paragraph-two">{news.writer}</h5>
              <p>{news.comment}</p>
              
            </div>
        </div>
    )
}
