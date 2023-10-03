export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buf = new ArrayBuffer(length);

  const view = new DataView(buf);

  view.setUint8(position, value, true);

  return view;

  // this works too
  // const Int8V = new Int8Array(buf, 0, length);

  // Int8V.set([value], position);

  // return new DataView(buf);
}
