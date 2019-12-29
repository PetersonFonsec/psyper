<template>
  <div class="input-select">
    <label class="input-select__label" :for="_id">
      {{ _label }}
    </label>

    <select
      @input="onChange"
      :id="_id"
      :placeholder="_placeholder"
      class="input-select__input"
    >
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
      type: String
    }
  },
  methods: {
    onChange(value) {
      return this.$emit("value", value);
    }
  }
};
</script>
