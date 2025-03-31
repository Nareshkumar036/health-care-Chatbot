        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chat-messages');
            const userInput = document.getElementById('user-input');
            const sendButton = document.getElementById('send-button');
            
            function addMessage(text, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
                messageDiv.textContent = text;
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            function handleUserInput() {
                const text = userInput.value.trim();
                if (text) {
                    addMessage(text, true);
                    userInput.value = '';
                    setTimeout(() => {
                        let response;
                        const lowerText = text.toLowerCase();
                        
                        if (lowerText.includes('fever')) {
                            response = "If you have a fever, stay hydrated, rest well, and take paracetamol if necessary. If it persists, consult a doctor.";
                        } else if (lowerText.includes('headache')) {
                            response = "For headaches, drink water, rest, and avoid screens. If severe, take a pain reliever as advised by a doctor.";
                        } else if (lowerText.includes('cuts') || lowerText.includes('wound')) {
                            response = "For cuts, clean the wound with water, apply antiseptic, and cover with a bandage.";
                        } else if (lowerText.includes('burn')) {
                            response = "For burns, cool the area under running water for 10 minutes. Avoid applying ice or ointments immediately.";
                        } else if (lowerText.includes('choking')) {
                            response = "If someone is choking, encourage coughing. If they can't breathe, perform the Heimlich maneuver.";
                        } else {
                            response = "I'm here to help! Try asking about fever, headaches, cuts, burns, or choking.";
                        }
                        
                        addMessage(response, false);
                    }, 500);
                }
            }
            
            sendButton.addEventListener('click', handleUserInput);
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleUserInput();
                }
            });
        });
