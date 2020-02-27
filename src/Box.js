import React from 'react';

function Box({ backgroundColor = "red", width = 400, height = 400 }) {
  const style = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`
  }
  return (
    <div className="Box" style={style}>
    </div>
  );
}

export default Box;