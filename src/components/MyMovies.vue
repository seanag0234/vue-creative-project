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
    <section>
    <div class="columns">
      <div class="column">
        <div class="card events-card">
          <div class="card-table">
            <div class="content">
              <table class="table is-fullwidth is-striped is-hoverable">
                <tbody>
                <tr>
                  <td></td>
                  <th>Title</th>
                  <th>Status</th>
                  <td></td>
                </tr>
                <tr v-for="movie in user.movies.owned">
                  <td width="5%"><i class="fa fa-film" aria-hidden="true"></i></td>
                  <td>{{movie.title}}</td>
                  <td>{{movie.status}}</td>
                  <td width="5%"><a class="button is-small is-primary" href="#">Edit</a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: "my-movies",
    computed: {
      ...mapGetters(['isAuthenticated', 'user']),
    }
  }
</script>

<style scoped>

</style>
