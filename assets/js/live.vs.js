YT.live = {
  vs1: "",
  vs2: "",
  update: function () {
    $.getJSON(
      "https://livecounts.xyz/api/youtube-live-subscriber-count/live/" +
        YT.live.vs1,
      function (f) {
        $.getJSON(
          "https://livecounts.xyz/api/youtube-live-subscriber-count/live/" +
            YT.live.vs2,
          function (g) {
            YT.updateManager.updateSubscribers(f.counts[0], g.counts[0]);
          }
        );
      }
    );
  },
  timer: null,
  setVS: function (e, f) {
    this.vs1 = e;
    this.vs2 = f;
    this.start();
  },
  start: function () {
    this.stop();
    YT.query.begin();
    this.timer = setInterval(function (e) {
      YT.live.update();
    }, 2000);
    YT.live.update();
  },
  stop: function () {
    clearInterval(this.timer);
  },
};
