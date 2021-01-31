import Vue from "vue";

// Gender parser to friendly
Vue.filter("genderParser", function(value: string): string {
  if (value === "male") return "Male";
  if (value === "female") return "Female";
  return "Unknown";
});

// Pluralize filter
Vue.filter("pluralize", function(word: string, amount: number): string {
  return amount > 1 || amount === 0 ? `${word}s` : word;
});

// Hair and eye color to friendly
Vue.filter("naParser", function(value: string): string {
  return value === "n/a" ? "Doesn't have" : value;
});

// Mass parser to friendly
Vue.filter("massParser", function(value: string): string {
  if (value !== "unknown" && value !== "n/a") return `${value} kg`;
  return "Unknown";
});

// Height parser to friendly
Vue.filter("heightParser", function(value: string): string {
  if (value !== "unknown" && value !== "n/a") return `${value} cm`;
  return "Unknown";
});

// Capitalize filter
Vue.filter("capitalize", function(value: string): string {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
