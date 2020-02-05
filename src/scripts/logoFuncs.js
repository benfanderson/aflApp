
const AdelaideCrows = require('../assets/images/AdelaideCrows.svg');
const BrisbaneLions = require('../assets/images/BrisbaneLions.svg');
const Carlton = require('../assets/images/Carlton.svg');
const Collingwood = require('../assets/images/Collingwood.svg');
const Essendon = require('../assets/images/Essendon.svg');
const Fremantle = require('../assets/images/Fremantle.svg');
const GeelongCats = require('../assets/images/GeelongCats.svg');
const GoldCoastSuns = require('../assets/images/GoldCoastSuns.svg');
const GWSGiants = require('../assets/images/GWSGiants.svg');
const Hawthorn = require('../assets/images/Hawthorn.svg');
const Melbourne = require('../assets/images/Melbourne.svg');
const NorthMelbourne = require('../assets/images/NorthMelbourne.svg');
const PortAdelaide = require('../assets/images/PortAdelaide.svg');
const Richmond = require('../assets/images/Richmond.svg');
const StKilda = require('../assets/images/StKilda.svg');
const SydneySwans = require('../assets/images/SydneySwans.svg');
const WestCoastEagles = require('../assets/images/WestCoastEagles.svg');
const WesternBulldogs = require('../assets/images/WesternBulldogs.svg');


const logoObj = {
  AdelaideCrows,
  BrisbaneLions,
  Carlton,
  Collingwood,
  Essendon,
  Fremantle,
  GeelongCats,
  GoldCoastSuns,
  GWSGiants,
  Hawthorn,
  Melbourne,
  NorthMelbourne,
  PortAdelaide,
  Richmond,
  StKilda,
  SydneySwans,
  WestCoastEagles,
  WesternBulldogs,
};

export default function createImgSrc(club, logos = logoObj) {
  let logo = club.replace(/\s/g, '');
  Object.keys(logos).forEach((key) => {
    if (key === logo) {
      // console.log(key);
      // console.log(logos[key]);
      logo = logos[key];
      console.log(logo);
    }
  });
  // if (club === 'Adelaide Crows') {
  //   logo = Adelaide;
  // } if (club === 'Brisbane Lions') {
  //   logo = Brisbane;
  // } if (club === 'Carlton') {
  //   logo = Carlton;
  // } if (club === 'Collingwood') {
  //   logo = Collingwood;
  // } if (club === 'Essendon') {
  //   logo = Essendon;
  // } if (club === 'Fremantle') {
  //   logo = Fremantle;
  // } if (club === 'Geelong Cats') {
  //   logo = Geelong;
  // } if (club === 'Gold Coast Suns') {
  //   logo = GoldCoast;
  // } if (club === 'GWS Giants') {
  //   logo = GreaterWesternSydney;
  // } if (club === 'Hawthorn') {
  //   logo = Hawthorn;
  // } if (club === 'Melbourne') {
  //   logo = Melbourne;
  // } if (club === 'North Melbourne') {
  //   logo = NorthMelbourne;
  // } if (club === 'Port Adelaide') {
  //   logo = PortAdelaide;
  // } if (club === 'Richmond') {
  //   logo = Richmond;
  // } if (club === 'St Kilda') {
  //   logo = StKilda;
  // } if (club === 'Sydney Swans') {
  //   logo = Sydney;
  // } if (club === 'West Coast Eagles') {
  //   logo = WestCoast;
  // } if (club === 'Western Bulldogs') {
  //   logo = WesternBulldogs;
  // }
  return logo;
}
