import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [post, setPost] = useState([]);

  const postComponent = post.map((post) => (
    <Card name={post.name} description={post.description} />
  ));

  function addPost() {
    setPost([
      ...post,
      {
        name: "Anuj",
        description: "i am a fullstack developer and i like to hack websites",
      },
    ]);
  }

  function delPost() {
    setPost([]);
  }

  return (
    <div>
      <button className="btn" onClick={addPost}>
        Add Post
      </button>
      <button className="btn" onClick={delPost}>
        Del Post 
      </button>
      {postComponent}
    </div>
  );
}

export default App;
