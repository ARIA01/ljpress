<template>
  <div class="theme-container">
    <Navbar :isShowSidebarButton="isShowSidebarButton" />

    <div
      class="custom-layout"
      v-if="$page.frontmatter.layout"
    >
      <component :is="$page.frontmatter.layout"/>
    </div>

    <Home v-if="$page.frontmatter.home"/>

    <Page
      v-else
      :sidebar-items="sidebarItems"
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import { resolveSidebarItems } from '../util'

export default {
  components: { Home, Page, Navbar },

  data () {
    return {
      isShowSidebarButton: false
    }
  },

  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    }
  },

  mounted () {
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      this.isShowSidebarButton = /^\/\w+\/[\w.]+$/.test(to.path)
      
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
