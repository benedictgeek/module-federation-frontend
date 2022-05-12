import React, { Suspense } from "react";

const ChildApp = React.lazy(() => import("child_app/App"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SHELL APP</h1>
        <Suspense>
          <ChildApp />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
