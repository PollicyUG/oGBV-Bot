var botui = new BotUI("my-botui-app");

botui.message
  .add({
    cssClass: "custom-class",
    content: "Hi, there!",
    // delay: 500,
    // loading: true,
    // content: 'Hi! there...',
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 500,
      loading: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">👋<p>',
    });
  })
  .then(function () {
    return botui.message.add({
      delay: 600,
      loading: true,
      content: "Ever wonder what its like to be a woman on the internet?",
    });
  })
  .then(function () {
    return botui.message.add({
      delay: 700,
      loading: true,
      content: "Lets chat about it.....",
    });
  })
  .then(function () {
    return botui.message.add({
      delay: 800,
      loading: true,
      content: "Click on the bubbles to move along",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Hello....",
          value: "hello",
        },
      ],
    });
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 800,
      human: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">👋<p>',
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      type: "embed",
      cssClass: "gif",
      content:
        "https://i.giphy.com/media/3o7bufPuskODYyUf4I/giphy-downsized.gif",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "Realities of the physical world are often mimicked and even amplified in online spaces.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "We wanted to find out about the lived experiences of women in digital spaces, so we set out to talk to women in five countries across Africa.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "You can read more about our study inception here (https://medium.com/pollicy/a-survival-guide-to-being-a-woman-on-the-internet-feminist-research-for-a-feminist-internet-e8e76e4ed20f)",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "What did you find out.....",
          value: "hello",
        },
      ],
    });
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 800,
      human: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">🤔<p>',
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "Well, at a first glance, it looks like around 27-30% of women have experienced some form of online harassment or violence!",
    });
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 800,
      loading: true,
      content:
        '<img src="./images/Chart-01.jpg" class="chart" alt="Smiley face" height="420" width="420">',
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "That’s more than I expected!",
          value: "more",
        },
        {
          text: "That’s less than I expected",
          value: "less",
        },
      ],
    });
  })
  .then(function (res) {
    var message;

    if (res.value === "more") {
      cssClass: "custom-class",
        (message =
          "We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.");
    } else if (res.value === "less") {
      message =
        "We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.";
    }

    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Tell me more about your reserach experience!",
          value: "tellme",
        },
        {
          text: "What else did you find",
          value: "Whatelse",
        },
      ],
    });
  })
  .then(function (res) {
    var message;

    if (res.value === "more") {
      message =
        "We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.";
    } else if (res.value === "less") {
      message =
        "We conducted quantitative interviews with women in capital cities as well as in-depth interviews with women to put a human face to these numbers.";
    }

    return botui.message.add({
      type: "html",
      delay: 1000,
      loading: true,
      content: message,
    });
  });
