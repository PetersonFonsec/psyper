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
@import "../../sass/input";
</style>
