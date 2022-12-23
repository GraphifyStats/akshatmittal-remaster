YT.live = {
    channelID: "",
    update: function () {
        $.getJSON("https://livecounts.xyz/api/youtube-live-subscriber-count/live/" + this.channelID, function (e) {
            if(e) {
                YT.updateManager.updateSubscribers(e.counts[0]);
                YT.updateManager.updateVideos(e.counts[2]);
            } else {
                YT.query.newSearch(YT.live.channelID);
            }
        })
        $.getJSON("https://mixerno.space/api/youtube-channel-counter/user/" + this.channelID, function (e) {
            if (e) {
                YT.updateManager.updateViews(e.counts[3].count);
            } else {
                YT.query.newSearch(YT.live.channelID);
            }
        });
    },
    timer: null,
    start: function () {
        this.stop();
        this.timer = setInterval(function (e) {
            YT.live.update();
        }, 2000);
        YT.live.update();
    },
    stop: function () {
        clearInterval(this.timer);
    }
};
