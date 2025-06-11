require('dotenv').config();
const axios = require('axios');



async function scheduleMessage() {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.CHANNEL_ID;

  const postAt = Math.floor(Date.now() / 1000) + 60; // 1 min from now

  try {
    const res = await axios.post('https://slack.com/api/chat.scheduleMessage', {
      channel: channel,
      text: 'This is a scheduled message.',
      post_at: postAt
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
      }
    });

    console.log("Scheduled message:", res.data);
  } catch (err) {
    console.error("Error scheduling message:", err.response?.data || err.message);
  }
}

module.exports = scheduleMessage;
