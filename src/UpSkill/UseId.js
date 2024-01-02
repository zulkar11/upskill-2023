import React, { useId} from 'react';



function App() {
  const randomId = useId();

  const randomIdk = useId();

  return (
    <div>
      <h1>{randomId}</h1>
      <h1>{randomIdk}</h1>

    </div>
  );
}

export default App;
