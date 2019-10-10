import React,{useState,useContext,createContext} from 'react';
import './App.css';

const CountContext = createContext(0);

function Bar(){
    const count = useContext(CountContext);
    return (
        <div>{count}</div>
    )
}
function App(props) {

    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={count}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
                <Bar/>
            </CountContext.Provider>
        </div>
    );
}

export  default  App;
