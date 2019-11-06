const root = $("#root");

/**
 * Creates a JQuery element and applies the given style.
 * @param {string} tag
 * @param {*} style
 * @param {function} callback
 * @returns the created element.
 */
const elOf = (tag, style, callback, ...children) => {
  const e = $(`<${tag}>`).css(style);
  if (callback) callback(e);
  if (children) children.forEach(c => e.append(c));
  return e;
};

/**
 * Clear's the given component ot the root if null.
 * @param {*} component
 */
const clear = component => (component ? component : root).empty();

/**
 * Clears root and display's component
 * @param {function} component
 */
const show = component => {
  root.empty();
  root.append(component());
};

const TimeFrameState = time => ({
  time: time,
  saved: false
});
