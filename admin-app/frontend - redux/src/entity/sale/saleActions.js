import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/Cycles/summary`)
    return {
        type: 'SALE_SUMMARY_FETCHED',
        payload: request
    }
}