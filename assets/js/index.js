const root = $("#root");

const elementOf = (tag, className, style, callback) => {
  const e = $(`<${tag}>`).addClass(className);
  if (style) e.css(style);
  if (callback) callback(e);
  return e;
};

/**
 * Creates a JQuery div element and applies the given style.
 * @param {string} tag
 * @param {*} style
 * @param {function} callback
 * @returns the created element.
 */
const divOf = (className, style, callback) =>
  elementOf("div", className, style, callback);

const appendAll = (parent, ...children) => {
  children.forEach(c => parent.append(c));
  return parent;
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
const show = component => clear().append(component());

// Save Data & State

const hour = 1000 * 60 * 60;
const updatePerHour = 30;
const timeRange = { min: 9, max: 17 };

const loadStates = () => {
  let states = [];
  for (let i = timeRange.min; i <= timeRange.max; i++) {
    states.push(
      localStorage[i] ? JSON.parse(localStorage[i]) : { time: i, text: "" }
    );
  }
  return states;
};

/**
 * Save a TimeFrame state objet to local storage.
 * @param {*} state
 */
const save = state => {
  localStorage[state.time] = JSON.stringify(state);
};
