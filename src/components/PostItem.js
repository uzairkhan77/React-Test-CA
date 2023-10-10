import React from 'react'
const NewsItem = (props) => {

    // const newsCard = document.getElementById('card') 

    return (
        <div>
            <div id='card' className="card my-3" >
                <div className="card-body">
                    <h5 style={{color:'grey'}} className="card-title" ><b>Title:</b> {props.title}</h5>
                    <p className="card-text"><b>Description:</b> {props.body}</p>                   
                </div>
            </div>
        </div>
    )
}

export default NewsItem