// Chat code
var socket = io()
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
            socket.emit('chat message',this.newMessage)
            this.newMessage = ''
        }
    }
})

socket.on('chat from server', function(msg){
    app.chatMessages.push(msg)
})