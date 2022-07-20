import React from 'react';

import { useCallback } from 'react';

import TreeItem from '@mui/lab/TreeItem';

import { TreeItemProps } from '@mui/lab/TreeItem';
import { DragSourceMonitor,
         useDrag } from 'react-dnd';


const DraggableTreeItem = (props: TreeItemProps) => {

  const [{ isDragging }, drag] = useDrag({
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
    type: 'TreeItem'
  })

  // stop event propagation and thus disable TreeView focus: required to make
  // drop and drag work on seemingly all browsers (except for Firefox); see 
  //   https://github.com/mui/material-ui/issues/29518#issuecomment-990760866
  const ref = useCallback((element: Element) => {
    element?.addEventListener('focusin', (e) => {
      e.stopImmediatePropagation();
    })
    drag(element);
  }, [drag])

  return (
    <TreeItem ref={ref} {...props} style={{ opacity: isDragging ? 0.5 : 1 }}/>
  )
}

export default DraggableTreeItem;
