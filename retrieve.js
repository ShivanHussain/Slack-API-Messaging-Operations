require('dotenv').config();
const axios = require('axios');

async function retrieveMessages() {
    const token = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.CHANNEL_ID;
    console.log("Using channel:", channel);

    try {
        
        // First: Try to join the channel
        const joinResponse = await axios.post('https://slack.com/api/conversations.join', 
            { channel },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!joinResponse.data.ok) {
            console.error("Failed to join channel:", joinResponse.data.error);
            return; // Exit early if bot couldn't join
        } else {
            console.log("Successfully joined channel or already a member.");
        }

        // Now: Fetch messages
        const res = await axios.get('https://slack.com/api/conversations.history', {
            params: { channel },
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (res.data.ok) {
            console.log("Messages retrieved:");
            res.data.messages.forEach(msg => {
                console.log(`- Text: ${msg.text}, Timestamp: ${msg.ts}`);
            });
        } else {
            console.error("Slack error:", res.data.error);
        }

    } catch (err) {
        console.error("Error retrieving messages:", err.response?.data || err.message);
    }
}

module.exports = retrieveMessages;
