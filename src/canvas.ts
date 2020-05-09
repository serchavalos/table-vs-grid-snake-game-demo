export const renderTable = (
  elementId: string,
  limitRows: number,
  limitCells: number
): void => {
  const container = document.getElementById(elementId);
  if (!container) {
    throw new Error(`element with id ${elementId} was not found`);
  }

  const table = document.createElement("table");
  const tableBody = document.createDocumentFragment();

  for (let i = 0; i < limitRows; i++) {
    const tr = document.createElement("tr");
    tr.className = `row-${i}`;
    for (let j = 0; j < limitCells; j++) {
      const td = document.createElement("td");
      td.classList.add(`cell-${j}`);
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  container.appendChild(table);
};
