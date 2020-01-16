import './style.scss';
import { createTable, tableData, createButton } from './ladderFuncs';

const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

const request = new XMLHttpRequest();
request.open('GET', 'https://api.squiggle.com.au/?q=standings', true);

request.onload = function apiData() {
  const data = JSON.parse(this.response).standings;

  if (request.status >= 200 && request.status < 400) {
    createTable();
    tableData(data);
    createButton();
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Out of bounds! On the full!';
    container.appendChild(errorMessage);
  }
};

request.send();
