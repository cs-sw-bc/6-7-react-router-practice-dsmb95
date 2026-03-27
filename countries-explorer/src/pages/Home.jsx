import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca3')
            .then(response => response.json())
            .then(json => {
                setCountry(json)
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            })
        } catch(err) {
            console.log(err)
        }
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!country) return <p>Country not found!</p>

    return (
        <div className='home-card'>
            {country.map(country => (
            <div>
            <Link to={`/country/${country.name.common}`}>               
                <img src={country.flags.png} alt={country.flags.alt}/>
                <h3>{country.name.common}</h3>    
            </Link>
            </div>
            ))}
        </div>
    );
}

export default Home;