<template>

  <header>

    <nav class="nav">
      <div class="nav-left">
        <router-link class="nav-item is-brand" to="/"><img src="images/logo.png" alt="Adam App Logo"></router-link>
      </div>

      <span id="nav-toggle" class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <router-link class="nav-item" to="/">ホーム</router-link>
        <router-link class="nav-item" to="/about">会社情報</router-link>
        <router-link class="nav-item" to="/business">事業内容</router-link>
        <router-link class="nav-item" to="/access">アクセス</router-link>
        <router-link class="nav-item" to="/recruit">採用情報</router-link>
        <router-link class="nav-item" to="/contact">お問い合わせ</router-link>
        <router-link class="nav-item" to="/sitemap">サイトマップ</router-link>
      </div>

    </nav>

  </header>

</template>
