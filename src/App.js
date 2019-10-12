import React, {useState, useMemo, PureComponent, useEffect, useCallback, useRef} from 'react';
import './App.css';

class Counter extends PureComponent {
    render() {
        const {props} = this;
        return (
            <h1 >{props.count}</h1>
        )
    }
}

function useCounter(defaultCounter){
    const [count, setCount] = useState(defaultCounter);
    const it = useRef();

    useEffect(()=>{
        it.current = setInterval(()=>{
            setCount((count)=>count+1)
        },1000)
    },[]);

    useEffect(()=>{
        if(count>=10){
            clearInterval(it.current);
        }
    });

    return [count,setCount]
}

function App(props) {
    const [count, setCount] = useCounter(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <Counter count={count} />
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default App;
