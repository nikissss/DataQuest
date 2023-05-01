import React, { useEffect, useState } from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Item from "./Item";


const reorder = (list, startIndex, endIndex)=>{
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex,0,removed);
    return result;
};

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver? 'lightblue' : 'lightgrey',
    padding: 8,
    width: 250,
});

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: 16,
    margin: '0 0 8px 0',
    background: isDragging? 'lightgreen' : 'grey',
    ...draggableStyle
})

const DragDrop = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        setData(Item);
    },[]);

    const onDragEnd = (result) => {
        if(!result.destination){
            return;
        }
        const reorderedItems = reorder(
            data, 
            result.source.index, 
            result.destination.index
        );
        //axios.post().then(setData(reorderedItems))
        console.log(reorderedItems);
        setData(reorderedItems);
    };
    return (
    <div className="main_content">
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {
                            data.map((item, index) => (
                                <Draggable key={item.id} draggableId="item.id" index={index}>
                                    {(provided, snapshot) => (
                                        <div className="card" 
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style = {getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    </div>
    );
};

export default DragDrop;