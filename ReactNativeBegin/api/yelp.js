import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Kt_vND5jHAnIG25vzI9sY2-D_QABWsNkI9QDd8LUg35ajm1Ccy4ed6sdQu4yQXfZ5D2eLX7yeSuEA5WeLZKEW8sZjYlGa303mTq3fCBODwtfIJyQxBAlGZVrL40rX3Yx'
    }
});