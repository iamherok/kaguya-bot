const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` *WHATSAPP-BOT*

 |*Hi ${pushname} I am kaguya nice to meet you use !help to see the commands*|

`
}

const ingfo = `
*━━━━❰ Owner ❱━━━━*
➪setpp, eval, term, block, unblock, join, bc, addvn, delvn, premium add, premium del, premium list, clearall, self, public

*━━━━❰ Utils ❱━━━━*
➪tomp3, removebg, tts, stickerwm, takestick, toimg, togif, semoji, stickerfire, stickernobg, stickergif, sticker

*━━━━❰ Image ❱━━━━*
➪marvellogo |text1|text2, pubglogo |text1|text2, watercolour |text1|text2, thundertext |text, gplaybutton |text, splaybutton |text, tlight |text, naruto |text

*━━━━❰ Search ❱━━━━*
➪ytsearch, spotify, searchmusic, wallpaper, pinterest, googleimage

*━━━━❰ Anime ❱━━━━*
➪anime |name, manga |name, chara |name, waifu, neko, husbu

*━━━━❰ Group ❱━━━━*
➪group |open|close, antilink |on|off, welcome |on|off, leave |on|off, setgroupicon |replyImage, setgroupname |text, setgroupdesc |text, hidetag |text, promote |@tag, demote |@tag, kick |@tag, add |number, getpp |@tag, tagall, linkgroup, revoke, leave
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: '*[WAIT]* ⌛ ',
			 group: '*[THIS COMMAND CAN ONLY BE USED IN GROUPS]*⛔',
			 admin: '*[ADMINS ONLY]*🎐',
			 botAdmin: '*[THIS COMMAND CAN ONLY BE USED IF THE BOT IS ADMIN IN THE GROUP]* 🎍',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: '*[OWNER ONLY]*🗻'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
