import React from 'react'

import { PostList } from '../components/Posts/PostList'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import { getPostsById } from '../services/postApi'

const SinglePostPage = () => {
    const {postId} = useParams()
    const {data} = useHttp(getPostsById, postId)

  return (
    <>
     <h1>Post #{postId} </h1>
    <hr/>
    <h2>{data?.title}</h2>
    <p>{data?.body}</p>
    <hr />
    <Link to={'comments'}>Show comments by post</Link>
    <Outlet/>
    </>
   

  )
}

export default SinglePostPage