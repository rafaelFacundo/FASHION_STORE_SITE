import React from "react";
import { RouterProvider } from "react-router-dom";
import Header from "components/Header";
import router from "routes/router";
import Footer from "components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
