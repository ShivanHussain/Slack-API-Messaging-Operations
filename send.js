require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

async function sendMessage() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.CHANNEL_ID;

  try {
    const res = await axios.post('https://slack.com/api/chat.postMessage', {
      channel: channel,
      text: 'Hello from my Node.js app!',
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      }
    });

    console.log("Message sent:", res.data);



    // After message is sent successfully
    const ts = res.data.ts;
    

    fs.writeFileSync('message.json', JSON.stringify({ ts, channel }, null, 2));
    console.log("Message sent and ts saved.");
  } catch (err) {
    console.error("Error sending message:", err.response?.data || err.message);
  }
}

module.exports = sendMessage;
