var room = HBInit({
        roomName: "https://github.com/bosshaft-GmbH",
        maxPlayers: 16,
        playerName: "Bosshaft GmbH",
        public: !1,
        geo: {
            code: "TR",
            lat: 41.00824,
            lon: 28.978359
        }
    }),
    commands = {
        "!customball": bosshaftColor
    };

function bosshaftColor(o, r) {
    let e = r.substr(8),
        s = e.split("-").slice(0),
        t = e.split("-").slice(1);
    return room.setDiscProperties(s[0], {
        color: t[0]
    }), !1
}

function updateAdmins() {
    var o = room.getPlayerList().filter(o => 0 != o.id);
    0 != o.length && null == o.find(o => o.admin) && room.setPlayerAdmin(o[0].id, !0)
}
room.setDefaultStadium("Classic"), room.setScoreLimit(3), room.setTimeLimit(0), room.onPlayerJoin = function(o) {
    updateAdmins()
}, room.onPlayerChat = function(o, r) {
    let e = r.search(" "),
        s = r.substr(0, -1 !== e ? e : r.length);
    if (1 == commands.hasOwnProperty(s)) return commands[s](o, r);
    switch (r) {
        case "!ball red":
            return room.setDiscProperties(0, {
                color: 16711680
            }), !1;
        case "!ball green":
            return room.setDiscProperties(0, {
                color: 65280
            }), !1;
        case "!ball" + colors[o]:
            return room.setDiscProperties(0, {
                color: 255
            }), !1;
        case "!ball black":
            return room.setDiscProperties(0, {
                color: 0
            }), !1;
        case "!ball transparent":
            return room.setDiscProperties(0, {
                color: -1
            }), !1
    }
};
