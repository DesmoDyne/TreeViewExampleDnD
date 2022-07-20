import React from 'react';

import { DragSourceMonitor,
         useDrag } from 'react-dnd';

import CustomItem from './CustomItem';

import { CustomItemProps } from './CustomItem';


const DraggableCustomItem = (props: CustomItemProps) => {

  const [{ isDragging }, drag] = useDrag({
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
    type: 'CustomItem'
  })
  
  // TODO: attempting to pass the drag ref directly to CustomItem as in
  //   <CustomItem ref={drag} {...props}/>
  // fails with
  //   TS2769: No overload matches this call.
  //     Type 'ConnectDragSource' is not assignable ...
  //      ... to type 'LegacyRef<CustomItem> | undefined'.
  // CustomItem should not be aware that it's draggable
  // --> as a temporary workaround, wrap in div
  // TODO: style should not be a div, but a CustomItem prop
  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
      <CustomItem {...props}/>
    </div>
  )
}

export default DraggableCustomItem;
