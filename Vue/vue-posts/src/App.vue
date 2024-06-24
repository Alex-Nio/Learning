<script setup>
  import { ref } from "vue";

  const likes = ref(0);
  const dislikes = ref(0);

  const addLike = () => {
    likes.value += 1;
  };

  const addDislike = () => {
    dislikes.value += 1;
  };
</script>

<template>
  <div class="page">
    <div class="page__container">
      <div class="post">
        <div>
          <strong>Название:</strong>
          <span>Пост о JavaScript</span>
        </div>
        <div>
          <strong>Описание:</strong>
          <span>JavaScript</span>
        </div>
        <button class="my-button">Button</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    font-size: 4rem;
    text-align: center;
    line-height: 100%;
    padding: 20vw;
  }

  .post {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    border: 2px solid teal;
    margin: 12px 0;
    padding: 22px;

    div {
      display: flex;
      gap: 12px;
    }
  }

  .my-button {
    padding: 12px;
    background-color: $accent;
    color: $white;
  }
</style>
