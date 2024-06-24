<template>
  <div class="post">
    <div class="post-content">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/imports.scss";
.post {
  @include fdrjsb_aic;
  font-size: 1.4rem;
  padding: 20px;
  margin: 10px 0;
  border: 2px solid teal;
}
</style>
