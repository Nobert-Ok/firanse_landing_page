<template>
  <div>
    <v-text-field
      type="text"
      outlined
      :label="label"
      v-model="word"
      @change="$emit('get', word)"
      :required="required"
      :placeholder="placeholder"
      class="mb-n4"
      :error-messages="errormsg"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      default: true,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    errormsg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      word: this.text,
    }
  },
}
</script>
<style lang="scss" scoped>
input {
  box-sizing: border-box;
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  padding: 10px 20px;
  text-rendering: auto;
  display: inline;
  width: 100%;
  @media screen and(min-width:768px) {
    width: 100%;
  }
}
div {
  width: 100%;
  margin: 25px 0;
}
label {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  margin: 10px 0;
  display: block;
}
input:focus {
  outline: none;
}
</style>