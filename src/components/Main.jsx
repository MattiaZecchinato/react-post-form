import { useState } from "react"

export default function Main() {

    const resetPost = {

        nameAuthor: '',
        title: '',
        content: '',
        visibility: false
    };

    const [post, setPost] = useState(resetPost);
    const [postsList, setPostsList] = useState([]);

    function newPost(e) {

        const valueInput = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setPost(post => {

            console.log('Something changed');

            return {
                ...post,
                [e.target.name]: valueInput
            }
        });
    };

    function addPost(e) {

        e.preventDefault();

        const addPost = [...postsList, post];

        setPostsList(addPost);
        setPost(resetPost);
    }

    console.log('New post');
    console.log(post);

    console.log('Posts list');
    console.log(postsList);

    return <>
        <form onSubmit={addPost}>

            <label htmlFor="author-post">Author Name</label>
            <input type="text" name="nameAuthor" id="author-post" value={post.nameAuthor} onChange={newPost} placeholder="Insert author name"/>

            <hr />

            <label htmlFor="title-post">Post Title</label>
            <input type="text" name="title" id="title-post" value={post.title} onChange={newPost} placeholder="Insert post title"/>

            <hr />

            <label htmlFor="content-post">Post Content</label>
            <textarea name="content" id="content-post" value={post.content} onChange={newPost} placeholder="Insert post content ..."/>

            <hr />

            <label htmlFor="visibility-post">Select for private post</label>
            <input name="visibility" id="visibility-post" checked={post.visibility} onChange={newPost} type="checkbox" />

            <hr />

            <button>Submit</button>

        </form>
    </>
}