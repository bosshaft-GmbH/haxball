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
	"!radius": bosshaftRadius
};

function bosshaftRadius(r, o) {
	let e = o.substr(8),
	i = e.split("-").slice(0),
	t = e.split("-").slice(1);
	return room.setPlayerDiscProperties(i[0], {
		radius: t[0]
	}), !1
}

function updateAdmins() {
	var r = room.getPlayerList().filter(r => 0 != r.id);
	0 != r.length && null == r.find(r => r.admin) && room.setPlayerAdmin(r[0].id, !0)
}
room.setDefaultStadium("Classic"), room.setScoreLimit(3), room.setTimeLimit(0), room.onPlayerJoin = function(r) {
	updateAdmins()
}, room.onPlayerChat = function(r, o) {
	let e = o.search(" "),
	i = o.substr(0, -1 !== e ? e : o.length);
	if (1 == commands.hasOwnProperty(i)) return commands[i](r, o)
};
