import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';
import axiosRetry from 'axios-retry'

//niet gebruikt wegens fout melding van react
//het loopt te veel en react denkt dat het in een infinte loop zit
export function useFetch(uri){
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState();

        const client = axios.create();
		axiosRetry(client, {
		  retries: 5,
		  retryDelay: () => 3000,
		  retryCondition: () => true,
		});

        const fetchData = useCallback(async (uri) => {
          try {
            setError();
            setLoading(true);
            const amcik = client.get(uri)
            console.log(amcik)
            let amciiii= amcik.data.data
            setData(amciiii)
        } catch (error) {
            if(error.response.status===429){}
            else{setError(true)}
          } finally {
            setLoading(false);
          }
        }, []);
      
        useEffect(() => {
            fetchData(uri);
        }, [uri, fetchData]);
    
        return {loading, data, error};
      }