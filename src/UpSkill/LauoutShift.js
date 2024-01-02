import React, { useState, useLayoutEffect, useRef } from 'react';
const ResizeComponent = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();
  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(boxRef.current.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div>
      <div ref={boxRef} style={{ width: '50%', border: '1px solid black', padding: '20px' }}> Resize me!</div>
    <p>Width: {width}px</p></div>
  );
};
const App = () => {
  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <ResizeComponent />
    </div>
  );
};

export default App;
