// Chat code

var app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Chat!',
        chatMessages: ['Hello, Welcome to the chat!', 'Send a message to the group'],
        newMessage: ''
    },
    methods: {
        sendMessage: function(event){
            this.chatMessages.push(this.newMessage)
            this.newMessage = ''
        }
    }
})