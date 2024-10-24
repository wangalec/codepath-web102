import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { supabase } from "../client"

const DisplayPosts = () => {
    const[posts, setPosts] = useState();

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        const {data} = await supabase.from('Posts').select()
        console.log(data);
        setPosts(data);
    }

    return(
        <>
            {posts && posts.length > 0 ?
                posts.map((post) => 
                    <>
                        <h2> {post.title} </h2>
                        <p> {post.description} </p>
                        {/* <Link to={`/edit/${post.id}`}> Edit Player</Link> */}
                    </>
                )
            : 
                <>
                    <h2> No Posts Found</h2>
                </>
            }
        </>
    )
}

export default DisplayPosts