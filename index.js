const sendMessage = require('./send.js');
const scheduleMessage = require('./schedule.js');
const retrieveMessages = require('./retrieve.js');
const editMessage = require('./edit.js');
const deleteMessage = require('./delete.js');



//Run code in Order
(async () => {
    await sendMessage();
    await scheduleMessage();
    await retrieveMessages();
    await editMessage();
    await deleteMessage();
})();