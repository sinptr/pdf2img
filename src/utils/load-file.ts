export default function loadFile(file: File): Promise<ArrayBuffer> {
  return new Promise(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = e => resolve(e.target!.result as ArrayBuffer);
    fileReader.readAsArrayBuffer(file);
  });
}
