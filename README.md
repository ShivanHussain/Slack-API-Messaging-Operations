# Slack-API-Messaging-Operations

### 👨‍💻 Author: Shivan Hussain  
### 🗓️ Date: June 2025  

---

## 🔧 Tools & Technologies Used

- **Node.js**
- **Slack Web API**
- **Axios**
- **Dotenv**
- **Slack Developer Sandbox**

---

## 📌 Assignment Overview

This project demonstrates integration with Slack's Web API to perform messaging operations within a sandbox environment. The following key features were implemented:

---

## ✅ Features Implemented

| Feature                 | Description                                                                   | Status   |
|------------------------|-----------------------------------------------------------------------------------|----------|
| Authentication         | Used Slack **Bot Token** authentication via headers                             | ✅ Done  |
| Join Channel           | Used `conversations.join` to ensure bot is a member of the target channel       | ✅ Done  |
| Send a Message         | Used `chat.postMessage` to send plain text to the channel                       | ✅ Done  |
| Schedule a Message     | Used `chat.scheduleMessage` to deliver a message at a scheduled future time     | ✅ Done  |
| Retrieve Messages      | Used `conversations.history` to fetch messages from the channel                 | ✅ Done  |
| Edit a Message         | Used `chat.update` to modify existing messages via timestamp (`ts`)             | ✅ Done  |
| Delete a Message       | Used `chat.delete` to remove a message using its timestamp (`ts`)               | ✅ Done  |
| Developer Sandbox Use  | All testing performed in Slack Developer Sandbox for safe experimentation       | ✅ Done  |

---

## 🔐 OAuth Scopes Used

The following bot token scopes were configured for the Slack app:

- `channels:read`
- `channels:join`
- `channels:history`
- `chat:write`
- `chat:write.customize`
- `chat:write.public`
- `groups:read`
- `groups:history`

---

## 📂 Project Structure


slack-messaging-assignment/
│
├── .env                                             # Stores token and channel ID
├── sendMessage.js                                   # Sends and schedules messages
├── retrieveMessages.js                              # Fetches message history
├── editMessage.js                                   # Edits a specific message
├── deleteMessage.js                                 # Deletes a specific message
├── package.json                                     # Dependencies
└── README.md                                        # This documentation



## ⚙️ Setup Instructions

1. **Clone the repo:**

   ```bash
   git clone <copy-repo>
   cd slack-messaging-assignment

   npm install
2. **.env**
 
   SLACK_BOT_TOKEN=xoxb-your-slack-bot-token
   CHANNEL_ID=C090QM0MFM4


4. **Run index.js**

    npm start

5. **Sample Log**

   Using channel: C090QM0MFM4
   Successfully joined channel or already a member.
   Messages retrieved:
      - Text: Hello from my Node.js app!
      - Text: This is a scheduled message.
      - Text: <@U091A3G8VNV> has joined the channel.
   Message successfully updated.
   Message successfully deleted.




