require('dotenv').config();
const axios = require('axios');
const fs = require('fs');


async function deleteMessage() {
    const token = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.CHANNEL_ID;


    const data = JSON.parse(fs.readFileSync('message.json', 'utf8'));

    const messageTs = data.ts;

    try {
        const res = await axios.post('https://slack.com/api/chat.delete', {
            channel,
            ts: messageTs
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        console.log("Deleted message:", res.data);
    } catch (err) {
        console.error("Error deleting message:", err.response?.data || err.message);
    }
}

module.exports = deleteMessage;
