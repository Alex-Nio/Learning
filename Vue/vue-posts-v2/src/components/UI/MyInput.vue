<template>
  <input :value="modelValue" @input="upadteInput" class="input" type="text" />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    upadteInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 15px 20px;
  margin: 10px 0;
}
</style>
