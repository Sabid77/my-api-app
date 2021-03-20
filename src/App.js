import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>
        Here Is {post.length} Post.
      </h1>
      <div className='body-section'>
        <div className='post-section'>
          {
            post.map(post => (
              <div className="post-container">
                <h3 id='post-text'>{post.title}</h3>
                <p id='post-text'>
                  {post.body}
                </p>
                <button id='more-btn' onClick={() => {
                  setCount(count + 1)
                }}>Know More</button>
              </div>
            ))
          }
        </div>
        <div className='cart'>
          <h3>Added Post: {count}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
