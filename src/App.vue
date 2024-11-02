<template>
<div>
  <div v-if="check_auth">
    <div id="nav">
      <router-link :to="{ path: 'admin' }">admin</router-link> |
      <router-link :to="{ path: 'student' }">student</router-link> |
      <router-link :to="{ path: 'management' }">management</router-link>
    </div>
    auth part
  </div>
  <div v-else>
    <div id="nav">
      <router-link :to="{ path: 'login' }">Login</router-link> |
      <router-link :to="{ path: 'signup' }">Signup</router-link> |
      <router-link :to="{ path: 'portfolio' }">Portfolio</router-link>
    </div>
    not auth port
  </div>

</div>
<router-view />

</template>

<script>
  export default {
  data: function() {
    return {
  check_auth: true,
    }
  },
  created: function() {
    if(this.check_auth){
      this.$router.replace({name:'dasboard'});
    }else{
      this.$router.replace({name:'login'});
    }
  }
};


</script>
