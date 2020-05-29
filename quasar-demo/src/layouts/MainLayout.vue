<template>
  <q-layout view="lHh LpR lfr">
    <!-- Header start -->
    <!-- <q-header bordered class="bg-teal text-white"> -->
    <q-header
      class="fixed"
      elevated
      style="background: linear-gradient(145deg, rgb(74, 94, 137) 15%, rgb(30, 75, 131) 70%);"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <q-toolbar-title class="row">
          <div class>
            <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
            <q-btn class="text-white" stretch flat to="/">
              <div>Home</div>
            </q-btn>
            <q-btn class="text-white" stretch flat to="/about">
              <div>About</div>
            </q-btn>
          </div>
          <div class>
            <div class="q-ml-xs q-gutter-md">
              <q-input
                class="bg-grey col"
                dense
                standout="bg-grey-4"
                v-model="search"
                color="bg-grey-10"
                placeholder="Search"
              >
                <template v-slot:prepend>
                  <q-icon v-if="search === ''" name="search" />
                  <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                </template>
              </q-input>
            </div>
          </div>
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="text-grey-7" icon="apps">
            <q-tooltip>Google Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>2</q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>
                      Signed in as
                      <strong>Mary</strong>
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <!-- header end -->
    <drawer-left :drawer="leftDrawerOpen"></drawer-left>
    <!-- Footer start -->
    <q-footer class="bg-white">
      <q-toolbar class="bg-white-3 text-black row">
        <q-toolbar-title class="text-center">&copy; Manoz Debnath</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- Footer End -->
    <!-- container start -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Container end -->
  </q-layout>
</template>

<script>
import drawerLeft from './drawer-left';

export default {
  name: 'MainLayout',
  components: { drawerLeft },
  data() {
    return {
      search: '',
      link: 'inbox',
      leftDrawerOpen: true
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.token;
    }
  },
  created() {
    // const locale = localStorage.getItem("locale");
    // if (locale) {
    //   this.$i18n.locale = locale;
    // } else if (navigator.language) {
    //   this.$i18n.locale = navigator.language.substring(0, 2);
    // }
  },
  methods: {
    // logout() {
    //   this.$axios
    //     .$post("logout")
    //     .then(resp => {
    //       this.$store.dispatch("logout");
    //       this.$router.push("/");
    //     })
    //     .catch(errors => {
    //       console.dir(errors);
    //     });
    // }
  }
};
</script>

<style >
.bg-adminlte {
  background-color: #343a40;
}

.drawer-menulink-color {
  color: #c2c7d0;
}

.GPL__toolbar-input {
  width: 35%;
}
</style>
