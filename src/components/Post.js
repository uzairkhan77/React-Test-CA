import React, { useState} from 'react'
import { useEffect } from 'react';
import PostItem from './PostItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {


    const [posts,setPosts]= useState([]);
    const [loading,setLoading]= useState(true);
    // const [page,setPage]= useState(1);
    // const [totalResults,setTotalResults]= useState(0);

    const updatePosts = async ()=> {
        // props.setProgress(10);
        const url = `https://jsonplaceholder.typicode.com/posts`; 
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY
        setLoading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        setPosts(parsedData);
        // setTotalResults(parsedData.totalResults);
        setLoading(false);
        // props.setProgress(100);
    }

    useEffect(() => {
        document.title = `All Posts`;
        updatePosts(); 
        // eslint-disable-next-line
    }, [])



    // const fetchMoreData = async () => {  
    //     // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    //     const url = `https://newsapi.org/v2/everything?q='all'&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    //     setPage(page+1);
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setArticles(articles.concat(parsedData.articles));
    //     setTotalResults(parsedData.totalResults);
    //   };

    return (
        <>
            <h1 className="text-center" style={{color:'black',marginTop: '80px',marginBottom:'30px'}}>PostApp - All Posts</h1>
            {loading && <Spinner />}
            {/* <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >  */}
                <div className="container">
                        
                <div className="row">
                    {posts.map((post) => {
                        return <div className="col-md-4" key={post.url}>
                            <PostItem mode= {props.mode} title={post.title ? post.title : ""} body={post.body ? post.body : ""} />
                        </div>
                    })}
                </div>
                </div> 
            {/* </InfiniteScroll> */}

        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News
