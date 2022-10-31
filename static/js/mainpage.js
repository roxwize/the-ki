// This is for compatibility reasons, it returns true if the user is using internet explorer
function msieversion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

(function () {
  var story = [
    {
      speaker: "Theki",
      content: "Hi... it's me",
      choices: [{ content: "Hola", to: 1 }],
    },
    {
      speaker: "Theki",
      content: "Do you like my website",
      choices: [
        { content: "Yes", to: 3 },
        { content: "No !!", to: 2 },
      ],
    },
    {
      speaker: "Theki",
      content: "Fuck you! You die now.",
      choices: [{ content: "AaaAa ! ! !", to: 0 }],
    },
    {
      speaker: "Theki",
      content: "Thank you",
      choices: [{ content: "Yes", to: 4 }],
    },
    {
      speaker: "Theki",
      content: "What is your favourite pet",
      choices: [
        { content: "Cat", to: 5 },
        { content: "Dog", to: 2 },
      ],
    },
    {
      speaker: "Theki",
      content: "Color or colour ?",
      choices: [
        { content: "Color", to: 2 },
        { content: "Colour", to: 6 },
      ],
    },
    {
      speaker: "Theki",
      content: "You have passed the test ! Congratulation",
      choices: [
        { content: "Thank you", to: 6 },
        { content: "Start over", to: 0 },
      ],
    },
  ];

  var box = document.getElementById("box");

  var curNode = 0;

    function dostuff(i,node) {
        var n = node.choices[i];
        var btn = document.createElement("button");
        btn.innerHTML = n.content;
        btn.onclick = function () {
          curNode = n.to;
          changeBox(story[curNode]);
        };
        box.appendChild(btn);
    }
    
  function changeBox(node) {
    box.innerHTML =
      "<b>" + node.speaker + "</b><br/>" + node.content + "<br/><br/>";
    for (var i = 0; i < node.choices.length; i++) {
      dostuff(i,node);
    }
  }

  changeBox(story[curNode]);
})();
