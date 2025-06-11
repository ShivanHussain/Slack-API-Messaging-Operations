require('dotenv').config();
const axios = require('axios');
const fs = require('fs');



async function editMessage() {
    const token = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.CHANNEL_ID;

    const data = JSON.parse(fs.readFileSync('message.json', 'utf8'));

    const messageTs = data.ts;

    try {
        const res = await axios.post('https://slack.com/api/chat.update', {
            channel,
            ts: messageTs,
            text: 'This message has been edited via Node.js'
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        console.log("Edited message:", res.data);
    } catch (err) {
        console.error("Error editing message:", err.response?.data || err.message);
    }
}

module.exports = editMessage;