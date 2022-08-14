import BlogList from "./BlogList";
import { useBlogsListener } from "../firebase";
const Home = () => {
    const blogs = useBlogsListener()
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home