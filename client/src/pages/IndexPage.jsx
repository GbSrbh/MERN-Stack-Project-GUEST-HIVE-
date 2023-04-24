import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Image from "../Image.jsx";
import Footer from './Footer';

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/home-places').then(response => {
      setPlaces([...response.data]);
    });
  }, []);
  return (

    <div>
      <div className="mt-10 ml-20 mr-20 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {places.length > 0 && places.map(place => (
          <Link to={'place/' + place._id} className="">
            <div className="w-full bg-gray-500 mb-2 rounded-2xl flex">
              {place.photos?.[0] && (
                <img className='rounded-2xl object-cover aspect-square' src={'http://localhost:4000/Uploads/' + place.photos?.[0]} alt="" />
              )}
            </div>
            <h3 className="font-bold">{place.address}</h3>
            <h2 className="text-sm">{place.title}</h2>
            <div className="mt-2">
              <span className="font-bold">
                Rs.{place.price}
              </span> per night
            </div>
          </Link>

        ))}
      </div>
      <Footer />
    </div>


    // <div className="mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //   {places.length > 0 && places.map(place => (
    //     <div>
    //       <div className="bg-gray-500 mb-2 rounded-2xl flex">
    //         {place.photos?.[1] && (
    //           <img src={'http://localhost:4000/uploads/' + place.photos?.[0]} alt="" />
    //           // <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/' + place.photos?.[1]}></img>
    //         )}
    //       </div>
    //       {/* <h2 className="font-bold">{place.address}</h2>
    //       <h3 className="text-sm text-gray-500">{place.title}</h3>
    //       <div className="mt-1">
    //         <span className="font-bold">${place.price}</span> per night
    //       </div> */}
    //     </div>
    //   ))}
    // </div>
  );
}