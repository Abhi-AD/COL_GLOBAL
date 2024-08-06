import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useDarkMode from "../../hooks/useDarkMode";
import foursliderSettingsreverse from "../../components/silderSettings/foursliderSettingsreverse";
import cardDataCountry from "../../data/cardDataCountry";

const Card = ({ imgSrc, description, link, country }) => (
     <Link to={link} className=" h-full rounded-2xl mx-1 md:mx-2 flex flex-col">
          <div className="w-full h-96 relative overflow-hidden rounded-2xl">
               <img className="inset-0 w-full h-full object-cover" src={imgSrc} alt={country} />
               <div className="absolute bottom-0 w-full h-1/3 p-3 md:p-5 flex flex-col justify-center flex-grow bg-black bg-opacity-40 backdrop-blur-sm">
                    <div className="flex flex-col justify-center">
                         <h5 className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white truncate">
                              {country}
                         </h5>
                         <p className="text-xs sm:text-sm md:text-base font-medium text-white line-clamp-2">
                              {description}
                         </p>
                    </div>
               </div>
          </div>
     </Link>
);

Card.propTypes = {
     imgSrc: PropTypes.string.isRequired,
     country: PropTypes.string.isRequired,
     description: PropTypes.string.isRequired,
     link: PropTypes.string.isRequired,
     DarkMode: PropTypes.bool.isRequired,
};

function Country() {
     const { DarkMode } = useDarkMode();
     return (
          <div className='md:max-w-screen-2xl mx-auto  w-full h-fit flex flex-col   gap-6'>
               <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                         <h1 className="font-bold mb-2 md:mb-5 mx-2 text-lg md:text-3xl">Study Destinations</h1>
                         <Link to={'/all-country'} className="inline-flex rounded items-center px-3 py-2 text-sm md:text-xl font-medium text-center text-blue-500 border-blue-500">View All</Link>
                    </div>
                    <Slider {...foursliderSettingsreverse} className="w-full h-fit">
                         {cardDataCountry.map((item, index) => (
                              <div key={index} className="">
                                   <Card {...item} DarkMode={DarkMode} />
                              </div>
                         ))}
                    </Slider>
               </div>
          </div>
     );
}

export default Country;
