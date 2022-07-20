import React from 'react';

import type { CSSProperties } from 'react'

import Box        from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Grid       from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { grey } from '@mui/material/colors';


interface CustomItemProps {
  id:    string;
  color: string;
  title: string;
}

const style: CSSProperties = {
  backgroundColor: 'white',
  borderColor:     grey['400'],
  borderStyle:     'solid',
  borderWidth:     '2px',
  color:           'black',
  // required to resize the item to its contents in tree view:
  //   https://stackoverflow.com/a/3917059
  // TODO: this only fixes the box, not the tree item width
  display:         'inline-block',
  margin:          '5px',
  // required to resize the item to its contents in drop target:
  //   https://stackoverflow.com/a/16765030
  width:           'fit-content'
}


const CustomItem = (props: CustomItemProps) => {
  return (
    <Box style={style}>
      <Grid container sx={{ alignItems: 'center', width: 'auto' }}>
        <CircleIcon sx={{ color: props.color, fontSize: 12, padding: 0.5 }}/>
        <Typography sx={{ paddingRight: '5px' }} variant="body1">
          { props.title }
        </Typography>
      </Grid>
    </Box>
  );
}

export default CustomItem;
export type { CustomItemProps };
