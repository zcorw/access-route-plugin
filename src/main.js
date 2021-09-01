import routeCreator from './routeCreator';

let accesses = {};

function intall(Vue, opt) {
  Vue.use(opt.VueRoute);
  Vue.$access = (key) => {
    const access = accesses[key];
    return access;
  }
  
}