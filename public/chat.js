// Chat code
var socket = io()

var app = new Vue({
    el: "#app",
    data: {
        currentUser: '',
        chatMessages: [{user:'server', message:'Hello, Welcome to the chat!'}, {user: 'server', message:'Bab'}],
        newMessage: ''
    },
    methods: {
        sendMessage: function(event){
            const msgObject = {user : this.currentUser, message: this.newMessage}
            this.chatMessages.push(msgObject)
            socket.emit('chat message', msgObject)
            this.newMessage = ''
            
        },
        scrolltoEnd: function(event){
            var container = document.getElementById("Chat")
            var scrollHeight = container.scrollHeight
            container.scrollTop = scrollHeight
        }
    } ,
    updated() {
        console.log('scrolling')
        this.scrolltoEnd()
    }
})


socket.on('chat from server', function(msg){
    app.chatMessages.push(msg)
})
