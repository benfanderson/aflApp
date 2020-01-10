import './style.scss';

const root = document.createElement('div');
document.body.appendChild(root);


const container = document.createElement('ul');
container.setAttribute('class', 'container');
root.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
const request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.squiggle.com.au/?q=standings', true);


request.onload = function () {
  const data = JSON.parse(this.response).standings;

  if (request.status >= 200 && request.status < 400) {
    const aflTable = document.createElement('table');
    container.appendChild(aflTable);
    const headRow = document.createElement('tr');
    aflTable.appendChild(headRow);
    const rankHead = document.createElement('th');
    headRow.appendChild(rankHead);
    const clubHead = document.createElement('th');
    headRow.appendChild(clubHead);
    const playedHead = document.createElement('th');
    headRow.appendChild(playedHead);
    playedHead.setAttribute('class', 'extendedTable');
    playedHead.innerHTML = 'Played';
    const winHead = document.createElement('th');
    headRow.appendChild(winHead);
    winHead.innerHTML = 'Wins';
    const lossHead = document.createElement('th');
    headRow.appendChild(lossHead);
    lossHead.innerHTML = 'Losses';
    const drawsHead = document.createElement('th');
    drawsHead.setAttribute('class', 'extendedTable');
    headRow.appendChild(drawsHead);
    drawsHead.innerHTML = 'Draws';
    const forHead = document.createElement('th');
    headRow.appendChild(forHead);
    forHead.setAttribute('class', 'extendedTable');
    forHead.innerHTML = 'For';
    const agstHead = document.createElement('th');
    headRow.appendChild(agstHead);
    agstHead.setAttribute('class', 'extendedTable');
    agstHead.innerHTML = 'Against';
    const percentHead = document.createElement('th');
    percentHead.setAttribute('class', 'extendedTable');
    headRow.appendChild(percentHead);
    percentHead.innerHTML = '%';
    const pointsHead = document.createElement('th');
    headRow.appendChild(pointsHead);
    pointsHead.innerHTML = 'Points';
    data.forEach((team) => {
      const tableRow = document.createElement('tr');
      aflTable.appendChild(tableRow);
      const rank = document.createElement('td');
      tableRow.appendChild(rank);
      rank.innerHTML = `${team.rank}. `;
      const club = document.createElement('td');
      tableRow.appendChild(club);
      club.setAttribute('class', 'clubName');
      club.innerHTML = team.name;
      const played = document.createElement('td');
      tableRow.appendChild(played);
      played.setAttribute('class', 'extendedTable');
      played.innerHTML = team.played;
      const wins = document.createElement('td');
      tableRow.appendChild(wins);
      wins.innerHTML = team.wins;
      const losses = document.createElement('td');
      tableRow.appendChild(losses);
      losses.innerHTML = team.losses;
      const draws = document.createElement('td');
      draws.setAttribute('class', 'extendedTable');
      tableRow.appendChild(draws);
      draws.innerHTML = team.draws;
      const pointsFor = document.createElement('td');
      tableRow.appendChild(pointsFor);
      pointsFor.setAttribute('class', 'extendedTable');
      pointsFor.innerHTML = team.for;
      const pointsAgst = document.createElement('td');
      tableRow.appendChild(pointsAgst);
      pointsAgst.setAttribute('class', 'extendedTable');
      pointsAgst.innerHTML = team.against;
      const percentage = document.createElement('td');
      tableRow.appendChild(percentage);
      percentage.setAttribute('class', 'extendedTable');
      percentage.innerHTML = team.percentage;
      const points = document.createElement('td');
      tableRow.appendChild(points);
      points.innerHTML = team.pts;
    });
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
