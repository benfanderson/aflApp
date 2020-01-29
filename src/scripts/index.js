import '../style.scss';
import { createTable, tableData, createButton } from './ladderFuncs';
import thisYear from './yearFunc';

const parser = require('fast-xml-parser');


const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

const request = new XMLHttpRequest();
request.open('GET', 'https://api.squiggle.com.au/?q=standings;format=xml', true);

request.onload = function apiData() {
  const jsonObject = parser.parse(this.response);
  const data = jsonObject.standings.anon;

  if (request.status >= 200 && request.status < 400) {
    const title = document.createElement('h1');
    container.appendChild(title);
    title.innerHTML = `${thisYear()} AFL Premiership Season`;
    createButton();
    createTable();
    tableData(data);
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Out of bounds! On the full!';
    container.appendChild(errorMessage);
  }
};

request.send();
