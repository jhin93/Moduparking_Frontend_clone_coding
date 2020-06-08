<template>
  <div class="hello">
    <h1 class="t__blue b1">{{ msg }}</h1>
    <span class="t__body">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </span>
    <h3 class="t__title">Installed CLI Plugins</h3>
    <ul>
      <span class="t__body">
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
      </span>
    </ul>
    <h3 class="t__title">Essential Links</h3>
    <ul>
      <span class="t__body">
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
      </span>
    </ul>
    <h3 class="t__title">Ecosystem</h3>
    <ul>
      <span class="t__body">
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
