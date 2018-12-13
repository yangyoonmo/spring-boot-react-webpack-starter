import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title : 'Woo',
    url : 'https://reactjs.org/',
    author : 'In Jae',
    num_comments : 1, 
    points: 3,
    objectID : 0,

  },
  {
    title : 'Yang',
    url : 'https://reactjs.org/',
    author : 'Yoon Mo',
    num_comments : 3, 
    points: 4,
    objectID : 1,

  },
  {
    title : 'Choi',
    url : 'https://reactjs.org/',
    author : 'Suk Jin',
    num_comments : 2, 
    points: 6,
    objectID : 2,

  },
  {
    title : 'Yoon',
    url : 'https://reactjs.org/',
    author : 'Suk Jae',
    num_comments : 2, 
    points: 6,
    objectID : 3,

  },
]
const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const largeColumn = { width : '40%', }
const midColumn = { width : '30%', }
const smallColumn = { width : '10%', }

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onClickMe = () => console.log(this);
    this.onSearchChage = this.onSearchChage.bind(this);
  }
  
  onDismiss(id) {

    // # Case 1
    const updateList1 = this.state.list.filter(function isNotId(item) {
      return item.objectID !== id;
    });
    
    // # Case 2
    function isNotId2(item) { 
      return item.objectID !== id;
    }
    const updateList2 = this.state.list.filter(isNotId2);

    // # Case 3
    const isNotId3 = item => item.objectID !== id;
    const updateList3 = this.state.list.filter(isNotId3);

    // # Case 4
    const updateList4 = this.state.list.filter(item => item.objectID !== id);

    this.setState( {list:updateList3} );
  }

  onSearchChage(event){
    console.log(event);
    console.log(event.target);
    this.setState({searchTerm: event.target.value})
  }

  render() {

    const {searchTerm, list}  = this.state;

    return (
      <div className="App">
        <div className="page">
          <div className="interactions">
            <Search 
              value={searchTerm} 
              onChange={this.onSearchChage} 
              hello="test" 
            >
              Search
            </Search>
          </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
        {/* 
        <div>
          <button 
            onClick={this.onClickMe}
            type="button"
          >
           Click Me
          </button>
        </div> 
        */}

        {/* 
        <form>
          <input 
            type="text"
            value={searchTerm}
            onChange={this.onSearchChage}
          />
        </form>  
        */}

        {/* 
        {this.state.list.filter(isSearched(searchTerm)).map(item =>
        //{this.state.list.map(item => 
          {
            const onHandlerDismiss = () => this.onDismiss(item.objectID);

            return(
              <div key={item.objectID}>
                <span>
                    <a href={item.url}> {item.title} </a>
                </span>
                <span> / {item.author} </span>
                <span> / {item.num_comments} </span> 
                <span> / {item.points} </span>
                <span> / {item.objectID} </span> 
                <span> 
                  <button onClick={onHandlerDismiss} type="button"> dismiss </button> 
                </span>
              </div>
            );
          }
        )} 
        */}
      </div>
    );
  }
}


class Search extends Component {
  render(){
    const { value, onChange, children } = this.props;
    console.log("============================");
    console.log(this.props);
    console.log(value);
    console.log(onChange);
    console.log(children);
    return (
      <form>
        {children}
        <input 
         type="text"
         value={value}
         onChange={onChange}
      />
      </form>
    );
  };
}


class Table extends Component {
  render(){
    const { list, pattern, onDismiss } = this.props;
    return (
      <div className="table">
        {list.filter(isSearched(pattern)).map(item => 
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}> {item.title} </a>
            </span>
            <span style={midColumn}>
              {item.author}
            </span>
            <span style={smallColumn}>
              {item.num_comments}
            </span>
            <span style={smallColumn}>
              {item.points}
            </span>
            <span style={smallColumn}> 
              <Button 
                onClick={ () => onDismiss(item.objectID)} 
                className="button-inline"
              >
                Dismiss
              </Button>
              {/* <button 
                onClick={ () => onDismiss(item.objectID) }
                type="button"
              >
                Dismiss  
              </button> */}
            </span>
          </div>
        )}
      </div>
    );
  };
}


class Button extends Component {
  render(){
    const {
      onClick,
      className,
      children,
    } = this.props;

    return (
      <button 
        onClick = {onClick}
        className = {className}
        type = "button"
      >
        {children}
      </button>
    );
  }
}

export default App;
