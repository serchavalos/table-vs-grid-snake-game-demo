type Coordinate = [number, number];

export class Snake {
  body: Coordinate[] = [...new Array(15)].map((_, index) => [index, 24]);

  move = (inputPos: Coordinate): void => {
    let nextPos = inputPos;
    for (let i = this.body.length - 1; i >= 0; i--) {
      const cached = this.body[i];
      this.body[i] = nextPos;
      nextPos = cached;
    }
  };

  getCoordinates = (): Coordinate[] => this.body;

  getHeadCoordinates = (): Coordinate => this.body[this.body.length - 1];
}
