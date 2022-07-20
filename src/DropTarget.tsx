import React from 'react';

import type { CSSProperties } from 'react'

import Box   from '@mui/material/Box';
import Grid  from '@mui/material/Grid';

import { grey, teal } from '@mui/material/colors';

import { useDrop } from 'react-dnd'

import CustomItem from './CustomItem';

import dropTargetData from './dropTargetData.json';


const baseStyle: CSSProperties = {
  backgroundColor: grey['200'],
  borderColor:     grey['400'],
  borderStyle:     'solid',
  borderWidth:     '2px',
  color:           grey['400'],
  display:         'flex'
}

const canDropStyle: CSSProperties = {
  borderColor:     teal['500']
}

const isOverStyle:  CSSProperties = {
  backgroundColor: teal['200'],
  color:           grey['700']
}

const DropTarget = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ['CustomItem', 'TreeItem'],
    collect: (monitor) => ({
      isOver:  monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const style = canDrop && isOver ? { ...baseStyle,
                                      ...canDropStyle,
                                      ...isOverStyle  } :
                canDrop           ? { ...baseStyle,
                                      ...canDropStyle } :
                                    { ...baseStyle };

  return (
    <Box ref={drop} style={style}>
      <Grid container sx = {{ flexDirection: 'column' }}>
        { dropTargetData.map((item) =>
          <CustomItem color = { item.color }
                      id    = { item.id    }
                      key   = { item.id    }
                      title = { item.title }/>) }
      </Grid>
    </Box>
  )
}

export default DropTarget;
