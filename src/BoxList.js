import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

function BoxList() {
  //state
  const [boxes, setBoxes] = useState([]);

  //render boxes array
  //will need to iterate over boxes
  const renderBoxes = () => {
    return (
      <div className="BoxList-renderBoxes">
        {boxes.map(box => (
          <Box key={box.id}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
          />
        ))}
      </div>
    );
  };

  //addBox to array of boxes
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };
  
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;