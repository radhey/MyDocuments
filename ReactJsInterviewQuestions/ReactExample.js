//Counter class component
import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>count:{this.state.count}</button>
      </div>
    );
  }
}
export default Counter;

//Counter functional component
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Counter:{count}</button>
    </div>
  );
}
export default Counter;




//////////////////////////////////////
////multiple API calls simultaneously in react js
React.useEffect(()=>{
  Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts'),
      fetch('https://jsonplaceholder.typicode.com/users')
  ]).then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
          return response.json();
      }));
  }).then(function (data) {
      // Log the data to the console
      // You would do something with both sets of data here
      console.log(data);
  }).catch(function (error) {
      // if there's an error, log it
      console.log(error);
  });
  },[])

  ////multiple API calls simultaneously in react js for class component

  // async componentDidMount() {
  //   const [books, authors, shops] = await Promise.all([
  //     APIManager.fetchBooks(),
  //     APIManager.fetchAuthor(),
  //     APIManager.fetchShops(),
  //   ]);
  
  //   this.handleBooks(books);
  //   this.handleAuthors(authors);
  //   this.handleShops(shops);
  // }
  /////////////////////////////////////