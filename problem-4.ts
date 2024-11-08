type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shapeArea: Shape): number | Error => {
  if (shapeArea.shape === "circle") {
    return +(Math.PI * shapeArea.radius * shapeArea.radius).toFixed(2);
  } else if (shapeArea.shape === "rectangle") {
    return shapeArea.height * shapeArea.width;
  }
  return new Error("Invalid shape type");
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
