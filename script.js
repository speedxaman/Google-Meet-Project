// for makin chat window appear and disappear

function func() {
   var hideChatBox = document.getElementById("aside-tab");
    hideChatBox.classList.toggle("visibility");
    var increaseWidthMain = document.getElementById("main-tab");
    increaseWidthMain.classList.toggle("main-width");
    return;
}
function showChat() {
    var hideChatBox = document.getElementById("aside-tab");
    hideChatBox.classList.toggle("visibility");
    var increaseWidthMain = document.getElementById("main-tab");
    increaseWidthMain.classList.toggle("main-width");
    

    return;
}
var a = document.getElementById('cross');
a.addEventListener('click', func);

var chat = document.getElementsByClassName('chat-by-click');
chat[0].addEventListener('click', showChat);


// For Mic icons to appear and disappear
var turnMicOn = document.getElementById("mic-mid");
turnMicOn.addEventListener("click", micOn);

function micOn() {
    document.getElementById("mic-off").classList.toggle("micoff1");
    document.getElementById("mic-on").classList.toggle("micon1");
    document.getElementById("mic-user").classList.toggle("micoff1");
    document.getElementById("mic-user2").classList.toggle("micon1");
    
    

}

// chatting box sending messages
function sendMessage() {
    // Get the message from the input field
    var message = document.getElementById('input-msg').value;
   
    if (message !== "" ) {
        // Add the message and name to the chat box
        document.getElementById('chat-msg').innerHTML += '<div style="margin-top:0px;">' + "You" + '</div>';
        
        document.getElementById('chat-msg').style.padding = "20px";
        document.getElementById('chat-msg').style.lineHeight = "20px";
        
        
        document.getElementById('chat-msg').innerHTML += '<div style="margin-bottom:12px;font-size: 11px; color:lightblack; ">' + message + '</div>';
    
        
        // Clear the input field
        document.getElementById('input-msg').value = '';
    }

}

var send = document.getElementById("sendmsg");
send.addEventListener("click", sendMessage);