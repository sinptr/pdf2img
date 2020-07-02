import { PDFDocumentProxy } from 'pdfjs-dist';
import { mergeImages } from './index';

function* pdfIterator(pdf: PDFDocumentProxy) {
  for (let i = 1; i <= pdf.numPages; i += 1) {
    yield pdf.getPage(i);
  }
}

export default async function pdfToImage(pdf: PDFDocumentProxy, scale = 2) {
  const canvas = document.createElement('canvas').transferControlToOffscreen();

  const context = canvas.getContext('2d')!;
  const imageData: ImageData[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const page of pdfIterator(pdf)) {
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport,
    };
    // @ts-ignore
    await page.render(renderContext).promise;
    imageData.push(context.getImageData(0, 0, canvas.width, canvas.height));
  }

  return mergeImages(imageData);
}
