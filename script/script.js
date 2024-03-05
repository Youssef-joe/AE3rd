const yourName = document.getElementById('your-name');
const hisName = document.getElementById('his');
const yourMessage = document.getElementById('your-message');
const subButton = document.getElementById('btn');
const showBtn = document.getElementById('urMessage');
const displayContainer = document.getElementById('display');

let allData = [];

if (window.localStorage.getItem('data') !== null) {
    allData = JSON.parse(window.localStorage.getItem('data'));
}

subButton.addEventListener('click', function() {
    let inputData = {
        userName: hisName.value,
        userMessage: yourMessage.value
    }

    allData.push(inputData);
    window.localStorage.setItem('data', JSON.stringify(allData));
});


showBtn.addEventListener('click', function() {
    let dataMessage = '';
    let foundMessage = false;

    for (let i = 0; i < allData.length; i++) {
        if (yourName.value === allData[i].userName) {
            foundMessage = true;
            dataMessage += `
                <div class="message-display">
                    <p class="message">${allData[i].userMessage}</p>
                    
                </div>
            `;
        }
    }

    if (foundMessage) {
        displayContainer.innerHTML = dataMessage;
    } else {
        displayContainer.innerHTML = `محدش لسه كتبلك حاجه`;
    }
});

// <b>${allData[i].userName}</b>