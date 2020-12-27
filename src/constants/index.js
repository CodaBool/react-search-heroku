import axiosBase from 'axios' // setup single instance, with config

export const DEBOUNCE_TIME = 1000

export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// TODO: if setting up a lot of requests, setting a baseURL will be better
export const axios = axiosBase.create({
  // baseURL: "http://127.0.0.1"
})