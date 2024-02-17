import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../components/Post';
import './postList.scss'


const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to get data');
      }
      const data: { id: number; title: string; body: string }[] = await response.json();
      const initialPost: Post[] = data.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body
      }));
      setPosts(initialPost);
    } catch (error) {
      console.error('An error occurred while receiving data:', error);
    }
  }

  return (
    <div className='post-list-container'>
      <h2>Post List</h2>
      <nav>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PostList;
