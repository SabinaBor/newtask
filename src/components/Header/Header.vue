<template>
  <v-app-bar class="main-header" color="#fff" flat>
    <v-app-bar-title>
      <LogoIcon />
    </v-app-bar-title>
    <v-app-bar-nav-icon v-if="mobile"></v-app-bar-nav-icon>
    <v-tabs v-if="!mobile" align-with-title>
      <v-tabs-slider color="#2EB85C"></v-tabs-slider>
      <v-tab @click="pageClicked(0)">Заявки</v-tab>
      <v-tab @click="pageClicked(1)">Уведомления</v-tab>
      <v-tab @click="pageClicked(2)">Аналитика</v-tab>
      <v-tab @click="pageClicked(3)">Жители</v-tab>
      <v-tab @click="pageClicked(4)">Сотрудники</v-tab>
      <v-tab @click="pageClicked(5)">Дома</v-tab>
      <v-tab @click="pageClicked(6)">УК</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-btn icon>
      <ProfileIcon align-with-title />
    </v-btn>
    <v-btn icon>
      <Arrow />
    </v-btn>
  </v-app-bar>
</template>

<script>
import LogoIcon from "../../assets/svg/logo.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import Arrow from "../../assets/svg/arrowmenu.svg";

export default {
  name: "Header",
  components: {
    LogoIcon,
    ProfileIcon,
    Arrow,
  },
  data() {
    return {
      mobile: false,
      width: null,
      page1Clicked: true,
    };
  },
  methods: {
    getWidth() {
      this.width = window.innerWidth;
      if (this.width < 1024) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    pageClicked(id) {
      if(id == 0){
        this.page1Clicked = true;
      } else {
        this.page1Clicked = false;
      }
      this.$emit('clicked', this.page1Clicked);
    }
  },
  mounted() {
    window.addEventListener("resize", this.getWidth);
  },
};
</script>

<style lang="scss">
.main-header {
  width: 80% !important;
  .v-toolbar__content {
      height: 60px!important;
}
}

.v-tab {
  font-size: 1.7vh !important;
}
.main-header > .v-toolbar {
  flex: none;
}
.v-application .v-tabs-slider-wrapper .v-tabs-slider {
  color: var(--v-accent-base) !important;
}

@media only screen and (max-width: 1200px) {
  .main-header {
    width: 90% !important;
  }
}
</style>