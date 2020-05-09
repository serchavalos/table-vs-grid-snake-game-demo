// 'up' | 'down' | 'left' | 'right'
// direction = 'left'

// TODO: Should we just use a class??
export const Snake = () => {
  // [[x1, y1], [x2, y2]... [xN, yN]]
  let body = [...new Array(10)].map((_, index) => [index, 24]);

  return {
    // inputPos: [x, y]
    move: (inputPos) => {
      let nextPos = inputPos;
      for (let i = body.length - 1; i >= 0; i--) {
        const cached = body[i];
        body[i] = nextPos;
        nextPos = cached;
      }
    },
    getCoordinates: () => {
      return body;
    },
    getHeadCoordinates: () => {
      return body[body.length - 1];
    },
  };
};
