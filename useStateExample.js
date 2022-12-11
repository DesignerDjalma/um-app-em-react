// 10 builtin hooks
// primitives or building blocks
// userSuperPower()
// only call in top level function App() 

// useState()
import { useState } from 'react';

function App() {

    // what data changes re-render the ui
    const [count, setCount] = useState(0)
    // count -> Reactive Value
    // setCount -> Setter
    // 0 -> default state

    return (
    <>
    <button onClick={() => setCount(count + 1)}>
        {count}
    </button>
    </>
    );
}











