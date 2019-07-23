<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <svg t="1563760569571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1101" width="20" height="20" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <style type="text/css"></style>
      </defs>
      <path d="M938.666667 490.666667H179.626667l261.973333-262.4-29.866667-29.866667L97.706667 512l314.026666 313.6 29.866667-29.866667-261.973333-262.4H938.666667z" p-id="1102"></path>
    </svg>
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem
  .icon
    display block
    width 1.25rem
    height 1.25rem

@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
