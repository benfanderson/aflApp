import './style.scss';
import { createTable, tableData } from './ladderFuncs';

const root = document.createElement('div');
document.body.appendChild(root);


const container = document.createElement('div');
container.setAttribute('class', 'container');
root.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.squiggle.com.au/?q=standings', true);


// eslint-disable-next-line func-names
request.onload = function () {
  const data = JSON.parse(this.response).standings;

  if (request.status >= 200 && request.status < 400) {
    createTable();
    tableData(data);
    const button = document.createElement('button');
    container.appendChild(button);
    button.innerHTML = 'Expand ladder';

    button.addEventListener('click', () => {
      const expandedColumns = document.getElementsByClassName('extendedTable');

      for (let i = 0; i < expandedColumns.length; i++) {
        const style = getComputedStyle(expandedColumns[i]);
        if (style.display === 'none') {
          expandedColumns[i].style.display = 'table-cell';
          button.innerHTML = 'Show less info';
        } else {
          expandedColumns[i].style.display = 'none';
          button.innerHTML = 'Expand ladder';
        }
      }
    });
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Out of bounds! On the full!';
    root.appendChild(errorMessage);
  }
};
request.send();
