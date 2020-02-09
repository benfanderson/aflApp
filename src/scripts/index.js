import '../style.scss';
import { createTable, tableData, createButton } from './ladderFuncs';
import thisYear from './yearFunc';

const parser = require('fast-xml-parser');


const container = document.createElement('div');
container.setAttribute('class', 'container');
document.body.appendChild(container);

fetch('https://api.squiggle.com.au/?q=standings;format=xml')
  .then((resp) => resp.text())
  .then((jsonObject) => {
    const data = parser.parse(jsonObject).standings.anon;
    const title = document.createElement('h1');
    container.appendChild(title);
    title.innerHTML = `${thisYear()} AFL Premiership Season`;
    createButton();
    createTable();
    tableData(data);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Out of bounds! On the full!';
    container.appendChild(errorMessage);
  });
