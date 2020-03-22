export default function makeId(source) {
  return encodeURIComponent(source.replace(/\W/g, '').toLowerCase().trim());
}
