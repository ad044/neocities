$(document).ready(() => {
  const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const playText = () => {
    setTimeout(() => {
      $("#intro__header").html("TSU_");
    }, 100);
    setTimeout(() => {
      $("#intro__header").html("TSUKI\\");
    }, 180);
    setTimeout(() => {
      $("#intro__header").html("TSUKI I|");
    }, 270);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS/");
    }, 350);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS GA-");
    }, 450);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS GAY\\");
    }, 510);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS GAY|");
    }, 620);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS GAY/");
    }, 690);
    setTimeout(() => {
      $("#intro__header").html("TSUKI IS G-");
    }, 740);
    setTimeout(() => {
      $("#intro__header").html("TSUKI I\\");
    }, 800);
    setTimeout(() => {
      $("#intro__header").html("TSUKI|");
    }, 880);
    setTimeout(() => {
      $("#intro__header").html("/");
    }, 940);
    setTimeout(() => {
      $("#intro__header").html("-");
    }, 1040);
    setTimeout(() => {
      $("#intro__header").html("\\");
    }, 1120);
    setTimeout(() => {
      $("#intro__header").html("SYS");
    }, 1140);
    setTimeout(() => {
      $("#intro__header").html("SYSTEM\\");
    }, 1170);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSP\\");
    }, 1240);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPAC|");
    }, 1340);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE I//");
    }, 1390);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>");
    }, 1420);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PR");
    }, 1440);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRE\\");
    }, 1490);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETT|");
    }, 1540);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETTY DE-");
    }, 1580);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETTY DEa");
    }, 1640);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETTY DEad :");
    }, 1670);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETTY DEad :^)");
    }, 1690);
    setTimeout(() => {
      $("#intro__header").html("SYSTEMSPACE IS <br>PRETTY DEad :^)");
    }, 1720);
  };

  const bgm = new Howl({
    src: "../ogg/bgmoosik.ogg",
    volume: 0.1,
    loop: true,
  });

  const playIntro = () => {
    if (getCookie("seenintro") !== "y") {
      playText();
      $("#intro").addClass("ready");
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1700);
      setTimeout(() => {
        $("#intro").addClass("destroyed");
        setCookie("seenintro", "y", 356);
      }, 1700);
      bgm.play();
    } else {
      $("#intro").hide();
      bgm.play();
    }
  };

  playIntro();
});
