import axios from 'axios';

import {FETCH_CUSTOMER} from './types';
import {CREATE_CUSTOMER} from './types';

export const fetchCustomer = ()=>{
  axios
  .get('api/customer')
  .then(res => dispatch({type: FETCH_CUSTOMER, payload: res}))
}
export const createUser = ()=>{
  axios
  .post('api/customer')
  .then(res=> dispatch({type: CREATE_CUSTOMER, payload: res}))
}
