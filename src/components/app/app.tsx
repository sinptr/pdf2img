/* eslint-disable no-await-in-loop */
import React, { useCallback, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Button, Grid } from '@material-ui/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { UploadButton } from '../upload-button';
import { loadFile, pdfToImage, replaceExtension } from '../../utils';
import { ImageProps } from '../image';
import { ImageList } from '../image-list';
import { pdfjs } from '../../lib';

function App() {
  const [imageList, setImageList] = useState<ImageProps[]>([]);
  const [generating, setGenerating] = useState(false);

  const ref = useRef<HTMLFormElement>(null!);

  const onChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    setImageList([]);
    setGenerating(true);
    // eslint-disable-next-line no-restricted-syntax
    for (const file of files!) {
      const pdf = await pdfjs.getDocument(new Uint8Array(await loadFile(file))).promise;
      const image = await pdfToImage(pdf, 3);
      if (image) {
        const fileName = replaceExtension(file.name, 'png');
        setImageList(l => [...l, { blob: image, name: fileName }]);
      }
    }
    setGenerating(false);

    ref.current.reset();
  }, []);

  const downloadAll = async () => {
    const zip = new JSZip();
    imageList.forEach(({ name, blob }) => {
      zip.file(name, blob);
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'images.zip');
  };

  return (
    <Box p={4}>
      <CssBaseline />
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <form ref={ref}>
            <Grid container spacing={2}>
              <Grid item>
                <UploadButton id="upload" onChange={onChange} color="primary" disabled={generating}>
                  Выбрать файлы
                </UploadButton>
              </Grid>
              {!generating && !!imageList.length && (
                <Grid item>
                  <Button onClick={downloadAll}>Скачать все</Button>
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <ImageList images={imageList} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default hot(App);
