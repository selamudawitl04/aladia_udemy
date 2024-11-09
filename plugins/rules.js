import { defineRule } from "vee-validate";

export default defineNuxtPlugin((vueApp) => {
  defineRule("required", (value, [], ctx) => {
    return !!value || value?.length || "Field Required";
  });
  defineRule("boolReq", (value, [], ctx) => {
    return typeof value == "boolean" || "Field Required";
  });

  defineRule("number", (value) => {
    return !value || /^[0-9]+$/.test(value) || "Number only";
  }),
    defineRule("numberFromZero", (value, [], ctx) => {
      return /^(?:0|[1-9]\d*)$/.test(value) || "Number only";
    });

  defineRule("email", (value) => {
    return (
      !value ||
      /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        value
      ) ||
      "Not Valid Email"
    );
  });
});
