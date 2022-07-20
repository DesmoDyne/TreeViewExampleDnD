import React from 'react';

import Grid from '@mui/material/Grid';

import { DndProvider  } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import DropTarget from './DropTarget';
import TreeViewDraggableCustomItem from './TreeViewDraggableCustomItem';
import TreeViewDraggableTreeItem   from './TreeViewDraggableTreeItem';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container sx = {{ margin: '1rem' }}>
        <Grid container sx = {{ flexDirection: 'column' }} xs = { 6 } >
          <h4>TreeView with draggable tree item:</h4>
          <TreeViewDraggableTreeItem/>
        </Grid>
        <Grid container sx = {{ flexDirection: 'column' }} xs = { 5 } >
          <h4>Drop target:</h4>
          <DropTarget/>
        </Grid>
        <Grid container sx = {{ flexDirection: 'column' }} xs = { 6 } >
          <h4>TreeView with draggable custom item:</h4>
          <TreeViewDraggableCustomItem/>
        </Grid>
        <Grid container sx = {{ flexDirection: 'column' }} xs = { 5 } >
          <h4>Drop target:</h4>
          <DropTarget/>
        </Grid>
      </Grid>
    </DndProvider>
  );
}

export default App;
