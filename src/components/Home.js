import BlogList from "./BlogList";
import useFetch from "../effects/useFetch";
const Home = () => {
    const {data: blogs, isPending, error} = useFetch('/blogs')
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home