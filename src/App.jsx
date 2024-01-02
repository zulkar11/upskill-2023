import React from "react";
import { useDeferredValue } from "react";
import { useMemo } from "react";

function App({ input }) {
  const [ipValue, setIpValue] = useState("");
  function handleChange(e) {
    setIpValue(e.target.value);
  }

    let deferredInput = useDeferredValue(input)
  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < 20000; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  return (<div>
      <input type="text" value={ipValue} onChange={(e) => {handleChange(e);}}/>
    <p>{list} </p>
    
    </div>);
}

export default App;