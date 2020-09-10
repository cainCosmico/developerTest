import React, { useEffect } from 'react'

import useFetchSGC from '../hooks/useFetchSGC';

const EventosSismicos = () => {
   
   const {loading, data} = useFetchSGC();
   
   useEffect(() => {
      console.log(data);
   }, [data] );

   return (
      <div>
         { loading && <h1>Cargando datos...</h1>}
      </div>
   )
}

export default EventosSismicos;
