<template>
  <button
    :type="_type"
    class="button"
    :class="
      `
        button--${color}
        button--${size}
    `
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: () => " "
    },
    size: {
      type: String,
      default: () => " "
    },
    radio: {
      type: String,
      default: () => " "
    },
    _type: {
      type: String,
      default: () => "button"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/base/index";
.button {
  border: none;
  border-radius: 5px;
  font-family: $font-nunito;
  font-weight: 600;

  //color
  &--primary {
    background-color: $color-primary;
    color: $color-white;
  }

  &--danger {
    background-color: $color-danger;
    color: $color-white;
  }

  &--dark {
    background-color: $color-dark;
    color: $color-white;
  }

  &--success {
    background-color: $color-success;
    color: $color-white;
  }

  &--info {
    background-color: $color-info;
    color: $color-white;
  }

  //border radius

  &--radio-md {
    border-radius: 10px;
  }

  &--radio-lg {
    border-radius: 25px;
  }

  //size
  &--sm {
    padding: 5px;
  }

  &--md {
    padding: 10px;
  }

  &--lg {
    padding: 15px;
  }
}
</style>
