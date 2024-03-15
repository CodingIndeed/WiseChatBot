const socket = io();

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById('exampleFormControlInput2');
    const chatContainer = document.getElementById('chatContainer');

    function addMessage(message, isUserMessage = false) {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'mb-4', 'pt-1');
    
        // Check if the message is from the user or the API to determine the alignment and avatar position
        if (isUserMessage) {
            // User messages: right-aligned with the avatar to the right of the chat box
            div.classList.add('justify-content-end');
            const messageContent = `
                <div>
                    <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">${message}</p>
                    <p class="small me-3 mb-3 rounded-3 text-muted">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}</p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar" style="width: 45px; height: 100%; margin-left: 8px;">`;
            div.innerHTML = messageContent;
        } else {
            // API responses: left-aligned with the avatar to the left of the chat box
            div.classList.add('justify-content-start');
            const messageContent = `
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar" style="width: 45px; height: 100%; margin-right: 8px;">
                <div>
                    <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-secondary">${message}</p>
                    <p class="small me-3 mb-3 rounded-3 text-muted">${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}</p>
                </div>`;
            div.innerHTML = messageContent;
        }
    
        chatContainer.appendChild(div);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    }
    

    inputField.addEventListener('keydown', function(event) {
        console.log('Keydown event detected:', event.key); // Add this line to debug
        if (event.key === 'Enter' && inputField.value.trim() !== '') {
            event.preventDefault();
            const message = inputField.value;
            addMessage(message, true);
            socket.emit('chatMessage', message);
            inputField.value = '';
        }
    });

    // Listen for messages from the server
    socket.on('chatMessage', function(message) {
        addMessage(message); // Display received message in the chat (API response or echoed user message)
    });
});
