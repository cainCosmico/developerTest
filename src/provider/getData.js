

const getJsonSGC = async () => {
   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
   const url = 'https://d34cxkwmgyq31b.cloudfront.net/test/test.json';

   const fetchData = await fetch(proxyUrl + url);
   const { features } = await fetchData.json();

   const sismos = features.map( (sismo) => {
       // console.log(sismo.geometry.coordinates[0]);
       return {
           id  : sismo.id,
           utc : sismo.properties.utcTime,
           lat : sismo.geometry.coordinates[0],
           log : sismo.geometry.coordinates[0],
           prof: sismo.geometry.coordinates[2],
           mag : sismo.properties.mag
       }
   })
   console.log('DATA: ' + sismos[0]);
   return sismos;
}

export default getJsonSGC;