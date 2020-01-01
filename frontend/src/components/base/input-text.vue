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
  font-family: $font-nunito;

  &__label {
    display: block;
    font-size: 18px;
  }

  &__text {
    border-radius: 3px;
    border: 1px solid #bcbcbc;
    font-size: 18px;
    height: 40px;
    padding-left: 15px;
    outline: none;
  }

  &::placeholder {
    color: #858585;
  }
}
</style>
