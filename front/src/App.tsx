import React, { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState<{ title: string; text: string }>();

  useEffect(() => {
    fetch("http://127.0.0.1:8080/main", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((response) => setState(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      {state && (
        <>
          <h2>{state.title}</h2>
          <p>{state.text}</p>
        </>
      )}
    </div>
  );
}

export default App;
