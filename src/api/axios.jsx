import React from 'react'
import axios from 'axios';
const jsonPlaceholder = 'https://jsonplaceholder.typicode.com/todos';

export default axios.create({
  baseURL : jsonPlaceholder
});


export const axiosPrivate = axios.create({
  baseURL : jsonPlaceholder
})