type Coordinate = [number, number];

export type SnakeType = {
  move: (inputPos: Coordinate) => void;
  getCoordinates: () => Coordinate[];
  getHeadCoordinates: () => Coordinate;
};

export const Snake = (): SnakeType => {
  let body: Coordinate[] = [...new Array(10)].map((_, index) => [index, 24]);

  return {
    // inputPos: [x, y]
    move: (inputPos: Coordinate): void => {
      let nextPos = inputPos;
      for (let i = body.length - 1; i >= 0; i--) {
        const cached = body[i];
        body[i] = nextPos;
        nextPos = cached;
      }
    },
    getCoordinates: (): Coordinate[] => {
      return body;
    },
    getHeadCoordinates: (): Coordinate => {
      return body[body.length - 1];
    },
  };
};
