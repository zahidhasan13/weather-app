// eslint-disable-next-line react/prop-types
const Result = ({ weathers }) => {
  const max_temp = (weathers?.main?.temp_max - 273).toFixed(2);
  const min_temp = (weathers?.main?.temp_min - 273).toFixed(2);
  return (
    <div className="my-5">
      <h2 className="text-6xl font-bold text-center">{weathers?.name}</h2>
      <div className="flex justify-center items-center">
        {weathers?.weather?.length > 0 && (
          <img
            src={`https://openweathermap.org/img/wn/${weathers?.weather[0]?.icon}@2x.png`}
            alt=""
          />
        )}
      </div>
      <div className="flex items-center justify-between my-3">
        <p className="text-lg font-semibold">
          Max-Temp: <span className="text-2xl">{max_temp} °C</span>
        </p>
        <p className="text-lg font-semibold">
          Min-Temp: <span className="text-2xl">{min_temp} °C</span>
        </p>
      </div>
      <p className="text-lg font-semibold">
        Wind: <span className="text-2xl">{weathers?.wind?.speed}</span> km/h
      </p>
    </div>
  );
};

export default Result;
