import React from 'react';

function Box({ backgroundColor = "red", width = 400, height = 400, removeBox, id }) {
  const style = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
    display: "inline-block"
  }
  const handleRemove = () => {
    removeBox(id);
  }
  return (
    <div> 
      <div className="Box" style={style}></div>
      <div className="Box-button">
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  );
}

export default Box;