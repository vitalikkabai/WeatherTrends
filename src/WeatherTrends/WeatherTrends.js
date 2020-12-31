import React, { useCallback, useState, useEffect } from 'react';
import Chart from './Chart/Chart';

const REQUEST_URL = 'https://thingproxy.freeboard.io/fetch/https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/';

const WeatherTrends = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [arrData, setArrData] = useState(null);
  const [location, setLocation] = useState('bradforddata');

  const parseData = useCallback((data) => {
    const splittedArr = data.split(/\r\n|\n/);
    const newArray = [];

    splittedArr.forEach((i) => {
      const firstSevenValue = +(i.slice(0, 7));
      if (firstSevenValue) {
        newArray
          .push((i
            .replace(/ +/g, ' ')
            .trim()
            .split(' '))
            .map(item => (item === '---' ? null : parseFloat(item)))
            .filter(item => !Number.isNaN(item)));
      }
    });

    return newArray;
  }, []);

  useEffect(() => {
    if (location) {
      fetch(`${REQUEST_URL + location}.txt`, {
        method: 'GET',
      })
        .then(response => response.text())
        .then((data) => {
          setArrData(parseData(data));
          setIsLoading(false);
          setLocation(null);
        });
    }
  }, [arrData, location, parseData]);

  const changeLocation = event => setLocation(event.target.value);

  return (
    < div >
      <select onChange={event => changeLocation(event)}>
        <option value="aberporthdata">Aberporth</option>
        <option value="armaghdata">Armagh</option>
        <option value="ballypatrickdata">Ballypatrick Forest</option>
        <option selected value="bradforddata" >Bradford</option>
        <option value="braemardata">Braemar</option>
        <option value="cambornedata">Camborne</option>
        <option value="cambridgedata">Cambridge NIAB</option>
        <option value="cardiffdata">Cardiff Bute Park</option>
        <option value="chivenordata">Chivenor</option>
        <option value="cwmystwythdata">Cwmystwyth</option>
        <option value="dunstaffnagedata">Dunstaffnage</option>
        <option value="durhamdata">Durham</option>
        <option value="eastbournedata">Eastbourne</option>
        <option value="eskdalemuirdata">Eskdalemuir</option>
        <option value="heathrowdata">Heathrow</option>
        <option value="hurndata">Hurn</option>
        <option value="lerwickdata">Lerwick</option>
        <option value="leucharsdata">Leuchars</option>
        <option value="lowestoftdata">Lowestoft</option>
        <option value="manstondata">Manston</option>
        <option value="nairndata">Nairn</option>
        <option value="newtonriggdata">Newton Rigg</option>
        <option value="oxforddata">Oxford</option>
        <option value="paisleydata">Paisley</option>
        <option value="ringwaydata">Ringway</option>
        <option value="rossonwyedata">Ross-on-Wye</option>
        <option value="shawburydata">Shawbury</option>
        <option value="sheffielddata">Sheffield</option>
        <option value="southamptondata">Southampton</option>
        <option value="stornowaydata">Stornoway Airport</option>
        <option value="suttonboningtondata">Sutton Bonington</option>
        <option value="tireedata">Tiree</option>
        <option value="valleydata">Valley</option>
        <option value="waddingtondata">Waddington</option>
        <option value="whitbydata">Whitby</option>
        <option value="wickairportdata">Wick Airport</option>
        <option value="yeoviltondata">Yeovilton</option>
      </select>
      {
        !isLoading ? (
          <div>
            <Chart arrData={arrData} />
          </div >
        ) : (
            <div>
              Loading...
            </div>
          )
      }
    </div >
  );
};
export default WeatherTrends;
