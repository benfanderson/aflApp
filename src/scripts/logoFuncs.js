import Adelaide from '../assets/images/Adelaide.svg';
import Brisbane from '../assets/images/Brisbane.svg';
import Carlton from '../assets/images/Carlton.svg';
import Collingwood from '../assets/images/Collingwood.svg';
import Essendon from '../assets/images/Essendon.svg';
import Fremantle from '../assets/images/Fremantle.svg';
import Geelong from '../assets/images/Geelong.svg';
import GoldCoast from '../assets/images/GoldCoast.svg';
import GreaterWesternSydney from '../assets/images/GreaterWesternSydney.svg';
import Hawthorn from '../assets/images/Hawthorn.svg';
import Melbourne from '../assets/images/Melbourne.svg';
import NorthMelbourne from '../assets/images/NorthMelbourne.svg';
import PortAdelaide from '../assets/images/PortAdelaide.svg';
import Richmond from '../assets/images/Richmond.svg';
import StKilda from '../assets/images/StKilda.svg';
import Sydney from '../assets/images/Sydney.svg';
import WestCoast from '../assets/images/WestCoast.svg';
import WesternBulldogs from '../assets/images/WesternBulldogs.svg';

export default function createImgSrc(club) {
  let logo;
  if (club === 'Adelaide Crows') {
    logo = Adelaide;
  } if (club === 'Brisbane Lions') {
    logo = Brisbane;
  } if (club === 'Carlton') {
    logo = Carlton;
  } if (club === 'Collingwood') {
    logo = Collingwood;
  } if (club === 'Essendon') {
    logo = Essendon;
  } if (club === 'Fremantle') {
    logo = Fremantle;
  } if (club === 'Geelong Cats') {
    logo = Geelong;
  } if (club === 'Gold Coast Suns') {
    logo = GoldCoast;
  } if (club === 'GWS Giants') {
    logo = GreaterWesternSydney;
  } if (club.includes('Hawthorn')) {
    logo = Hawthorn;
  } if (club === 'Melbourne') {
    logo = Melbourne;
  } if (club === 'North Melbourne') {
    logo = NorthMelbourne;
  } if (club === 'Port Adelaide') {
    logo = PortAdelaide;
  } if (club === 'Richmond') {
    logo = Richmond;
  } if (club === 'St Kilda') {
    logo = StKilda;
  } if (club === 'Sydney Swans') {
    logo = Sydney;
  } if (club === 'West Coast') {
    logo = WestCoast;
  } if (club === 'Western Bulldogs') {
    logo = WesternBulldogs;
  }
  return logo;
}
