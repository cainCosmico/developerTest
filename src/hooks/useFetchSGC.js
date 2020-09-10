import { useState, useEffect } from 'react'

import getJsonSGC from '../providers/getData'

const useFetchSGC = () => {

   const [state, setstate] = useState({
      loading: true,
      data: [],
   });

   useEffect(() => {
      getJsonSGC().then( (data) => {
         setstate({
            loading: false,
            data: data,
         });
      })
   }, []);

   return state;
}

export default useFetchSGC;
