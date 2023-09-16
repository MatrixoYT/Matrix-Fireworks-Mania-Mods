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
    } else if (userMessage.toLowerCase().includes("commerzbank tower")) {
        // Wenn die Frage nach der Höhe des Commerzbank Tower gestellt wird
        addMessageToChat("Sie:", userMessage);
        var answer = getCommerzbankTowerHeight();
        addMessageToChat("ChatAI:", answer);
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