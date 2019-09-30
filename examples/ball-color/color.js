var room = HBInit({
        roomName: "https://github.com/bosshaft-GmbH",
        maxPlayers: 16,
        public: !1,
        noPlayer: !0,
        geo: {
            code: "TR",
            lat: 41.00824,
            lon: 28.978359
        }
    }),
    commands = {
        "!customball": bosshaftColor,
        "!ball": bosshaftColorString
    },
    colors = {
        red: 16711680,
        green: 65280,
        black: 0,
        transparent: -1
    };

function bosshaftColor(o, r) {
    let t = r.split(/ +/).slice(1);
    return room.setDiscProperties(0, {
        color: t[0]
    }), !1
}

function bosshaftColorString(o, r) {
    let t = r.split(/ +/).slice(1);
    return colors.hasOwnProperty(t[0].toLowerCase()) ? room.setDiscProperties(0, {
        color: colors[t[0].toLowerCase()]
    }) : room.sendAnnouncement("That color is not defined !", o.id), !1
}

function updateAdmins() {
    var o = room.getPlayerList();
    0 != o.length && null == o.find(o => o.admin) && room.setPlayerAdmin(o[0].id, !0)
}
room.setDefaultStadium("Classic"), room.setScoreLimit(3), room.setTimeLimit(0), room.onPlayerJoin = function(o) {
    updateAdmins()
}, room.onPlayerChat = function(o, r) {
    let t = r.split(/ +/);
    if (o.admin && 1 == commands.hasOwnProperty(t[0].toLowerCase())) return commands[t[0].toLowerCase()](o, r);
    o && room.sendAnnouncement("Only admins can change ball color.", o.id)
}, room.onGameStart = function() {
	// remove this part if you don't want to change the ball color every second 
    function o() {
        for (var o = "0x", r = 0; r < 6; r++) o += "0123456789ABCDEF" [Math.floor(16 * Math.random())];
        return o
    }
    setInterval(function() {
        room.setDiscProperties(0, {
            color: o()
        })
    }, 1)
    // remove this part if you don't want to change the ball color every second 
};
