<template>

<div class="container">
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title">採用情報</p>
        <div class="recruit columns">

          <div class="column">
            <img src="images/recruit/recruit.jpg" alt="採用">
          </div>
          <div class="column">
            <router-link class="recruit_01" to="/recruit_01">新卒採用</router-link>
          </div>
          <div class="column">
            <router-link class="recruit_02" to="/recruit_02">中途採用</router-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

</template>
