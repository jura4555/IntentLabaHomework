import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../components/Post';
import './postDetails.scss'

const PostDetails: React.FC = () => {
    const [post, setPost] = useState<Post | null>(null);
    const { postId } = useParams<{ postId: string }>();

    useEffect(() => {
        fetchPostDetails();
    }, [postId]);

    const fetchPostDetails = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            if (!response.ok) {
                throw new Error('Failed to get post');
            }
            const data: { id: number; title: string; body: string } = await response.json();
            const post: Post = { id: data.id, title: data.title, body: data.body };
            setPost(post);
        } catch (error) {
            console.error('An error occurred while receiving data:', error);
        }
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='post-details-container'>
            <h2>Post Details</h2>
            <p><strong>Title: </strong>{post.title}</p>
            <p><strong>Info: </strong>{post.body}</p>
        </div>
    );
}

export default PostDetails;