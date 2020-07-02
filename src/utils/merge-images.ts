// @ts-ignore
import ImageWorker from '../workers/merge-images.worker';

export default function mergeImages(images: ImageData[]): Promise<Blob | null> {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas').transferControlToOffscreen();
    const worker = new ImageWorker() as Worker;
    worker.postMessage({ canvas, images }, [canvas]);

    worker.addEventListener('message', ({ data }) => {
      resolve(data);
      worker.terminate();
    });
  });
}
