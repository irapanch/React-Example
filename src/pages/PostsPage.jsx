import React, { useState } from 'react'

import { Posts } from '../components/Posts/Posts'
import { useHttp } from '../hooks/useHttp'
import { getPostsByQuery } from '../services/postApi'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

const PostsPage = () => {
   
  return (
   <Posts/>
  )
}

export default PostsPage

// const PostsPage = () => {
//   const {
//     register,
//     handleSubmit
//   } = useForm()
  
//   const submit = (data) => {
   
//     setSearchParams({test: data.queryStr })
//   }

//   const[searchParams, setSearchParams] = useSearchParams()
//     const {data} = useHttp(getPostsByQuery, '')
//   return (
//     <>
//     <form onSubmit={handleSubmit(submit)}>
//       <input {...register('queryStr', {required: true, minLength:2 })} type='text'/>
//       <button>Search</button>
//     </form>
//     <ol>
//         {data?.map(post => (
//             <li key={post.id}>
//                <h2>{post.title}</h2>
//             </li>))}
//     </ol>
//     </>
    
//   )
// }

// export default PostsPage