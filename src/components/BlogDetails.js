import {useParams, useNavigate} from 'react-router-dom'
import useFetch from '../effects/useFetch';
import { deleteBlog } from '../effects/requests';
const BlogsDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch(`/blogs/${id}`)
    const handleClick = () => {
        deleteBlog(id).then(() => {
            navigate('/')
        })
    }
    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
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