import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchTech } from "../actions/fetch_tech";

const Tech = () => {
    const techSelector = useSelector((state) => state.FetchTech);
    const dispatch = useDispatch();
    const getTechNews = () => dispatch(fetchTech());
    

    useEffect(()=>{
       getTechNews();
    }, [])


    return(
        <React.Fragment>
            <section>
                <h2>Technology News</h2>
                <div className="news">
                    {techSelector.articles.map(x => {
                        return (
                            <div className="post" key={x.title}> 
                                <img alt="" src={x.urlToImage} />
                                <h2>{x.title}</h2>
                                <p>{x.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </React.Fragment>
    )   
}

export default Tech;