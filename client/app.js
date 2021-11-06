import React from "react";
import AppHeader from "./components/app-header";

export function App({ children }) {
  return (
    <div>
      <AppHeader />
      <main>
        <div className="mui-container">{children}</div>
      </main>
    </div>
  );
}
