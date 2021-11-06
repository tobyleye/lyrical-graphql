import React  from "react";
import AppHeader from "./components/app-header";

export function App({ children }) {
  return (
    <div className="mui-container">
      <AppHeader />
      {children}
    </div>
  );
}
