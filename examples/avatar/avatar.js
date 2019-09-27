var room = HBInit({
        roomName: "https://github.com/bosshaft-GmbH",
        maxPlayers: 6,
        playerName: "Bosshaft GmbH",
        public: !1,
        geo: {
            code: "TR",
            lat: 41.00824,
            lon: 28.978359
        }
    }),
    commands = {
        "!avatar": bosshaftAvatar
    };

function bosshaftAvatar(t, o) {
    let a = o.substr(8),
        r = a.split("-").slice(0),
        e = a.split("-").slice(1);
    return room.setPlayerAvatar(r[0], e[0]), !1
}

function updateAdmins() {
    var t = room.getPlayerList().filter(t => 0 != t.id);
    0 != t.length && null == t.find(t => t.admin) && room.setPlayerAdmin(t[0].id, !0)
}
room.setDefaultStadium("Classic"), room.setScoreLimit(3), room.setTimeLimit(0), room.onPlayerJoin = function(t) {
    updateAdmins()
}, room.onPlayerChat = function(t, o) {
    let a = o.search(" "),
        r = o.substr(0, -1 !== a ? a : o.length);
    if (1 == commands.hasOwnProperty(r)) return commands[r](t, o)
};
