<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <section class="hero is-info welcome is-small">
          <div class="hero-body no-padding">
            <div class="container page-title">
              <h1 class="title">
                Your Movies
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="columns" style="">
      <div class="column">
          <a @click="toggleShowAdd" class="button is-info has-text-weight-bold">Add<i style="padding-left: 8px" class="fa fa-plus-circle" aria-hidden="true"></i></a>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="card events-card">
          <div>
            <div class="content">
              <table class="table is-fullwidth is-striped is-hoverable">
                <tbody>
                <tr>
                  <td class="is-hidden-mobile"></td>
                  <th>Title</th>
                  <th class="is-hidden-mobile">Info</th>
                  <th>Status</th>
                  <th class="is-hidden-mobile">Type</th>
                  <th class="is-hidden-mobile is-hidden-tablet">Updated At</th>
                  <td></td>
                </tr>
                <tr v-for="movie in movies" v-on:click="editMovie(movie)">
                  <td width="5%" class="is-hidden-mobile"><i class="fa fa-film" aria-hidden="true"></i></td>
                  <td>{{movie.title}}</td>
                  <td class="is-hidden-mobile">{{movie.info}}</td>
                  <td>{{movie.status}}</td>
                  <td class="is-hidden-mobile">{{movie.medium}}</td>
                  <td class="is-hidden-mobile is-hidden-tablet">{{convertDate(movie.updatedAt)}}</td>
                  <td width="5%"><a class="button is-small is-primary" href="#">Edit</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-bind:class="{'is-active': showEdit}">
      <div class="modal-background" v-on:click="toggleShowEdit"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editing '{{currentMovie.title}}'</p>
          <button class="delete" v-on:click="toggleShowEdit" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" v-model="editingMovie.title" type="text">
            </div>
          </div>

          <div class="field">
            <label class="label">Info</label>
            <div class="control">
              <input class="input" type="email" v-model="editingMovie.info">
            </div>
          </div>

          <div class="field">
            <label class="label">Status</label>
            <div class="control select">
              <select v-model="editingMovie.status">
                <option value="In my library">In my library</option>
                <option value="Loaned out">Loaned out</option>
                <option value="Borrowed">Borrowed</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Type</label>
            <div class="control select">
              <select v-model="editingMovie.medium">
                <option value="Blu Ray">Blu Ray</option>
                <option value="DVD">DVD</option>
              </select>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="saveMovie">Save Changes</button>
          <button class="button" v-on:click="toggleShowEdit">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="modal" v-bind:class="{'is-active': showAdd}">
      <div class="modal-background" v-on:click="toggleShowAdd"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add a Movie</p>
          <button class="delete" v-on:click="toggleShowAdd" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" v-model="newMovie.title" type="text">
            </div>
          </div>

          <div class="field">
            <label class="label">Info</label>
            <div class="control">
              <input class="input" type="email" v-model="newMovie.info">
            </div>
          </div>

          <div class="field">
            <label class="label">Status</label>
            <div class="control select">
              <select v-model="newMovie.status">
                <option value="In my library">In my library</option>
                <option value="Loaned out">Loaned out</option>
                <option value="Borrowed">Borrowed</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Type</label>
            <div class="control select">
              <select v-model="newMovie.medium">
                <option value="Blu Ray">Blu Ray</option>
                <option value="DVD">DVD</option>
              </select>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="createMovie">Add Movie</button>
          <button class="button" v-on:click="toggleShowAdd">Cancel</button>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: "my-movies",
    data() {
      return {
        showEdit: false,
        showAdd: false,
        currentMovie: {},
        editingMovie: {},
        newMovie: {
          title: '',
          medium: 'DVD',
          info: '',
          type: 'movie',
          status: 'In my library'
        }
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated', 'user']),
      movies: function () {
        return this.user.movies.owned.sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        })
      }
    },
    methods: {
      ...mapActions({
        updateMovie: 'updateMovie',
        addMovie: 'addMovie'
      }),
      log: function () {
        console.log("Clicked");
      },
      editMovie: function (movie) {
        this.currentMovie = movie;
        this.editingMovie = Object.assign({}, movie);
        console.log(this.editingMovie.status);
        this.showEdit = true;
      },
      toggleShowEdit: function () {
        this.showEdit = !this.showEdit;
      },
      toggleShowAdd: function () {
        this.showAdd = !this.showAdd;
      },
      saveMovie: function () {
        // this.currentMovie = Object.assign({}, this.editingMovie);
        this.updateMovie({status:'owned', newMovie: this.editingMovie});
        this.toggleShowEdit();
      },
      createMovie: function () {
        // this.currentMovie = Object.assign({}, this.editingMovie);
        console.log(this.newMovie);
        this.addMovie(this.newMovie);
        this.toggleShowAdd();
      },
      convertDate: function (timeInMil) {
        let dateObj = new Date(timeInMil);

        let date = dateObj.getFullYear()+'-'+(dateObj.getMonth()+1)+'-'+dateObj.getDate();
        let time = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getSeconds();
        return date + ' ' + time;
      }
    }
  }
</script>

<style scoped>

</style>
