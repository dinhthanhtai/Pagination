import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Posts from './components/posts';
import Pagination from './components/pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, [])

  // Get current post 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  // Change page
  const paginate = (number) => {
    setCurrentPage(number)
  }
  
  return (
    <div className="App">
      <h1> My app </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}
      />
    </div>
  )
}

export default App
