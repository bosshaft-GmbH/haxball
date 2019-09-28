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
        "!ball" : bosshaftColorString
    },
    colors = {
        "red": 16711680,
        "green": 65280,
        "black": 0,
        "transparent": -1
    };

function bosshaftColor (o, r) {
    let e = r.split(/ +/);
    return room.setDiscProperties(0, {
        color: e[0]
    }), !1
}

function bosshaftColorString (o, r) {
    let e = r.split(/ +/);
    return (colors.hasOwnProperty(e[0].toLowerCase()) ? room.setDiscProperties(0, {
        color: colors[e[0].toLowerCase()]
    }) : room.sendAnnouncement("That color is not defined !", o.id)), !1
}

function updateAdmins () {
    var o = room.getPlayerList();
    0 != o.length && null == o.find(o => o.admin) && room.setPlayerAdmin(o[0].id, !0)
}
room.setDefaultStadium("Classic"), room.setScoreLimit(3), room.setTimeLimit(0), room.onPlayerJoin = function (o) {
    updateAdmins()
}, room.onPlayerChat = function (o, r) {
    let e = r.split(/ +/);
    if (1 == commands.hasOwnProperty(e[0].toLowerCase())) return commands[e[0].toLowerCase()](o, r)
};
