import React from 'react';

function Box({ color, width, height }) {
  const style = {
    backgroundColor: color,
    width: width,
    height: height
  }
  return (
    <div className="Box" style={style}>
    </div>
  );
}

export default Box;