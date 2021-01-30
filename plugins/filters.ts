import Vue from "vue";

// TODO: Parse gender values to friendly values
Vue.filter("genderParser", function(value: string): string {
  if (value === "male") return "Male";
  if (value === "female") return "Female";
  if (value === "n/a") return "Unknown";
  return "Unknown";
});

// Pluralize filter
Vue.filter("pluralize", function(word: string, amount: number): string {
  return amount > 1 || amount === 0 ? `${word}s` : word;
});

// TODO: Parse eye color values to friendly values
Vue.filter("eyeParser", function(value: string): string {
  if (!value) return "Unknown";
  return "";
});

// TODO: Parse skin color values to friendly values
Vue.filter("skinParser", function(value: string): string {
  if (!value) return "Unknown";
  return "";
});

// TODO: Parse film id to episode number
Vue.filter("filmParser", function(value: string): string {
  if (!value) return "Unknown";
  return "";
});
