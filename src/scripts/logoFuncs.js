import Adelaide from '../assets/images/Adelaide.jpg';
import Brisbane from '../assets/images/Brisbane.jpg';
import Carlton from '../assets/images/Carlton.jpg';
import Collingwood from '../assets/images/Collingwood.jpg';
import Essendon from '../assets/images/Essendon.jpg';
import Fremantle from '../assets/images/Fremantle.jpg';
import Geelong from '../assets/images/Geelong.jpg';
import GoldCoast from '../assets/images/GoldCoast.jpg';
import GreaterWesternSydney from '../assets/images/GreaterWesternSydney.jpg';
import Hawthorn from '../assets/images/Hawthorn.jpg';
import Melbourne from '../assets/images/Melbourne.jpg';
import NorthMelbourne from '../assets/images/NorthMelbourne.jpg';
import PortAdelaide from '../assets/images/PortAdelaide.jpg';
import Richmond from '../assets/images/Richmond.jpg';
import StKilda from '../assets/images/StKilda.jpg';
import Sydney from '../assets/images/Sydney.jpg';
import WestCoast from '../assets/images/WestCoast.jpg';
import WesternBulldogs from '../assets/images/WesternBulldogs.jpg';

export default function createImgSrc(club) {
  let logo;
  if (club === 'Adelaide') {
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
  } if (club === 'Geelong') {
    logo = Geelong;
  } if (club === 'Gold Coast') {
    logo = GoldCoast;
  } if (club === 'Greater Western Sydney') {
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
  } if (club === 'Sydney') {
    logo = Sydney;
  } if (club === 'West Coast') {
    logo = WestCoast;
  } if (club === 'Western Bulldogs') {
    logo = WesternBulldogs;
  }
  return logo;
}
