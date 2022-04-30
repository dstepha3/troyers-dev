import { createStore } from "vuex";

import menu from "./modules/menu"
import subs from "./modules/sandwiches"
import wraps from "./modules/wraps"
import salads from "./modules/salads"

export default createStore({
  modules: {
    menu,
    subs,
    wraps,
    salads,
  },

  // mutations: {
  //   togglePagePermission(state){
  //       state.pageProtectedPassed = !state.pageProtectedPassed;
  //       state.toastMode = 'success';
  //       state.toastMessage = 'Access Approved!';
  //   },
  //   toggleAdminPermission(state){
  //       state.adminAuthPassed = !state.adminAuthPassed;
  //       state.toastMode = 'fail';
  //       state.toastMessage = 'Access Denied.';
  //   },
  //   logout(state){
  //       state.adminAuthPassed = false;
  //       state.toastMode = 'primary';
  //       state.toastMessage = 'Goodbye.';
  //   },
  // }
});