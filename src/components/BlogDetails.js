import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import { deleteBlog, getBlog } from '../firebase';
const BlogsDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    getBlog(id).then((res) => {
        setBlog(res)
    })
    const handleClick = () => {
        deleteBlog(id).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="blog-details">
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )
            }
        </div>
    );
}
 
export default BlogsDetail;