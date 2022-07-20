import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon   from '@mui/icons-material/ExpandMore';
import TreeItem         from '@mui/lab/TreeItem';
import TreeView         from '@mui/lab/TreeView';

import DraggableCustomItem from './DraggableCustomItem';

import itemData from './itemData.json';


interface ItemNode {
  id:        string;
  color:     string;
  title:     string;
  children?: readonly ItemNode[];
}

const TreeViewDraggableCustomItem = () => {

  const renderTree = (node: ItemNode) => (
    <TreeItem key    = { node.id }
              nodeId = { node.id }
              label  = { <DraggableCustomItem color = { node.color }
                                              id    = { node.id    }
                                              title = { node.title }/> }>
      {Array.isArray(node.children)
        ? node.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
      <TreeView defaultCollapseIcon = { <ExpandMoreIcon/>   }
                defaultExpandIcon   = { <ChevronRightIcon/> }
                defaultExpanded     = {['0', '2', '4']}>
                { renderTree(itemData) }
      </TreeView>
  );
}

export default TreeViewDraggableCustomItem;
