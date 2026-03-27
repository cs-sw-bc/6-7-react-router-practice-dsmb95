import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(json => {
            setCountry(json[0]);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
    }, [name])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if(!country) return <p> Country not found</p>

    return (
        <div>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <h3>Region: {country.region}</h3>
            <p>Sub Region: {country.subregion}</p>
        </div>
    );
}

export default CountryDetail;