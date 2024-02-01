import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList";

//console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name ={blogData.name}/>
      <About image={blogData.image}/>
      <ArticleList postArray ={blogData.postArray} />
    </div>
  );
}

export default App;
