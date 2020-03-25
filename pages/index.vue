<template>
  <div class="container">
    <Header />
    <TeamMembers />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import TeamMembers from '~/components/TeamMembers.vue'

export default {
  components: {
    Header,
    TeamMembers
  }
}
</script>
<style>
</style>
