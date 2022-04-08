<template>
  <div class="head_1">
    <div class="main_1">
      <div class="container_1">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi. Maxime explicabo neque odio facilis.</p>
      </div>
    </div>
    <div class="container">
      <main>
        <h2>Latest thoughts</h2>
        <ul class="cards">
          <li class="post_card_1" v-for="(post, index) in posts" :key="index">
            <img class="card__img" :src="post.feature_image">
            <div class="card__info">
              <span class="card__category">{{ post.authors[0].name }}</span>
              <br>
              <nuxt-link class="card__title" :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <!-- <p >{{ post.excerpt }}</p> -->
            </div>
          </li>
        </ul>
      </main>
    </div>

  </div>
</template>

<script>

import { getPosts } from '~/api/posts';

export default {
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto);
body {
  margin: 0;
  background: #E2E2E2;
}
.main_1{
  padding-top: 5em;
  background: #F0A500;
  height: 150px;
  text-align: center;
}
.cards {
    display: block;
    margin-right: 5px;
    margin-left: 5px;
}

.card__img {
    width: 100%;
    height: 200px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
  
}

.card {
  background-color: #000000;
  width: 10%;
  position: fixed;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
   margin: 0%;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto';
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}
.container ul {
    list-style-type: none;
    padding: 0;
  }
.post_card_1{
  margin-bottom: 20px;
}
  @media only screen and (min-width: 768px) {
    .cards {
    display: flex;
    margin-right: 5px;
    margin-left: 5px;
    height: 290px;
    margin-top: 30px;
}
  }
</style>