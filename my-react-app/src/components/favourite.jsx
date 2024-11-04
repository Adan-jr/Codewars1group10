import React from 'react';  
import ReactDOM from 'react-dom';  
import './App.css';  

// Header  
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;  

// CodewarsLink Component  
var CodewarsLink = (props) => {  
    return (  
        <a href={`http://www.codewars.com/users/${props.user}`}>{props.user}</a>  
    );  
};  

// Leaderboard Component  
var Leaderboard = (props) => {  
    return (  
        <div>  
            {props.leaders.map((leader, index) => (  
                <a key={index} href={`http://www.codewars.com/users/${leader}`}>{leader}</a>  
            ))}  
        </div>  
    );  
};  

// Main App Component  
var App = () => {  
    var leaders = ['Sch3lp', 'nplus', 'jhoffner', 'GiacomoSorbi', 'ZozoFouchtra']; // Example leaders array  
    
    return (  
        <div>  
            {myHeader}  
            <CodewarsLink user='noLan' />  
            <Leaderboard leaders={leaders} />  
        </div>  
    );  
};  

// Render the App Component  
ReactDOM.render(<App />, document.getElementById('root'));