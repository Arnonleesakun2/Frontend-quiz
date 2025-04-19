export type ShapeType = "square" | "circle" | "oval" | "trapezoid" | "rectangle" | "parallelogram";

export const moveShape = (shapes: ShapeType[], direction: "left" | "right"): ShapeType[] => {
  const newShapes = [...shapes];
  if (direction === "left") {
    const first = newShapes.shift();
    if (first) newShapes.push(first);
  } else {
    const last = newShapes.pop();
    if (last) newShapes.unshift(last);
  }
  return newShapes;
};

export const switchPosition = (shapes: ShapeType[]): ShapeType[] => {
  const newShapes = [...shapes];
  const top = newShapes.slice(0, 3);
  const bottom = newShapes.slice(3, 6);
  return [...bottom, ...top];
};

export const randomShapes = (shapes: ShapeType[]): ShapeType[] => {
  return [...shapes].sort(() => Math.random() - 0.5);
};

export const shapeComponents: ShapeType[] = [
  "square",
  "circle",
  "oval",
  "trapezoid",
  "rectangle",
  "parallelogram",
];