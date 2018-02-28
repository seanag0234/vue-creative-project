<template>
  <nav class="navbar welcome is-info">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          The Sandberg Vault
        </a>
        <div class="burger navbar-burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="admin.html">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Movies
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/documentation/overview/start/">
                My movies
              </a>
              <a class="navbar-item" href="/documentation/overview/start/">
                My Wishlist
              </a>
              <a class="navbar-item" href="/documentation/overview/start/">
                Loaned
              </a>
              <a class="navbar-item" href="/documentation/overview/start/">
                Borrowed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          let target = $el.dataset.target;
          let $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>
  nav.navbar {
    border-top: 4px solid #276cda;
    margin-bottom: 1rem;
  }
  .navbar-item.brand-text {
    font-weight: 800;
  }
  .navbar-item, .navbar-link {
    font-size: 14px;
    font-weight: 700;
  }
</style>
