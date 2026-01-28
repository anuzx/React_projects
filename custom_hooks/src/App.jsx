import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [postId, setPostId] = useState(1);
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  if (loading) {
    return (
          
        <div>
          <img src="./public/loading.png"></img>
        </div>
      
    );
  }
  return (
    <div>
      {JSON.stringify(data)}
      <button onClick={() => setPostId(1)}>1</button>
      <button onClick={() => setPostId(2)}>2</button>
      <button onClick={() => setPostId(3)}>3</button>
    </div>
  );
}

export default App;
