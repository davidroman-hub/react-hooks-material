import React, { useState, useEffect } from 'react';

//REAL APLICATION

const App = () => {

  //state
//            setState
  const [news,setNews ] = useState ([])
  const [searchQuery, setSearchQuery] = useState ('react') 
  const [url, setUrl] = useState ('http://hn.algolia.com/api/v1/search?query=react ') // by default we gonna use this url
  const [loading, setLoading] = useState(false)
  
  
  //Method fetch news

  const fetchNews = () => {
    
    //set loading method true
    setLoading(true) // when is charging the page its true but..
    
    fetch(url)
    .then(result => result.json() )
    //.then(data=> console.log(data));
    .then(data => (setNews(data.hits),setLoading(false)))// after when we get the data is false, //data hits for one by one (20 news in array)
    .catch(error => console.log(error))

  };

  /// we need to run this method and we gonna used with useEffect
  useEffect(() => {
      fetchNews();
  },[url]);


  // handleChange method

  const handleChange = e => {
    setSearchQuery(e.target.value)
  };

  //Set url method
  const handleSubmit = e => { 
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`
    )
  }

  const showLoading = () => (loading ? <h2> loading...</h2> : '')
  
  const searchForm = () => (
      <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange}/>
      <button>Search</button>
    </form>
  ) 

  const showNews = () => (
    news.map((n,i) => (
        <p key={i}> {n.title}</p>
      )) 
    )
         
    
  



  return(
    <div>
      <h2>News</h2>
      {showLoading()}
      {searchForm()} 
      {showNews()}
      
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
