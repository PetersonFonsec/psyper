<template>
  <div class="input-text">
    <label class="input-text__label" :for="_id">
      {{ _label }}
    </label>

    <input
      @input="onInput"
      :id="_id"
      :placeholder="_placeholder"
      v-model="value"
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
