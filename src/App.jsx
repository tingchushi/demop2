const url =
  "https://api.themoviedb.org/3/trending/tv/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf";

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data));

  function App() {

  return (
    <div className="App">
      <h1>Demo</h1>
    </div>
  )
}

export default App

// const url =
//   "https://api.themoviedb.org/3/trending/movie/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function App() {
//   return (
//     <div className="App">
//       <h1>Demo</h1>
//     </div>
//   );
// }

// export default App;

