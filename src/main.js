// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  isAuthenticated: true,
  currentUser: {
    name: 'Aubrey',
    movies: {
      owned: [
        {
          title: 'The Lion King',
          status: 'In my library',
          type: 'movie',
          medium: 'Blu Ray',
          info: 'Best movie ever',
          updatedAt: 1519854581195
        },
        {
          title: 'What About Bob?',
          status: 'In my Library',
          type: 'movie',
          medium: 'DVD',
          info: 'Hilarious',
          updatedAt: 1519854581195
        },
        {
          title: 'Hercules',
          status: 'In my Library',
          type: 'movie',
          medium: 'DVD',
          info: 'Love the sass',
          updatedAt: 1519854581195
        },
        {
          title: 'Enchanted',
          status: 'In my library',
          type: 'movie',
          medium: 'Blu Ray',
          info: 'A magical journey',
          updatedAt: 1519854581195
        },
        {
          title: 'Glory Road',
          status: 'In my library',
          type: 'movie',
          medium: 'DVD',
          info: 'Great sports movie',
          updatedAt: 1267306868000
        }
      ],
      loaned: [],
      borrowed: [],
      wishList: []
    }
  }
};

const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    },
    user: state => {
      return state.currentUser;
    }
  },
  actions: {
    logout (context) {
      context.commit('logout');
    },
    addMovie (context, title, medium='DVD', info='') {
      let newMovie = {
        title: title,
        medium: medium,
        info: info,
        updatedAt: Date.now()
      };
      context.commit('addMovie', newMovie);
    }
  },
  mutations: {
    logout (state) {
      state.isAuthenticated = false;
    },
    addMovie (state, newMovie) {
      state.movies.push(newMovie)
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});

