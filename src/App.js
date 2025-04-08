import React from "react";
import Search from "./Search";
import Stories from "./Stories";
import Pagination from "./Pagination";
import Login from "./Login";
import { useGlobalContext } from "./context";

const App = () => {
  const { isLoggedIn, logout } = useGlobalContext();

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <header className="app-header">
        <h1>INDIA NEWS WEBSITE</h1>
        <button onClick={logout} className="logout-btn">Logout</button>
      </header>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
