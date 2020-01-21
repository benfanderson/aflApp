import createImgSrc from './logoFuncs';

function addExtendedClass(...args) {
  args.forEach((dataField) => {
    dataField.setAttribute('class', 'extendedTable');
    dataField.style.display = 'none';
  });
}

export function createTable() {
  const container = document.body.children[1];
  const aflTable = document.createElement('table');
  container.appendChild(aflTable);
  const headRow = document.createElement('tr');
  aflTable.appendChild(headRow);
  const rankHead = document.createElement('th');
  headRow.appendChild(rankHead);
  const logoHead = document.createElement('th');
  headRow.appendChild(logoHead);
  const clubHead = document.createElement('th');
  headRow.appendChild(clubHead);
  const playedHead = document.createElement('th');
  headRow.appendChild(playedHead);
  playedHead.innerHTML = 'Played';
  const winHead = document.createElement('th');
  headRow.appendChild(winHead);
  winHead.innerHTML = 'Wins';
  const lossHead = document.createElement('th');
  headRow.appendChild(lossHead);
  lossHead.innerHTML = 'Losses';
  const drawsHead = document.createElement('th');
  headRow.appendChild(drawsHead);
  drawsHead.innerHTML = 'Draws';
  const forHead = document.createElement('th');
  headRow.appendChild(forHead);
  forHead.innerHTML = 'For';
  const agstHead = document.createElement('th');
  headRow.appendChild(agstHead);
  agstHead.innerHTML = 'Against';
  const percentHead = document.createElement('th');
  headRow.appendChild(percentHead);
  percentHead.innerHTML = '%';
  const pointsHead = document.createElement('th');
  headRow.appendChild(pointsHead);
  pointsHead.innerHTML = 'Points';
  addExtendedClass(playedHead, drawsHead, forHead, agstHead, percentHead);
}

export function tableData(data) {
  const aflTable = document.body.children[1].children[1];
  data.forEach((team) => {
    const tableRow = document.createElement('tr');
    aflTable.appendChild(tableRow);
    const rank = document.createElement('td');
    tableRow.appendChild(rank);
    rank.innerHTML = `${team.rank}. `;
    const logo = document.createElement('td');
    tableRow.appendChild(logo);
    const logoImg = document.createElement('img');
    logo.appendChild(logoImg);
    logoImg.setAttribute('class', 'clubLogo');
    logoImg.src = createImgSrc(team.name);
    const club = document.createElement('td');
    tableRow.appendChild(club);
    club.setAttribute('class', 'clubName');
    club.innerHTML = team.name;
    const played = document.createElement('td');
    tableRow.appendChild(played);
    played.innerHTML = team.played;
    const wins = document.createElement('td');
    tableRow.appendChild(wins);
    wins.innerHTML = team.wins;
    const losses = document.createElement('td');
    tableRow.appendChild(losses);
    losses.innerHTML = team.losses;
    const draws = document.createElement('td');
    tableRow.appendChild(draws);
    draws.innerHTML = team.draws;
    const pointsFor = document.createElement('td');
    tableRow.appendChild(pointsFor);
    pointsFor.innerHTML = team.for;
    const pointsAgst = document.createElement('td');
    tableRow.appendChild(pointsAgst);
    pointsAgst.innerHTML = team.against;
    const percentage = document.createElement('td');
    tableRow.appendChild(percentage);
    percentage.innerHTML = team.percentage;
    const points = document.createElement('td');
    tableRow.appendChild(points);
    points.innerHTML = team.pts;
    addExtendedClass(played, draws, pointsFor, pointsAgst, percentage);
  });
}

export function createButton() {
  const container = document.body.children[1];
  const button = document.createElement('button');
  container.appendChild(button);
  button.innerHTML = 'Expand ladder';
  button.addEventListener('click', () => {
    const expandedColumns = document.getElementsByClassName('extendedTable');
    Array.from(expandedColumns).forEach((element) => {
      if (getComputedStyle(element).display === 'none') {
        element.style.display = 'table-cell';
        button.innerHTML = 'Show less info';
      } else {
        element.style.display = 'none';
        button.innerHTML = 'Show more info';
      }
    });
  });
}
