import React, { Suspense, useEffect, useState } from "react";

import { data } from "childApp/data";
const ChildApp = React.lazy(() => import("childApp/app"));

const App = () => {
  return (
    <div>
      <div>SOME REACT BAREMETAL -- SHELL</div>
      <div>STATE: {data.source}</div>

      <Suspense>
        <ChildApp />
      </Suspense>
    </div>
  );
};

export default App;
