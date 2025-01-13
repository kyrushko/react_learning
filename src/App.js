import React, {useState} from 'react';
import Counter from "./Components/Counter";

function App() {
    const [ value, setValue] = useState("random text");


  return (
    <div className="App">
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;
