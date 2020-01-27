<template>
  <div class="login">
    <div v-if="loggingIn" class="container-loading">
      <img src="../assets/loading.gif" alt="Loading Icon">
    </div>
    <p v-if="loginError">{{ loginError }}</p>
    <p v-if="loginSuccessful">Login Successful</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="E-Mail" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<style>
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
  }
  .login .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0.3, 0, 0, 0.3);
  }
  .login .container-loading img {
    width: 2rem;
    height: 2rem;
  }
  .login form {
    display: flex;
    flex-flow: column;
  }
  .login form *:not(:last-child) {
    margin-bottom: 1rem;
  }
  .login form input {
    padding: 0.5rem;
  }
  .login form button {
    padding: 0.5rem;
    background-color: #42b983;
    border: 1px solid gray;
    border-radius: 3px;
    cursor: pointer;
  }
  .login form button:hover {
    background-color: lightslategray;
  }
</style>
