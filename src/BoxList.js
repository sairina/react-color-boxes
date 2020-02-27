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
        {boxes.map(({id, backgroundColor, width, height, removeBox}) => (
          <Box key={id}
            id = {id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            removeBox={removeBox}
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

  //removeBox from array of boxes
  const removeBox = id => {
    setBoxes(boxes.filter(box=> box.id !== id));
  } 
  
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList;