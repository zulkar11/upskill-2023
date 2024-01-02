import React, { useState, useTransition } from 'react';

const ComponentA = () => <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Component A</div>;
const ComponentB = () => <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Component B</div>;

function App() {
  const [showComponentA, setShowComponentA] = useState(true);
  const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

  const handleButtonClick = () => {
    startTransition(() => {
      setShowComponentA((prev) => !prev);
    });
  };

  return (
    <div>
      <h1>useTransition Example</h1>
      {isPending && <p>Loading...</p>}
      <React.Suspense fallback={<p>Loading...</p>}>
        {showComponentA ? <ComponentA /> : <ComponentB />}
      </React.Suspense>
      <button onClick={handleButtonClick}>Toggle Component</button>
    </div>
  );
}

export default App;
