const TimeFrameSave = state => {
  return elementOf("button", "timeframe-save", null, btn =>
    btn.text(/* TODO Change to floppydisk*/ "save").click(() => save(state))
  );
};

const TimeFrameTodo = state => {
  const past = state.time < moment().hours();
  const now = state.time == moment().hours();
  const yet = !(past || now);
  return elementOf(
    "textarea",
    "timeframe-todo",
    {
      color: now ? "black" : "white",
      "background-color": yet ? "green" : past ? "grey" : "red"
    },
    textarea =>
      textarea
        .text(state.text)
        .change(e => (state.text = e.target.value))
        .attr("disabled", past ? "true" : false)
  );
};

const TimeFrame = state => {
  return appendAll(
    divOf("timeframe"),
    divOf("timestamp", null, ts => ts.text(`${state.time}:00`)),
    TimeFrameTodo(state),
    TimeFrameSave(state)
  );
};

const TimeFrameList = () => {
  const states = loadStates();
  return appendAll(divOf("timeframe-list"), ...states.map(s => TimeFrame(s)));
};

const Content = () => {
  const contentBody = divOf().append(TimeFrameList());
  $("#date").text(moment().format("ddd D/M/YY"));
  $("#time").text(moment().format("HH:mm:ss"));
  setInterval(() => {
    $("#time").text(moment().format("HH:mm:ss"));
  }, 1000);
  setInterval(() => {
    $("#date").text(moment().format("ddd D/M/YY"));
    contentBody.empty().append(TimeFrameList());
  }, hour / updatePerHour);
  return contentBody;
};

show(Content);
