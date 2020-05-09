export const render = (
  elementId: string,
  limitRows: number,
  limitCells: number,
  mode: "table" | "grid" = "table"
): void => {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`element with id ${elementId} was not found`);
  }

  if (mode === "table") {
    const table = renderTable(limitRows, limitCells);
    container.appendChild(table);
    return;
  }

  const grid = renderGrid(limitRows, limitCells);
  container.appendChild(grid);
};

const renderTable = (
  limitRows: number,
  limitCells: number
): HTMLTableElement => {
  const table = document.createElement("table");
  const tableBody = document.createDocumentFragment();

  for (let i = 0; i < limitRows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < limitCells; j++) {
      const td = document.createElement("td");
      td.classList.add("cell", `row-${i}`, `cell-${j}`);
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  return table;
};

const renderGrid = (limitRows: number, limitCells: number): HTMLDivElement => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  const styleElem = document.createElement("style");
  styleElem.textContent = `
    .grid {
      display: grid;
      grid-template-columns: repeat(${limitCells}, 7px);
      grid-template-rows: repeat(${limitRows}, 7px);
    }
  `;

  const gridBody = document.createDocumentFragment();
  for (let i = 0; i < limitRows; i++) {
    for (let j = 0; j < limitCells; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell", `row-${i}`, `cell-${j}`);
      gridBody.appendChild(cell);
    }
  }

  grid.appendChild(gridBody);
  grid.appendChild(styleElem);

  return grid;
};
