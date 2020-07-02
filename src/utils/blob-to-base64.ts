export default function blobToBase64(blob: Blob): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      const base64 = (target?.result ?? '') as string;
      resolve(base64);
    };

    reader.readAsDataURL(blob);
  });
}
