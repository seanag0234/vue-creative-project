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
          id: 0,
          title: 'The Lion King',
          status: 'In my library',
          type: 'movie',
          medium: 'Blu Ray',
          info: 'Best movie ever',
          updatedAt: 1519854581195
        },
        {
          id: 1,
          title: 'What About Bob?',
          status: 'In my library',
          type: 'movie',
          medium: 'DVD',
          info: 'Hilarious',
          updatedAt: 1519854581195
        },
        {
          id: 2,
          title: 'Hercules',
          status: 'In my library',
          type: 'movie',
          medium: 'DVD',
          info: 'Love the sass',
          updatedAt: 1519854581195
        },
        {
          id: 3,
          title: 'Enchanted',
          status: 'In my library',
          type: 'movie',
          medium: 'Blu Ray',
          info: 'A magical journey',
          updatedAt: 1519854581195
        },
        {
          id: 4,
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
    },
  },
  nextId: 5
};

const store = new Vuex.Store({
  state,
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    },
    user: state => {
      return state.currentUser;
    },
    nextId: state => {
      return state.nextId;
    }
  },
  actions: {
    logout (context) {
      context.commit('logout');
    },
    addMovie (context, newMovie) {
      newMovie.id = state.nextId;
      newMovie.updatedAt = Date.now();
      context.commit('increment');
      context.commit('addMovie', newMovie);
    },
    updateMovie (context, params) {
      context.commit('updateMovie', params);
    },
    deleteMovie (context, id) {
      context.commit('deleteMovie', id);
    }
  },
  mutations: {
    increment (state) {
      state.nextId++;
    },
    addMovie (state, newMovie) {
      state.currentUser.movies.owned.push(newMovie)
    },
    deleteMovie (state, movieId) {
      let index = -1;
      let found = false;
      state.currentUser.movies.owned.forEach((movie, i) => {
        if (!found && movie.id === movieId) {
          index = i;
          found = true;
        }
      });
      if (found > -1) {
        state.currentUser.movies.owned.splice(index, 1);
      }
    },
    updateMovie (state, params) {
      let status = params.status;
      let newMovie = params.newMovie;
      if (state.currentUser.movies[status] !== undefined) {
        let index = -1;
        let found = false;
        state.currentUser.movies[status].forEach((movie, i) => {
          if (!found && movie.id === newMovie.id) {
            index = i;
            found = true;
          }
        });
        if (index > -1) {
          newMovie.updatedAt = Date.now();
          state.currentUser.movies[status][index] = newMovie;
        }
      }
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

