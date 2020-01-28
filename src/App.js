import React, { useState, useEffect } from 'react';

//REAL APLICATION

const App = () => {

  //state
//            setState
  const [news,setNews ] = useState ([])
  const [searchQuery, setSearchQuery] = useState ('react') 
  //Method fetch news

  const fetchNews = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    .then(result => result.json() )
    //.then(data=> console.log(data));
    .then(data => setNews(data.hits)) //data hits for one by one (20 news in array)
    .catch(error => console.log(error))
  };

  /// we need to run this method and we gonna used with useEffect
  useEffect(() => {
      fetchNews();
  },[searchQuery]);

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  return(
    <div>
      <h2>News</h2>
      <form>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button>Search</button>
      </form>
      {news.map((n,i) => (
      <p key={i}> {n.title}</p>
      )) }
    </div>
  )
} ;
















////////////  class component //////////////



// class App extends Component {

// state = { 
//   count: 0
// };

// increment = () => {
//   this.setState({
//    count: this.state.count + 1
//   });
// } ;


//  /// for change thew title as a click ///

// componentDidMount(){
//   document.title = `Clicked ${this.state.count} times`
// }
// componentDidUpdate(){
//   document.title = `Clicked ${this.state.count} times`
// }


//   render(){
//     return(
//       <div>
//         <h2> Counter App</h2>
//           <button  onClick={this.increment}>Click {this.state.count} times </button>
//       </div>
//     )
//   }
// }


//////////////////// hooks buttom /////////////

  // const App = () => {
  //       const [count, setCount] = useState(0)

  //       useEffect(() => { 
  //         document.title = `Clicked ${ count } times`
  //       } )

  //       const increment = () => {
  //         setCount(count + 1)
  //       } 

  //     return(
  //     <div>
  //           <h2> Counter App</h2>
  //     <button onClick={ increment }> Clicked {count} times</button> 

  //     </div> 
  //     )

  // }

export default App;
