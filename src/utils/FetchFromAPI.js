import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c7a2e8635emsh235949c8d309304p14dba9jsn989616cb5a2c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const FetchFromAPI = async (url) =>{
  try{
    const {data} =  await axios.get(`${baseUrl}/${url}`, options);
    // console.log(`${baseUrl}/${url}`);
    // console.log(data);
    return data;
  }
  catch(e){
    alert('Sorry, unable to fetch data!!');
    return;
  }  
}