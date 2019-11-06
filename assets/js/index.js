const root = document.getElementById("root");

/**
 * Generates a style string from an object.
 * @param {*} styleSpec
 */
const styleOf = styleSpec =>
  styleSpec.entries.map((k, v) => `${k}:${v};`).join();

const elementOf = (tag, style, callback) => {
  const e = document.createElement(tag);
  e.setAttribute("style", styleOf(style));
};
