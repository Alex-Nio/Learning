<template>
  <div class="posts">
    <h3>Список постов</h3>
    <post-item
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
      :post="post"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
};
</script>

<style lang="scss">
.posts {
  padding: 20px 0;
}
</style>

