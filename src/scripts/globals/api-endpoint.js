import CONFIG from './config'

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (name) => `${CONFIG.BASE_URL}search?q=${name}`
}

export default API_ENDPOINT
