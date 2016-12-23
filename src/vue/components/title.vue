<template>

  <section class="hero is-medium is-primary is-bold m-b">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </section>

</template>

<script>

module.exports = {
  props: ['title', 'subtitle']
}

</script>
