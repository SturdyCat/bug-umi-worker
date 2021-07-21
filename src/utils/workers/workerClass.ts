import { fileChunk } from '../upload';

// eslint-disable-next-line no-restricted-globals
const worker: Worker = self as any;

export default class WorekrClass {
  constructor() {
    worker.onmessage = async ({ data }) => {
      worker.postMessage(`worker 收到: ${data}`);
    };
  }
}
