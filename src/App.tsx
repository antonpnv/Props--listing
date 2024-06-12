/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { Listing } from './components/Listing';
import json from '../public/data/etsy.json';

function App() {
  const items: Array<any> = json.filter(
    item => item.listing_id &&
    item.title &&
    item.currency_code &&
    item.price &&
    item.quantity
  );

  return (
    <Listing items = {items} />
  );
}

export default App
