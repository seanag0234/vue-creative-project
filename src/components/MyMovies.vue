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
                  <td class="is-hidden-mobile"></td>
                  <th>Title</th>
                  <th class="is-hidden-mobile">Info</th>
                  <th>Status</th>
                  <th class="is-hidden-mobile">Type</th>
                  <th class="is-hidden-mobile">Updated At</th>
                  <td></td>
                </tr>
                <tr v-for="movie in user.movies.owned">
                  <td width="5%" class="is-hidden-mobile"><i class="fa fa-film" aria-hidden="true"></i></td>
                  <td>{{movie.title}}</td>
                  <td class="is-hidden-mobile">{{movie.info}}</td>
                  <td>{{movie.status}}</td>
                  <td class="is-hidden-mobile">{{movie.medium}}</td>
                  <td class="is-hidden-mobile">{{movie.updatedAt}}</td>
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
