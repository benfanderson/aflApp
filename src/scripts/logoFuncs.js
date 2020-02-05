// This module creates the logo image for each club

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

// Create the logo images obect
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
  // Remove white space from names of clubs in API
  let logo = club.replace(/\s/g, '');
  Object.keys(logos).forEach((key) => {
    // Compares club name to key of each property in logo images obect
    if (key === logo) {
      // If the club names matches the key, replace the variable logo with the relevant image
      const { default: pic } = logos[key];
      logo = pic;
    }
  });
  return logo;
}
