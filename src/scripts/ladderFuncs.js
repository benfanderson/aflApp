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
  clubHead.setAttribute('class', 'clubName');
  headRow.appendChild(clubHead);
  const playedHead = document.createElement('th');
  headRow.appendChild(playedHead);
  playedHead.innerHTML = 'P';
  const winHead = document.createElement('th');
  headRow.appendChild(winHead);
  winHead.innerHTML = 'W';
  const lossHead = document.createElement('th');
  headRow.appendChild(lossHead);
  lossHead.innerHTML = 'L';
  const drawsHead = document.createElement('th');
  headRow.appendChild(drawsHead);
  drawsHead.innerHTML = 'D';
  const forHead = document.createElement('th');
  headRow.appendChild(forHead);
  forHead.innerHTML = 'PF';
  const agstHead = document.createElement('th');
  headRow.appendChild(agstHead);
  agstHead.innerHTML = 'PA';
  const percentHead = document.createElement('th');
  headRow.appendChild(percentHead);
  percentHead.innerHTML = '%';
  const pointsHead = document.createElement('th');
  headRow.appendChild(pointsHead);
  pointsHead.innerHTML = 'Pts';
  addExtendedClass(playedHead, drawsHead, forHead, agstHead, percentHead);
}

export function tableData(data) {
  const aflTable = document.body.children[1].children[2];
  data.forEach((team) => {
    // For Champion Data version: Add line below and replace selected lines with noted lines below
    // const teamInfo = Object.values(team)[0];
    const tableRow = document.createElement('tr');
    aflTable.appendChild(tableRow);
    const rank = document.createElement('td');
    tableRow.appendChild(rank);
    rank.innerHTML = `${team.rank}. `; // Replace with below
    // rank.innerHTML = `${teamInfo.position}. `;
    const logo = document.createElement('td');
    tableRow.appendChild(logo);
    const logoImg = document.createElement('img');
    logo.appendChild(logoImg);
    logoImg.setAttribute('class', 'clubLogo');
    logoImg.src = createImgSrc(team.name); // Replace with below
    // logoImg.src = createImgSrc(teamInfo.squadName);
    const club = document.createElement('td');
    tableRow.appendChild(club);
    club.setAttribute('class', 'clubName');
    club.innerHTML = team.name; // Replace with below
    // club.innerHTML = teamInfo.squadName;
    const played = document.createElement('td');
    tableRow.appendChild(played);
    played.innerHTML = team.played; // Replace with below
    // played.innerHTML = teamInfo.played;
    const wins = document.createElement('td');
    tableRow.appendChild(wins);
    wins.innerHTML = team.wins; // Replace with below
    // wins.innerHTML = teamInfo.win;
    const losses = document.createElement('td');
    tableRow.appendChild(losses);
    losses.innerHTML = team.losses; // Replace with below
    // losses.innerHTML = teamInfo.loss;
    const draws = document.createElement('td');
    tableRow.appendChild(draws);
    draws.innerHTML = team.draws;
    // draws.innerHTML = teamInfo.drawn;
    const pointsFor = document.createElement('td');
    tableRow.appendChild(pointsFor);
    pointsFor.innerHTML = team.for; // Replace with below
    // pointsFor.innerHTML = teamInfo.ptsFor;
    const pointsAgst = document.createElement('td');
    tableRow.appendChild(pointsAgst);
    pointsAgst.innerHTML = team.against; // Replace with below
    // pointsAgst.innerHTML = teamInfo.ptsAgainst;
    const percentage = document.createElement('td');
    tableRow.appendChild(percentage);
    percentage.innerHTML = team.percentage; // Replace with below
    // percentage.innerHTML = teamInfo.percentage;
    const points = document.createElement('td');
    tableRow.appendChild(points);
    points.innerHTML = team.pts; // Replace with below
    // points.innerHTML = teamInfo.points;
    addExtendedClass(played, draws, pointsFor, pointsAgst, percentage);
  });
}

export function createButton() {
  if (window.matchMedia('(max-width: 479px)').matches) {
    console.log('Boom!');
  }
  const container = document.body.children[1];
  const button = document.createElement('button');
  container.appendChild(button);
  button.innerHTML = 'Show more info';
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
    const clubName = document.getElementsByClassName('clubName');

    if (window.matchMedia('(max-width: 1000px)').matches) {
      Array.from(clubName).forEach((element) => {
        if (getComputedStyle(element).display === 'none') {
          element.style.display = 'table-cell';
        } else {
          element.style.display = 'none';
        }
      });
    }
  });
}
