import { useState, useEffect } from "react"
import axios from "axios"
import './main.css'

const API_KEY=process.env.REACT_APP_API_KEY

// const API="https://jsonplhttps://jsonplaceholder.typicode.com/postsaceholder.typicode.com"

const Main = () => {

    console.log("env file is",process.env.REACT_APP_API_KEY);

    const [myData, setMyData] = useState([])
    const [isError, setIsError] = useState('')

    useEffect(()=>{
        axios.get(API_KEY)
        .then((res)=>setMyData(res.data))
        .catch((e)=>{
            setIsError(e.message)
        })  
    },[])

    // using async await

    // const getApiData = async (url) => {
       
    //     try {
    //         const res = await axios.get(url);
    //         setMyData(res.data)
    //     } catch (e) {
                                    
    //         setIsError(e.message)
    //     }
    // }

    // useEffect(() => {
    //     getApiData(`${API}/posts`);
    // }, [])

    // const getApiData = async () => {
       
    //     try {
    //         const res = await axios.get("posts");
    //         setMyData(res.data)
    //     } catch (e) {
                                    
    //         setIsError(e.message)
    //     }
    // }

    // useEffect(() => {
    //     getApiData();
    // }, [])

    return (
        <div className='navHeader'>
            <h1 >Axios</h1>
            {isError !== '' ? <h1>{isError}</h1> : null}
            <div className="axios-card">
                {
                    myData.map((post) => {
                        const { id, title, body } = post;
                        return (
                            <div key={id}>
                                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                                <p>{body.slice(0, 100)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main