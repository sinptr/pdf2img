import pdfjs from 'pdfjs-dist';
// @ts-ignore
import Worker from 'pdfjs-dist/build/pdf.worker';

if (typeof window !== 'undefined' && 'Worker' in window) {
  // @ts-ignore
  pdfjs.GlobalWorkerOptions.workerPort = new Worker();
}

export default pdfjs;
