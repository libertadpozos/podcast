export const getData = () =>{
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').then((resp)=>{
    if(resp.status===200) return resp.json();
    else throw new Error('Invalid ');
  });
};