const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    x: 0,
    y: 0,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    x: 250,
    y: 150,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
function codeforces() {}
