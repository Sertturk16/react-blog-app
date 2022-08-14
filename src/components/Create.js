import { useState } from "react"
import { addBlog } from "../firebase"
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const blog = {title, body, author}
        addBlog(blog)
        .then(() => {
            navigate('/')
        })
        .finally(() => {
            setIsPending(false)
        })
    }
    // const [author, setAuthor] = useState('')
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type= "text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button disabled={isPending}>{isPending ? 'Adding Blog' : 'Add Blog'}</button>
            </form>
        </div>
    )
}
 
export default Create;