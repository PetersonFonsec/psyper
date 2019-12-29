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
      class="input__text"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
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
      type: String
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onInput() {
      return this.$emit("onInput", this.value);
    }
  }
};
</script>

<style lang="scss" scoped>

@import "../../sass/base/index";
.input {
  border: none;
  border-radius: 5px;
  font-family: $font-nunito;
  font-weight: 600;

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