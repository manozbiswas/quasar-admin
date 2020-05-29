<template>
  <!-- left sidebar start -->
  <q-drawer
    v-model="toggoleLeftDrawer"
    show-if-above
    :width="250"
    :breakpoint="500"
    content-class="bg-adminlte"
  >
    <q-scroll-area class="fit">
      <q-item>
        <q-btn stretch flat to="/">
          <q-avatar>
            <img src="~/assets/AdminLTELogo.png" />
          </q-avatar>
          <q-item-section class="text-white">&nbsp; Admin Manoz</q-item-section>
        </q-btn>
      </q-item>
      <q-list v-for="(menuItem, index) in menuList" :key="index">
        <q-item
          clickable
          :active="menuItem.label === 'Outbox'"
          v-ripple
          tag="a"
          :to="menuItem.route"
          class="drawer-menulink-color"
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>{{ menuItem.label }}</q-item-section>
        </q-item>

        <q-separator v-if="menuItem.separator" />
      </q-list>
      <q-list class>
        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="settings"
          label="Settings"
          default-opened
          class="drawer-menulink-color"
        >
          <q-expansion-item
            expand-separator
            :content-inset-level="0.2"
            icon="receipt"
            label="Receipts"
          >
            <q-expansion-item label="Today" :content-inset-level="0.1">
              <q-list class="text-dark">
                <q-item
                  clickable
                  v-ripple
                  :active="link === 'inbox'"
                  @click="link = 'inbox'"
                  active-class="my-menu-link"
                  class="drawer-menulink-color"
                >
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>

                  <q-item-section>Inbox</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="link === 'outbox'"
                  @click="link = 'outbox'"
                  active-class="my-menu-link"
                  class="drawer-menulink-color"
                >
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>

                  <q-item-section>Outbox</q-item-section>
                </q-item>

                <q-item
                  clickable
                  v-ripple
                  :active="link === 'trash'"
                  @click="link = 'trash'"
                  active-class="my-menu-link"
                  class="drawer-menulink-color"
                >
                  <q-item-section avatar>
                    <q-icon name="delete" />
                  </q-item-section>

                  <q-item-section>Trash</q-item-section>
                </q-item>

                <q-separator spaced />

                <q-item
                  clickable
                  v-ripple
                  :active="link === 'user'"
                  @click="link = 'user'"
                  active-class="my-menu-link"
                  class="drawer-menulink-color"
                  to="/user"
                >
                  <q-item-section avatar>
                    <q-icon name="user" />
                  </q-item-section>

                  <q-item-section>User</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-expansion-item label="Yesterday" :content-inset-level="0.1"></q-expansion-item>
          </q-expansion-item>

          <q-expansion-item
            :content-inset-level="0.3"
            expand-separator
            icon="schedule"
            label="Postponed"
          ></q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
  <!-- Left Sidebar end -->
</template>
<script>
import menuList from './menuList.js';

export default {
  name: 'drawer-left',
  props: {
    drawer: { type: Boolean, required: true }
  },
  data() {
    return {
      link: 'inbox',
      menuList
    };
  },
  computed: {
    toggoleLeftDrawer: {
      get: function() {
        return this.drawer;
      },
      set: function(val) {
        this.$emit('toggole-leftdrawer', val);
      }
    }
  }
};
</script>
<style scoped>
</style>
