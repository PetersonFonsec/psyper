<template>
  <form @submit.prevent="_submit" class="form-login">
    <div>
      <InputText
        _label="Email"
        @onInput="email"
        _id="user-email"
        _placeholder="insira seu email"
      />
    </div>

    <div>
      <InputText _label="Senha" _id="user-senha" _placeholder="Senha" />
    </div>

    <Button color="danger" size="md" _type="submit"> entrar </Button>
  </form>
</template>

<script>
import InputText from "../base/input-text";
import Button from "../base/button";

export default {
  name: "FormLogin",
  components: {
    InputText,
    Button
  },
  data() {
    return {
      valueEmail: ""
    };
  },
  methods: {
    email(value) {
      this.valueEmail = value;
    },
    _submit() {
      console.log("submit");
    }
  }
};
</script>

<style lang="sass" scoped></style>
