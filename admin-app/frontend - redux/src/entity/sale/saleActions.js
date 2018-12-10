import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    //axios.get(`${BASE_URL}/Cycles/summary`)
      //  .then(response => console.log('RESPONSE: ', response))
        //.catch(error => console.log('ERROR: ', error))
    return {
        type: 'SALE_SUMMARY_FETCHED',
        payload: { credit: 999, debt: 99 }
    }
}