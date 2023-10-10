import React from 'react'
const NewsItem = (props) => {

    // const newsCard = document.getElementById('card') 

    return (
        <div>
            <div id='card' className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title" >{props.title}</h5>
                    <p className="card-text">{props.body}</p>                   
                </div>
            </div>
        </div>
    )
}

export default NewsItem