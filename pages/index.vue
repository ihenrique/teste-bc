<template>
  <div class="container">
    <Header />
    <TeamMembers :members="members" />
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import TeamMembers from '~/components/TeamMembers.vue'

export default {
  components: {
    Header,
    TeamMembers
  },
  async asyncData() {
    return{
      members: await get_members()
    }
  }
}

import SETTINGS from '~/settings'

async function get_members(){
  const get_members_path = SETTINGS.API_URL + '/characters?' + 'ts=' + SETTINGS.API_TS + '&apikey=' + SETTINGS.API_KEY + '&hash=' + SETTINGS.API_HASH

  const result = await fetch( 'https://jsonplaceholder.typicode.com/users' )
  .then( response => response.json() )
  .then( function( response ){
    return response
  })
  
  return await result
}

</script>
<style>
</style>
