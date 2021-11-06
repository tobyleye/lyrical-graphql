import React  from "react";

export function App({ children }) {
  return (
    <div className="mui-container">
      <h3 className="mui--text-center">Lyrical</h3>
      {children}
    </div>
  );
}
