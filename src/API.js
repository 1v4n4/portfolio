const reverseLocationAPI = async (latitude, longitude) => {
  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=ae4f25c3e473421ea09e1ae6c1b2dcd3`);
    const data = await response.json();
    return data.countryName;
  } catch (error) {
    return error.message;
  }
};

const getLocation = () => {
  document.getElementById('default-location').innerHTML = 'Loading...';

  const success = async (position) => {
    const { latitude, longitude } = position.coords;
    document.getElementById('default-location').innerHTML = await reverseLocationAPI(latitude, longitude);
  };
  const error = () => {
    document.getElementById('default-location').innerHTML = 'unknown location';
  };
  navigator.geolocation.getCurrentPosition(success, error);
};

// eslint-disable-next-line
export { getLocation };
