<!DOCTYPE html>
<html>
<head>
    <title>ChatAI</title>
    <meta charset="UTF-8">
    <link rel="icon" href="https://i.ibb.co/ChJ8RS7/Chat-AI-Official-Logo.png" type="image/png">
    <style>
        /* Ihr vorhandenes CSS-Design */
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #343541;
            color: #ffffff;
        }

        #chat-box {
            border: none;
            padding: 10px;
            height: 400px;
            width: 80%;
            overflow-y: auto;
            margin-bottom: 30px;
            background-color: #40414f;
            border-radius: 10px;
        }

        /* Neues CSS für Scrollleisten */
        #chat-box::-webkit-scrollbar {
            width: 12px;
        }

        #chat-box::-webkit-scrollbar-track {
            background: #40414f;
        }

        #chat-box::-webkit-scrollbar-thumb {
            background-color: #1dc47c;
            border-radius: 10px;
        }

        #chat-box::-webkit-scrollbar-thumb:hover {
            background-color: #15a366;
        }

        #input-container {
            display: flex;
            align-items: center;
            width: 80%;
        }

        #user-input {
            flex: 1;
            margin-right: 10px;
            padding: 10px;
            border: 2px solid transparent;
            background-color: #40414f;
            color: #ffffff;
            border-radius: 10px;
            transition: border-color 0.3s;
            outline: none;
        }

        #user-input:focus {
            border-color: #1dc47c;
        }

        #user-input.warning-yellow {
            border-color: yellow;
        }

        #user-input.warning-red {
            border-color: red;
        }

        #send-button {
            padding: 10px 20px;
            background-color: #1dc47c;
            color: #ffffff;
            border: none;
            cursor: pointer;
            border-radius: 10px;
        }

        #char-counter {
            color: #ffffff;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }

        #alpha-label {
            position: absolute;
            top: 19px;
            right: 20px;
            background-color: rgba(255, 0, 0, 0.7);
            color: white;
            padding: 5px;
            border-radius: 5px;
        }
        
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #40414f; /* Hintergrundfarbe der Kopfzeile */
            padding: 10px 20px; /* Innenabstand der Kopfzeile */
            color: #fff; /* Textfarbe */
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
        }

        #logo img {
            width: 50px; /* Breite des Logos anpassen */
            height: auto; /* Automatische Höhenanpassung, um das Seitenverhältnis beizubehalten */
        }

		#logo {
			height: 50px;
		}
        
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
        -webkit-text-fill-color: #ffffff !important;
        box-shadow: 0 0 0px 1000px #40414f inset !important;
        }
        
        h1 {
            position: absolute;
            right: 89%;
            color: white;
            font-size: 40px;
       	}
    </style>
</head>
<body>
    <header>
        <div id="logo">
                <img src="https://i.ibb.co/ChJ8RS7/Chat-AI-Official-Logo.png" style="pointer-events: none; user-select: none;">
        </div>
        <h1>ChatAI</h1>
    </header>
    
    <!-- Hier wird die Alpha-Kennzeichnung angezeigt -->
    <div id="alpha-label">
        Alpha-Version
    </div>

    <!-- Hier ist der Chat-Bereich -->
    <div id="chat-box">
        <!-- Hier werden die Chat-Nachrichten angezeigt -->
    </div>

    <!-- Hier ist der Eingabebereich für den Benutzer -->
    <div id="input-container">
        <input type="text" id="user-input" placeholder="Schreiben Sie eine Nachricht..." onkeydown="checkInput(event)" onfocus="setInputColors()" onblur="handleInputBlur()" maxlength="1000">
        <button id="send-button" onclick="sendMessage()">Senden</button>
    </div>

    <!-- Hier wird die Zeichenzählanzeige angezeigt -->
    <span id="char-counter">0/1000</span>

    <script>
        // JavaScript-Code für die Chat-Funktionalität
        var userInput = document.getElementById("user-input");
        var charCounter = document.getElementById("char-counter");

        userInput.addEventListener("input", function() {
            // Aktualisiert den Zeichenzähler, ändert die Textfarbe bei Überschreitung und gibt Warnungen aus.
            var userInputLength = userInput.value.length;
            charCounter.textContent = userInputLength + "/1000";
            setInputColors(); // Farben basierend auf der Zeichenlänge festlegen
        });

        function checkInput(event) {
            // Überprüft, ob die Eingabetaste gedrückt wurde, und verarbeitet dann die Benutzereingabe.
            if (event.key === 'Enter' && userInput.value.trim() !== '') {
                processUserInput(userInput.value);
            }
        }

        function sendMessage() {
            // Verarbeitet die Benutzereingabe, wenn die "Senden"-Schaltfläche geklickt wird.
            processUserInput(userInput.value);
        }

        function processUserInput(userMessage) {
            if (userMessage.trim() === '') {
                return;
            }

            // Überprüfe, ob die Nachricht eine Begrüßung ist
            var greetings = ["hallo", "hey", "hi", "moin", "servus"];
            var lowercaseMessage = userMessage.toLowerCase();

            if (greetings.includes(lowercaseMessage)) {
                // Begrüßungsnachrichten und zufällige Antworten
                addMessageToChat("Sie:", userMessage);
                var responses = ["Hallo! Wie kann ich Ihnen weiterhelfen?", "Hi! Was kann ich für Sie tun?", "Moin! Wie darf ich Ihnen helfen?"];
                var randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessageToChat("ChatAI:", randomResponse);
            } else if (isMathQuestion(userMessage)) {
                // Mathematische Fragen verarbeiten
                var answer = calculateMathAnswer(userMessage);
                addMessageToChat("Sie:", userMessage);

                // Zufällige Antwortvariationen
                var responses = [
                    "Die Antwort ist: " + answer,
                    "Das Ergebnis lautet: " + answer,
                    "Hier ist das Ergebnis: " + answer,
                    "Ich denke, die Antwort ist: " + answer
                ];
                var randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessageToChat("ChatAI:", randomResponse);
            } else if (shouldClearChat(userMessage)) {
                // Wenn der Benutzer eine Löschanfrage stellt, leeren Sie den Chat.
                var chatBox = document.getElementById("chat-box");
                chatBox.innerHTML = "";
            } else {
                // Normale Benutzernachrichten
                addMessageToChat("Sie:", userMessage);

                // Zufällige Antwort, wenn keine passende Antwort gefunden wurde
                var randomResponses = [
                    "Entschuldigung, ich kann auf diese Frage keine Antwort geben.",
                    "Sorry, ich kann diese Frage nicht beantworten.",
                    "Es tut mir leid, aber ich habe keine Antwort auf Ihre Frage."
                ];
                var randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
                addMessageToChat("ChatAI:", randomResponse);
            }

            // Zurücksetzen des Eingabefelds und des Zeichenzählers
            userInput.value = "";
            charCounter.textContent = "0/1000";

            // Scrollen zum Ende des Chats
            var chatBox = document.getElementById("chat-box");
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function isMathQuestion(message) {
            // Überprüfen, ob die Nachricht eine mathematische Frage enthält
            return /[+\-*/]/.test(message);
        }

        function calculateMathAnswer(question) {
            try {
                // Mathematische Frage auswerten
                var answer = eval(question);
                return answer;
            } catch (error) {
                return "Ungültige mathematische Frage";
            }
        }

        function addMessageToChat(sender, message) {
            // Eine Nachricht zum Chat hinzufügen
            var chatBox = document.getElementById("chat-box");
            chatBox.innerHTML += "<p><strong>" + sender + "</strong> " + message + "</p>";
        }

        function shouldClearChat(message) {
            // Überprüfen, ob die Nachricht Begriffe wie "Lösche den Chat" oder "lösche bitte den chat" enthält.
            var deletePhrases = ["lösche den chat", "chat löschen", "lösche chat", "chat bitte löschen", "lösche bitte den chat"];
            var lowercaseMessage = message.toLowerCase();

            for (var i = 0; i < deletePhrases.length; i++) {
                if (lowercaseMessage.includes(deletePhrases[i])) {
                    return true;
                }
            }

            return false;
        }

        function setInputColors() {
            // Setzt die Farben basierend auf der Zeichenlänge des Eingabefelds
            var userInputLength = userInput.value.length;

            if (userInputLength >= 800 && userInputLength < 950) {
                userInput.classList.remove("warning-red");
                userInput.classList.add("warning-yellow");
            } else if (userInputLength >= 950) {
                userInput.classList.remove("warning-yellow");
                userInput.classList.add("warning-red");
            } else {
                userInput.classList.remove("warning-yellow", "warning-red");
            }
        }

        function handleInputBlur() {
            userInput.classList.remove("warning-yellow", "warning-red");
        }
    </script>
</body>
</html>
