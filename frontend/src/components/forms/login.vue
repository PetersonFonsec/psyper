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
      <InputPasswod _label="Senha" _id="user-senha" _placeholder="Senha" />
    </div>

    <div>
      <InputSelect _label="estado" _id="user-estado" _placeholder="estado">
        <option> oprion 1 </option>
      </InputSelect>
    </div>

    <Button color="danger" size="md" _type="submit"> entrar </Button>
  </form>
</template>

<script>
import InputText from "../base/input-text";
import InputPasswod from "../base/input-password";
import InputSelect from "../base/input-select";
import Button from "../base/button";

export default {
  name: "FormLogin",
  components: {
    InputText,
    InputPasswod,
    InputSelect,
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

<style lang="scss" scoped>
@import "../../sass/input";
</style>
