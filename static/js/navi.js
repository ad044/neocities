$(document).ready(() => {
  $(".draggable").draggable();

  const toggleWin = (winId, winToggle) => {
    $(winId).toggle("fast");
    $(winToggle).toggleClass("topnav--active");
  };

  $("#main--toggle").click(() => {
    toggleWin("#main", "#main--toggle");
  });

  $("#communities--toggle").click(() => {
    toggleWin("#communities", "#communities--toggle");
  });

  $("#boards--toggle").click(() => {
    toggleWin("#boards", "#boards--toggle");
  });

  $("#subreddits--toggle").click(() => {
    toggleWin("#subreddits", "#subreddits--toggle");
  });

  $("#personal--toggle").click(() => {
    toggleWin("#personal", "#personal--toggle");
  });

  $("#discord--toggle").click(() => {
    toggleWin("#discord", "#discord--toggle");
  });

  $("#ircs--toggle").click(() => {
    toggleWin("#ircs", "#ircs--toggle");
  });

  $("#telegram--toggle").click(() => {
    toggleWin("#telegram", "#telegram--toggle");
  });

  $("#pleroma--toggle").click(() => {
    toggleWin("#pleroma", "#pleroma--toggle");
  });

  $("#misc--toggle").click(() => {
    toggleWin("#misc", "#misc--toggle");
  });
});
