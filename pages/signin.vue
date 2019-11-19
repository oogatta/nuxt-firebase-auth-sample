<template>
  <div class="container">
    <div>
      <h1>Sign In</h1>

      <p><button v-on:click="signIn()">Sign in anonymously with Firebase Auth</button></p>

      <p><button v-on:click="signOut()">Sign Out</button></p>

      <p><button v-on:click="check">Log currentUser</button></p>

      <p><nuxt-link to="/">Back to Home</nuxt-link></p>
    </div>
  </div>
</template>

<script>
const FIREBASE_ID_TOKEN_COOKIE_KEY = 'firebase_id_token';
export default {
  components: {},
  methods: {
    async signIn() {
      try {
        const { user: currentUser } = await this.$firebase.auth().signInAnonymously();
        const token = await currentUser.getIdToken(true);
        this.$Cookies.set(FIREBASE_ID_TOKEN_COOKIE_KEY, token);
      } catch (error) {
        console.log(error);
      }
      alert("signIn");
    },
    async signOut() {
      await this.$firebase.auth().signOut();
      this.$Cookies.remove(FIREBASE_ID_TOKEN_COOKIE_KEY);
      alert("signOut");
    },
    check() {
      console.log(this.$firebase.auth().currentUser);
    }
  },
  mounted() {
    // this.check();
  }
}
</script>

<style>
button {
  font-size: 1.5em;
  padding: 0.25em 0.5em;
}

p {
  margin: 30px;
}
</style>
