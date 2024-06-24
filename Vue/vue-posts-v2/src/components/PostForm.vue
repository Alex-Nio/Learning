<template>
  <form class="posts-form" @submit.prevent>
    <h1 class="form-title">Создание поста</h1>
    <my-input v-model="post.title" type="text" placeholder="Описание" />
    <my-input v-model="post.body" type="text" placeholder="Название" />
    <my-button style="align-self: flex-end" @click="createPost">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/imports.scss";

.posts-form {
  @include fdc;

  padding: 15px 0;
}

.form-title {
  margin-bottom: 20px;
}
</style>
