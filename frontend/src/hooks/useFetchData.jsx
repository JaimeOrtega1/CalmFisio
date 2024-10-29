import { useEffect, useState } from 'react';
import { getToken } from "../config.js";
import { toast } from 'react-toastify';

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${getToken()}`, // Incluye el token en el encabezado
                        'Content-Type': 'application/json' // Según lo que tu API espera
                    }
                });
                
                // Logging the status and URL to trace the request
                console.log(`Fetching data from: ${url}`);
                console.log(`Response status: ${res.status}`);
                
                const result = await res.json();
                
                // Logging the full response and result structure
                console.log("Complete response JSON:", result);
                console.log("Data from result:", result.data);
                
                if (!res.ok) {
                    throw new Error(result.message + ' - Error brou');
                }

                // Ensure data is set to result.data or empty array if undefined/null
                setData(result.data);
                setLoading(false);

            } catch (err) {
                setLoading(false);
                setError(err.message);
                console.error("Fetch error:", err.message); // Log detailed error
            }
        };

        fetchData();
    }, [url]);

    return {
        data, loading, error
    };
}

export default useFetchData;
