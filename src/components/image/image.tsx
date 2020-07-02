import React, { useCallback, useState } from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
  Grid,
} from '@material-ui/core';
import { saveAs } from 'file-saver';
import { blobToBase64 } from '../../utils';

export interface ImageProps {
  blob: Blob;
  name: string;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  actions: {
    marginTop: 'auto',
  },
  preview: {
    maxHeight: '100%',
    overflow: 'auto',
    maxWidth: '80%',
    margin: '0 auto',
  },
  img: {
    maxWidth: '100%',
  },
});

function Image({ blob, name }: ImageProps) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const classes = useStyles();

  const download = useCallback(() => {
    saveAs(blob, name);
  }, [blob, name]);

  const openModal = () => {
    if (!url) {
      blobToBase64(blob).then(setUrl);
    }
    setOpen(true);
  };

  const close = () => setOpen(false);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={openModal}>
          <CardContent>
            <Typography noWrap gutterBottom variant="subtitle1" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary" onClick={download}>
            Скачать
          </Button>
        </CardActions>
      </Card>
      <Modal open={open} onClose={close}>
        <Grid container justify="center" className={classes.preview}>
          <img className={classes.img} src={url} alt={name} />
        </Grid>
      </Modal>
    </>
  );
}

export default Image;
