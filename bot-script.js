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
      content: '<p style="color:yellow;text-align:center;font-size:50px">👋🏽<p>',
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
          text: "Hello!",
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
      delay: 4000,
      loading: true,
      content:
        "We wanted to find out about the lived experiences of women in digital spaces, so we set out to talk to women in five countries across Africa.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 3000,
      loading: true,
      content:
        "It looks like repeated negative encounters and micro-aggressions fundamentally impact how women navigate and utilize the internet.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 3000,
      loading: true,
      content:
        "Do you think we need radical, alternate digital networks grounded in feminist theory?",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Yes!",
          value: "hello",
        },
        {
          text: "No. That's absurd.",
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
        "Well, let's look at what we found out from talking to over 3000 women?",
    });
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 1500,
      human: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">👍<p>',
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "At first glance, it looks like around 1 in 3 women have experienced some form of online violence.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      type: "html",
      delay: 800,
      loading: true,
      content:
        '<img src="./images/Chart-01.jpg" class="chart" alt="Smiley face" background-color=#ffffff height="500" width="420">',
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
  .then(function (index) {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content:
        "Really?",
    });  
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 500,
      loading: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">🧐<p>',
    });
  })
  .then(function () {
    return botui.message.add({
      type: "html",
      delay: 800,
      human: true,
      content: '<p style="color:yellow;text-align:center;font-size:50px">🤷‍♀️<p>',
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 3000,
      loading: true,
      content:
        "Women are more likely to be repeat victims of online gender-based violence and are more likely to experience it in severity than men",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 4000,
      loading: true,
      content:
        "For example, Amnesty International researchers found that black women journalists and politicians in the US and UK were 84% more likely to be the target of hate speech online compared to their white counterparts.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 4000,
      loading: true,
      content:
        "Our research showed that 39.3% of respondents were either somewhat concerned or very concerned about their safety online.",
    });
  })
  .then(function (index) {
    return botui.message.add({
      delay: 4000,
      loading: true,
      content:
        "Would you like to read some of the perspectives of our interviewees?",
    });
  })
  .then(function () {
    return botui.action.button({
      action: [
        {
          text: "Definitely!",
          value: "yes",
        },
        {
          text: "Maybe later?",
          value: "no",
        },
      ],
    });
  }) .then(function (res) { var message;
    if (res.value === "yes") { (message = "Good choice. The women we spoke to were generous with their time in detailing their experience and sharing their thoughts with us!"); 
  } else if (res.value === "no") { message = "How about just one? The women we spoke to were very generous with time and in sharing their experiences and thoughts with us!"; }
  return botui.message.add({ type: "html", delay: 1000, loading: true, content: message, });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "One of the women we spoke to in Ethiopia told us, 'Our society is deeply rooted in the cultural and religious perspective, where both of them undermine and discriminate against women. This is what we are going to see in online spaces. We have seen the type of backlash the feminist movements face online. There is no constructive criticism. It’s all about slut shaming, image tarnishing, and body shaming. Even though the movement is growing and defending each other or standing in solidarity with one another, it is sometimes very tiring.''",
});
});