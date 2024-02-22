import React from 'react';


function SizedBox({ width, height, children }) {
  return (
    <div style={{ width: width, height: height }}>
      {children}
    </div>
  );
}

export default SizedBox;