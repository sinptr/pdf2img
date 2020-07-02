export default function replaceExtension(fileName: string, newExtension: string) {
  return fileName.split('.').slice(0, -1).concat(newExtension).join('.');
}
