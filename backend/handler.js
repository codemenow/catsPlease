const axios = require('axios');
const catAPI = 'https://api.thecatapi.com/v1/images/search';

module.exports.sendCats = async (event, context) => {
  let imageUrl;
  console.log('lambda triggered by the event', event);
  try {
    let imageUrlData = await axios.get(catAPI);
    imageUrl = imageUrlData.data[0].url;
    console.log(imageUrlData);
  } catch (e) {
      console.log(e);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      url: imageUrl,
    }),
  };
};
