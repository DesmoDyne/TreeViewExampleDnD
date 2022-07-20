import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon   from '@mui/icons-material/ExpandMore';
import TreeView         from '@mui/lab/TreeView';

import DraggableTreeItem from './DraggableTreeItem';

import itemData from './itemData.json';


interface ItemNode {
  id:        string;
  color:     string;
  title:     string;
  children?: readonly ItemNode[];
}

const TreeViewDraggableTreeItem = () => {

  const renderTree = (node: ItemNode) => (
    <DraggableTreeItem key    = { node.id    }
                       nodeId = { node.id    }
                       label  = { node.title }>
      {Array.isArray(node.children)
        ? node.children.map((node) => renderTree(node))
        : null}
    </DraggableTreeItem>
  );

  return (
      <TreeView defaultCollapseIcon = { <ExpandMoreIcon/>   }
                defaultExpandIcon   = { <ChevronRightIcon/> }
                defaultExpanded     = {['0', '2', '4']}>
        { renderTree(itemData) }
      </TreeView>
  );
}

export default TreeViewDraggableTreeItem;
