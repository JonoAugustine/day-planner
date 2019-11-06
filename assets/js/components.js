const TodoArea = state => {
  return elOf(
    "input",
    {
      width: "100%",
      height: "100%",
      float: "left",
      "background-color": "green"
    },
    input => {
      input.attr("value", state ? state.text : "");
      input.attr("type", "textArea");
    }
  );
};

const SaveButton = (state, todo) => {
  return elOf(
    "div",
    {
      width: "10%",
      height: "100%",
      float: "left",
      "background-color": "aqua"
    },
    div => {
      // TODO save functionality
    }
  );
};

const TimeFrame = (time, state) => {
  const todo = TodoArea(state);
  const save = SaveButton(state, todo);
  return elOf(
    "div",
    {
      height: "50px",
      width: "100%",
      display: "flex",
      "border-top": "1px solid"
    },
    null,
    elOf(
      "div",
      {
        width: "10%",
        float: "left",
        "text-align": "right"
      },
      div => {
        div.text("time");
      }
    ),
    todo,
    save
  );
};

const TimeFrameSection = () => {
  return elOf(
    "div",
    {
      height: "100%",
      width: "70%",
      margin: "0 auto"
    },
    () => {},
    TimeFrame()
  );
};

show(TimeFrameSection);
