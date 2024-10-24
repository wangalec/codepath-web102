import { useState } from "react"
import { supabase } from "../client";

const CreatePost = () => {

    const[post, setPost] = useState({title: "", description: ""});

    const createPost = async (event) => {
        event.preventDefault();
        await supabase.from('Posts').insert(
            {
                title: post.title, 
                description: post.description
            }).select();
        
            window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log("key: ", name, " value: ", value);
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return(
        <>
            <form>
                <label> Title </label>
                <input type="text" name="title" value={post.title} onChange={handleChange}/>
                <br/>

                <label> Description</label>
                <textarea rows="5" cols="50" type="text" name="description" value={post.description} onChange={handleChange}/>
                <br/>

                <button onClick={createPost}> Submit </button>
            </form>
        </>
    )
}

export default CreatePost