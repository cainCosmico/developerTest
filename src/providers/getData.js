

const getJsonSGC = async () => {
   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
   const url = 'https://d34cxkwmgyq31b.cloudfront.net/test/test.json';

   const fetchData = await fetch(proxyUrl + url);
   const { features } = await fetchData.json();   

   const eventos = features.map( (evento) => {
       return {
           id   : evento.id,
           place: evento.properties.place,
           mag  : evento.properties.mag,
           utc  : evento.properties.utcTime,
       }
   });

   const result = eventos.filter( evento => evento.mag >= 3.0 );
   return result;
}

export default getJsonSGC;