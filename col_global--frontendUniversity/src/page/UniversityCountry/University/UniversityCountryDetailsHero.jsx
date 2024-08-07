import useDarkMode from "../../../hooks/useDarkMode";

const UniversityCountryDetailsHero = () => {
  const { DarkMode } = useDarkMode();

  return (
    <div className=" paddingcontainer flex flex-col gap-3 ">
      <div
        className={`relative rounded-md ${DarkMode ? 'bg-gray-800' : 'bg-gray-50'} w-full h-72 overflow-hidden`}
      >
        <img
          src="https://img.freepik.com/free-photo/blurred-chairs-tables-restaurant_1203-760.jpg?uid=R86996227&ga=GA1.1.1316153257.1720414611&semt=ais_hybrid"
          alt="Background"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-4 left-4 flex items-center justify-center h-20 w-20 border-4 border-blue-500 bg-white dark:bg-gray-700 rounded-md shadow-lg">
          <img
            src="https://w7.pngwing.com/pngs/260/939/png-transparent-universal-orlando-universal-s-universal-music-group-logo-universal-city-universal-logo-white-company-text-thumbnail.png"
            alt="Icon"
            className="h-full w-full rounded-md p-1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold capitalize">university college london (ucl)</p>
        <p className="text-gray-600">Gower St, London WC1E 6BT, UK</p>
      </div>
    </div>
  );
};

export default UniversityCountryDetailsHero;
