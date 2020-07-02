import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ImageProps, Image } from '../image';

export interface ImageListProps {
  images: ImageProps[];
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '1fr',
    gridGap: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
}));

function ImageList({ images }: ImageListProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {images.map(({ blob, name }) => (
        <Image key={name} blob={blob} name={name} />
      ))}
    </Box>
  );
}

export default ImageList;
