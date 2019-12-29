<template>
  <div class="input-text">
    <label class="input-text__label" :for="_id">
      {{ _label }}
    </label>

    <input
      @input="onInput"
      :id="_id"
      :placeholder="_placeholder"
      class="input-text__input"
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
  methods: {
    onInput(value) {
      return this.$emit("value", value);
    }
  }
};
</script>
