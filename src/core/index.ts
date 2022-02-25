import * as turf from '@turf/turf'

const matrix = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]

const line = turf.lineString([
  [104.99467, 30.071677],
  [107.13797, 36.550462],
  [112.607082, 34.991467]
]);
const bbox = turf.bbox(line);
const bboxPolygon = turf.bboxPolygon(bbox);
console.log(line);
console.log(bbox);
console.log(bboxPolygon);
