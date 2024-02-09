import React, { useState, useEffect } from 'react'
//import axios from 'axios'
import {  useAddPostMutation, useGetPostQuery, useGetUserQuery } from '../Redux/Slices/Api/postApiSlice'

const Api = () => {
    //const [posts, setPosts] = useState([])

    //const url = "https://jsonplaceholder.typicode.com/albums";

    const postDataValue = {
        
        userId : 11,
        id : 101,
        title : "quidem molestiae enim"
    
   };

    /* const getPosts = async () => {
        try {
            const response = await axios.get(url);
            setPosts(response.data);
        }
        catch (err) {
            console.log(err)
        }

    } */


    const postPosts =  async () => {
        try{
        const response = await addPost(postDataValue)
        }
        catch(err){
            console.log(err);
        }
    };

    /* useEffect(() => {
        getPosts();
    }, []) */

    const {data : posts} = useGetPostQuery();

    const [addPost] = useAddPostMutation();

    const {data : user} = useGetUserQuery();

    console.log(posts);
    console.log(user);

    return (
        <div>
            <div>
            <h1>List Items</h1>
            <ul>                   
                   {posts && posts.map((item, index) => (
                        <li key={index}>{ item.title }</li>
                        
                    ))} 
            </ul>
            <button onClick={postPosts}>Post</button>
            </div>

            <div>
                <h1>User Details</h1>
            <ul>                   
                   {user && user.map((item, index) => (
                        <li key={index}>{ item.email }</li>
                        
                    ))} 
            </ul>
            </div>

        </div>
    )
}

export default Api