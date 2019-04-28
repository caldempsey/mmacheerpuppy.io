/* eslint-disable no-console */
/* eslint-disable no-undef */
export default function GetHostDetails(callback) {
  /**
   * Fetches strings... 
  {
    "ip": 127.0.0.1,
    "region": Canada
    }
   */
  fetch('http://ip-api.com/json')
    .then(res => {
      console.log(res.status);
      if (res.status >= 400 && res.status < 600) {
        throw new Error('Bad response');
      }
      if (!res.headers.get('content-type').includes('application/json')) {
        throw new TypeError('Response not JSON');
      }
      return res.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(err => console.error(err));
}
