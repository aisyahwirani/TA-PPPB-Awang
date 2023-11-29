import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': NEXT_PUBLIC_RAPID_API_KEY,
        'X-RapidAPI-Host': NEXT_PUBLIC_RAPID_API_HOST
    }
};

export default function List() {
    const [data, setData] = useState({results: []})

    useEffect(() => {
        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(response => {
                console.log('API Response:', response);
                setData(response);
            })
            .catch(err => console.error('Fetch error:', err));
    }, []);
    

    return (
        <section className="text-gray-600 body-font bg-green-50">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {   
                        data.results.length === 0 ? (<p className="mx-auto text-center font-bold">Loading...</p>) :
                        data.results.map((item, index) => (
                            <ItemCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
