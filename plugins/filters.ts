import Vue from "vue";

// TODO: Parse gender values to friendly values
Vue.filter("genderParser", function(value: String): String {
  if (!value) return "Unknown";
  return "";
});

// TODO: Parse eye color values to friendly values
Vue.filter("eyeParser", function(value: String): String {
  if (!value) return "Unknown";
  return "";
});

// TODO: Parse skin color values to friendly values
Vue.filter("skinParser", function(value: String): String {
  if (!value) return "Unknown";
  return "";
});

// TODO: Parse film id to episode number
Vue.filter("filmParser", function(value: String): String {
  if (!value) return "Unknown";
  return "";
});
