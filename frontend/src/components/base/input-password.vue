<template>
  <div class="input">
    <label class="input__label" :for="_id">
      {{ _label }}
    </label>

    <input
      @input="onInput"
      :id="_id"
      :placeholder="_placeholder"
      v-model="value"
      :type="type"
    />

    <span class="input__icon">
      <i @click="togglePassword" :class="icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "InputPassword",
  props: {
    _label: {
      require: true,
      type: String
    },
    _id: {
      require: true,
      type: String
    },
    _type: {
      type: String,
      default: () => "text"
    },
    _placeholder: {
      type: String
    }
  },
  data() {
    return {
      showPassword: false,
      value: ""
    };
  },
  computed: {
    icon() {
      return this.showPassword ? "icon-eye-open" : "icon-eye-close";
    },
    type() {
      return this.showPassword ? "text" : "password";
    }
  },
  methods: {
    onInput() {
      return this.$emit("onInput", this.value);
    },
    togglePassword() {
      return (this.showPassword = !this.showPassword);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/input";
</style>
