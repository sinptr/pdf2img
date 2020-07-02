// @ts-ignore
// eslint-disable-next-line no-restricted-globals
const ctx: Worker = self as any;

function getHeight(images: ImageData[]) {
  return images.reduce((acc, { height }) => acc + height, 0);
}

function getWidth(images: ImageData[]) {
  return images.reduce((max, { width }) => Math.max(max, width), 0);
}

interface Data {
  images?: ImageData[];
  canvas?: OffscreenCanvas;
}

interface MergeMessageEvent extends MessageEvent {
  data: Data;
}

ctx.onmessage = ({ data }: MergeMessageEvent) => {
  const { images, canvas } = data || {};

  if (canvas && images) {
    canvas.height = getHeight(images);
    canvas.width = getWidth(images);

    const context = canvas.getContext('2d')!;

    let dy = 0;
    images.forEach(imageData => {
      context.putImageData(imageData, 0, dy);
      dy += imageData.height;
    });

    canvas.convertToBlob().then(blob => {
      ctx.postMessage(blob);
    });
  }
};
