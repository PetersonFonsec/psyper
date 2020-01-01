<template>
  <div :id="_id" class="select">
    <label> {{ _label }} </label>

    <select>
      <option selected>{{ _placeholder }}</option>
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: "InputSelect",
  props: {
    _label: {
      require: true,
      type: String
    },
    _id: {
      require: true,
      type: String
    },
    _placeholder: {
      require: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/select";
</style>
