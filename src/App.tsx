import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "components/Header";
import router from "routes/router";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
