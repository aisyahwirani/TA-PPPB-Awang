import { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9d29623f5cmshda1be642e86632bp1772a1jsn18af603d3d95',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// export const getStaticProps = async()=>{
//     const API_URL = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes"
//     const request = await fetch(API_URL,options)
//     const data = await request.json()
//     console.log(data);
//     return {props : {data}}
// }

export default function List() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log(response);
                return response.json()
            }).then(data=>{
                console.log(data)
                setData(data)
            })
            .catch(err => console.error('Fetch error:', err))
            .finally(() => {
                setLoading(false)
            })
    }, []);


    return (
        <section className="text-gray-600 body-font bg-green-50">
            <div className="container px-5 py-8 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {   
                          loading ? (<p className="mx-auto text-center font-bold">Loading...</p>) :
                        data.results.map((item, index) => (
                            <ItemCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
