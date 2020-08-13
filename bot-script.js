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
        '<img src="https://res.cloudinary.com/dbjmgr0gb/image/upload/v1591609647/oGBV/oGBV.png" class="chart" alt="Smiley face" background-color=#ffffff height="640" width="500">',
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
        "When we look at issues of race, Amnesty International researchers found that black women journalists and politicians in the US and UK were 84% more likely to be the target of hate speech online compared to their white counterparts.",
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
      "One of the women we spoke to in Ethiopia 🇪🇹 told us, 'Our society is deeply rooted in the cultural and religious perspective, where both of them undermine and discriminate against women. This is what we are going to see in online spaces. We have seen the type of backlash the feminist movements face online. There is no constructive criticism. It’s all about slut shaming, image tarnishing, and body shaming. Even though the movement is growing and defending each other or standing in solidarity with one another, it is sometimes very tiring.' ",
});
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Another, please!",
        value: "yes",
      },
      {
        text: "Let's move on.",
        value: "no",
      },
    ],
  });
}) .then(function (res) { var message;
  if (res.value === "yes") { (message = "'The misogyny. There are no consequences. Patriarchy is the structure that all other structures stem from. We get social tools. Now, they are able to access women they didn’t think they could access. The whole idea of how women are seen, or expected to be in society is still very much present. There has to be a reason why someone hurt her. A woman has to have done something wrong. Social media is opening up our eyes, this is what society is. This is the way people think, social media just amplifies it. Sometimes, I get really shocked. How deep are we all in this socialization? How much power does patriarchy really have? It’s now started making sense to a lot of people, the way this has been handled is wrong. Women being violated is still perceived as an absolutely OK thing,” from an woman in Kenya 🇰🇪.'"); 
} else if (res.value === "no") { message = "Let's 👍"; }
return botui.message.add({ type: "html", delay: 1000, loading: true, content: message, });
})
.then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content:
      "Did you know that in 2019, the digital gender gap in mobile internet use for sub-Saharan Africa was 41%, with safety and security ranking third among the single most important barrier to owning a mobile phone, as identified by non-mobile owning women?",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Woah!",
        value: "more",
      },
      {
        text: "Yeah. To be expected.",
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
      "Our research showed that a significant proportion (29.2%) of respondents did not know where to turn for information on online safety and security.",
  });
})
.then(function () {
  return botui.message.add({
    type: "html",
    delay: 3000,
    loading: true,
    content: '<p style="color:yellow;text-align:center;font-size:50px">😱<p>',
  });
})
.then(function (index) {
  return botui.message.add({
    type: "html",
    delay: 800,
    loading: true,
    content:
      '<img src="https://res.cloudinary.com/dbjmgr0gb/image/upload/v1591609647/oGBV/Platform.png">',
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "A majority (71.2%) of all the incidents of online gender-based violence against the respondents occurred on Facebook. In Kenya 🇰🇪, Uganda 🇺🇬, Senegal 🇸🇳 and South Africa 🇿🇦, this violence happens primarily on Facebook and Whatsapp. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "In Ethiopia 🇪🇹, while respondents suffered from offensive name-calling and threats on Facebook, they were often doxxed on Telegram and were unable to remove this content.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "We asked, 'Why are closed platforms like Telegram different from open platforms like Facebook?'",
  });
})
.then(function () {
  return botui.message.add({
    type: "html",
    delay: 2000,
    human: true,
    content: '<p style="color:yellow;text-align:center;font-size:50px">🤨<p>',
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "The power of the administrators and the perpetrators is of particular importance in this case. Administrators continue to uphold the ideals of patriarchy, which places power in the hands of men in cultural, social, and political spaces, with little recourse for justice afforded to female victims. In the latter situations, abuse can be “performative”, and a source of social clout to build up the status and identity of the perpetrator.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "In both situations, the final outcome is the silencing of women and their dismissal from digital spaces.",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Mhmmm. Go on.",
        value: "more",
      },
      {
        text: "Ok, but who are the perpetrators?",
        value: "less",
      },
    ],
  });
})
.then(function () {
  return botui.message.add({
    type: "html",
    delay: 1000,
    human: true,
    content: '<p style="color:yellow;text-align:center;font-size:50px">🧐<p>',
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "For 57% of the respondents who had experienced online gender-based violence, only one specific person was responsible for the incidents. However, in 23% of the cases, multiple people were involved in the online attack. Organized trolling has been on the rise, especially against women with public-facing careers such as journalists, media personalities, activists and politicians.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "In the case of Ethiopia 🇪🇹, ninety percent (90%) of respondents who have experienced online violence either did not know the identity of the perpetrator or the perpetrator was a stranger. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Keep in mind, that there are many more secondary perpetrators, i.e. the persons who negligently or recklessly download, share or like offensive data or information.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Here's a quote from an activist we spoke with, 'Online threats are mainly organized trolling. I’ve received death threats. They come up with campaigns or a hashtag, so they rant at me all day. These insults are based on me as a woman, my anatomy, my family. They will use parts of the female body. The insults are so personal. There is a time I considered leaving Facebook and Twitter because the trolling became so bad. They use money and people to troll me online.' ",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Don't feed the trolls! 🙅🏿‍♀️ ",
        value: "more",
      },
      {
        text: "Women should fight back! 👊🏾",
        value: "less",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "Convention has recommended ignoring online harassment, eg. “Don’t feed the trolls”, however, there is a growing sentiment around the inefficacy of this approach.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Women who have experienced technology-related violence have also reported its impact on their mental health, including but not limited to suffering from depression, anxiety, fear, and an overall sense of powerlessness.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "Our study found that in Kenya 🇰🇪, seventy four percent (74.7%) of women surveyed reported suffering from mental stress and anxiety. In Ethiopia 🇪🇹, 20.4% reported problems with friends and family, 14.8% - damage to reputation, and 9.2% - problems at the workplace.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "A woman from Ethiopia 🇪🇹 narrated her ordeal, 'I didn’t have self-esteem and confidence because I felt like everybody was staring at me because of this incident. Maybe some students in the university are members of that group. Can you imagine what people are thinking about me after they saw the post? OMG, that was the hardest time I ever had in my life.' ",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "How do women respond to this violence?",
        value: "response",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    type: "html",
    delay: 800,
    loading: true,
    content:
      '<img src="https://res.cloudinary.com/dbjmgr0gb/image/upload/v1591609647/oGBV/Women-Response.png" class="chart" alt="Smiley face" background-color=#ffffff height="800" width="500">',
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Sixty-six percent (66%) of the women we interviewed reported blocking perpetrators as means of responding to online violence. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "More disturbingly, 14.5% of women deleted or deactivated their accounts whereas 12.2% stopped using a digital service after experiencing online violence.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 1000,
    type: "embed",
    cssClass: "gif",
    content:
      "https://i.giphy.com/media/l2JhDpSMnXPYsvK36/giphy-downsized.gif",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Do governments protect women?",
        value: "response",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Ninety-five percent (95%) of the women in Uganda 🇺🇬 were not aware of any policies and laws in place to protect them against online gender-based violence in their country.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 3000,
    loading: true,
    content:
      "Some respondents who tried to approach police were insulted, laughed at, or told to come back if the case escalated further. A participant from Ethiopia 🇪🇹 told us, 'Women are not reporting even the domestic violence because of the culture and the norm. Imagine going to report online GBV, they are going to make fun of you and tell you to come when the real violence happens.'",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "And technology platforms? How do they respond?",
        value: "response",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    type: "html",
    delay: 800,
    loading: true,
    content:
      '<img src="https://res.cloudinary.com/dbjmgr0gb/image/upload/v1591609647/oGBV/Response.png">',
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "😇 ",
        value: "more",
      },
      {
        text: "😶",
        value: "less",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "Only 12.4% of the women who had suffered from online violence reported the incident to the website or online platform. Unresolved incidents were around 28.2% on average. This figure reached as high as 57% in Uganda 🇺🇬 and 35% in South Africa 🇿🇦. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "Thirty-three percent (33%) of respondents in Kenya 🇰🇪 who reported to the platform received a reply, but no action was taken in terms of pulling down the content or penalizing the perpetrator. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "A focus group participant put it well, 'There is little representation of tech companies on the African continent: As well, Facebook has no office in Ethiopia and there is only one Ethiopian woman assigned for this purpose in Ethiopia. Facebook in Ethiopia gives priority and focuses on ethnic-based hate speech. Lets say if there is more than one person and if we have an Ethiopian team, there will be more human power who could read and understand the content.'",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "Yikes!",
        value: "more",
      },
      {
        text: "Meh.",
        value: "less",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "Yea. Research on the institutional response to online gender-based violence from both governmental bodies and the private sector agents, such as social media platforms, is lacking.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 4000,
    loading: true,
    content:
      "There are limits to the impact that “victim-focused” research alone can achieve, and there a need to move the needle on responses by government bodies (eg. African Union, iNGOs) and social media platforms to prevent online gender-based violence and deal with perpetrators and aggressors in an appropriate manner.",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "What's next?",
        value: "next",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "African women need an internet that serves our needs.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "When thinking of our afrofeminist future, we need to consider an internet where both the developers and users understand the intersectionality of the lived experience of an African woman.",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "With talks of a Web 3.0 based on “decentralised architecture, open protocols and community governance”, this is an opportunity to re-design an internet based on afrofeminist thinking and philosophies.  ",
  });
})
.then(function () {
  return botui.action.button({
    action: [
      {
        text: "I like this idea!",
        value: "more",
      },
      {
        text: "I don't like this idea.",
        value: "less",
      },
    ],
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "Thanks for staying with me till the end. We need to continue to think critically about how we can co-create an internet that celebrates, encourages and provides safe spaces to a spectrum of identities. ",
  });
})
.then(function (index) {
  return botui.message.add({
    delay: 2000,
    loading: true,
    content:
      "Get in touch with us if you want to give us feedback or just share your thoughts: info at pollicy dot org",
  });
})
.then(function () {
  return botui.message.add({
    type: "html",
    delay: 5000,
    loading: true,
    content: '<p style="color:yellow;text-align:center;font-size:50px">👋🏽<p>',
  });
})
.then(function () {
  return botui.message.add({
    type: "html",
    delay: 3000,
    human: true,
    content: '<p style="color:yellow;text-align:center;font-size:50px">👋<p>',
  });
})