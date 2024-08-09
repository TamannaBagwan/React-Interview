import React from 'react';
import ConditionalRenderer from './conditionalRendering/ConditionalRenderer ';


const App = () => {
  const numberValue = 42;
  const stringValue = "Hello, world!";
  const arrayValue = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      
      <h3>Rendering a Number:</h3>
      <ConditionalRenderer value={numberValue} />

      <h3>Rendering a String:</h3>
      <ConditionalRenderer value={stringValue} />

      <h3>Rendering an Array:</h3>
      <ConditionalRenderer value={arrayValue} />
    </div>
  );
}

export default App;
