<template>
  <div class="full-wrapper">
    <header>
      <header-nav></header-nav>
      <router-view />
    </header>
    <div class="container">
      <div class="app">
        <h1 class="title">{{ Title }}</h1>
        <div class="app__btns">
          <my-button @click="showDialog">Создать пост</my-button>
          <my-select :options="sortOptions" v-model="selectedSort" />
        </div>
      </div>
      <div v-if="posts.length > 0" class="content">
        <my-dialog v-model:show="dialogVisible">
          <post-form @create="createPost"></post-form>
        </my-dialog>
        <post-list
          v-if="!isPostsLoading"
          :posts="sortedPosts"
          @remove="removePost"
        ></post-list>
      </div>
      <div v-else-if="isPostsLoading" style="color: red; font-size: 2rem">
        Идёт загрузка
      </div>
      <div v-else-if="!posts.length" style="color: red; font-size: 2rem">
        Список постов пуст
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  components: {
    HeaderNav,
    PostList,
    PostForm,
  },
  data() {
    return {
      Title: "Страница с постами",
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts(post) {
      try {
        this.isPostsLoading = true;
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = responce.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
  },
  //   watch: {
  //     selectedSort(newValue) {
  //       console.log(newValue);
  //       this.posts.sort((post1, post2) => {
  //         return post1[newValue]?.localeCompare(post2[newValue]);
  //       });
  //     },
  //   },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/imports.scss";

.app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
}

.app__btns {
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
}

.content {
  padding: 20px 0;
}

.posts {
  width: 100%;
  margin-top: 20px;
}
</style>
