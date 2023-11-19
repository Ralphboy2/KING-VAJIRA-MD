const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mongodbural:mongodbural@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347041784362'
global.devs = '2347041784362';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'VAJIRA 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Vajira' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkI1T3lRWmFTemtoWkwyUktOZDgzVUdhTncyRDRtejI0SjBTN05KMXEwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDJVay9qZEV6S3A2N1FsYkFBbmprY0ZrQnBWTGMxWjBwRnZGZGlnVG9EZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTS0Yvam1vbzh5M3NqMnFIbWZoU3hJaHJ3c0VBV0lBNHpKMXNNTWRZY0Y4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYjdhbW9IdUVMemdKa01MYjJOWUQ3WTEwalJiRVlFSVIwZ2RmTHdISTNJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPQjhqRFBWTm1ES2pjZVNkT1g0Q0VnVjRQbUhrMkNablBsVjJDUjFGR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1VMFo5WXJPem5HcmpSTng0aU1SeUVwSVlYc2Z2T1JBYUJSbXRyTHJzUUk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2M0MyT1RMUTMvTEd1YTZDcUU5VnVxSzlWYkVtM3RPNHRyMFoxNDMrTG9rVU9PTnh4ZG1IdU5GR1VLQ24xakgrM1dWYTZxZXluZzhkK1hYZm9UZ1NnUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2OCwiYWR2U2VjcmV0S2V5Ijoib1BtYWtzelVsRFBHYml3b0s5MUZQY0xTVnZrZXBCV3hGN095UDdiZ2VtQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQW9kcGYzekdTdy1wS0Z5V2UxSVhtdyIsInBob25lSWQiOiJlZDIzMmJiYS1hODU2LTQzYWEtYmYxZC1iYjVmMmU1ZWQ2YzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzhFOTBzQlZZZ0xiZjB2VlZWVGgraS9YVUlzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKbERYVXNiKzIwcXNpQkN3ZUNPYW5OS05CNXc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJM0pnSWtIRU5LYjU2b0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhtUlhuS1o4anZaY01Ob1pVWDAvRFJPR3RuaVFOcEUwMTkzMjNBUG1VbTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFmYmJkTjJpcFcwR29GRXRGSzMzSmVnM3BSZnBXbVBWaWp6RDZ3c004dlNybGdTRnYvcnNrMUkwUkhpZGlrUzBlRDZkUW1ORzk0aUVkWmFHdHZWZ0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3L1VZMzFKVE8wNjFycGQ5K0pCVDJLUml6OGo2QTdzL0hyaXBLV1llUzNkSG13QXJJVmNVZ092ZzJQZ0ZwR3Q2UlMwQ2JiSGR5NHJaVDJWL0s2ckZoZz09In0sIm1lIjp7ImlkIjoiMjM0NzA0MTc4NDM2MjoxNkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQxNzg0MzYyOjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNaa1Y1eW1mSTcyWEREYUdWRjlQdzBUaHJaNGtEYVJOTmZkOXR3RDVsSnUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDAzODQyMTd9 ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
