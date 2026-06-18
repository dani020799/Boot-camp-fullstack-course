let wisdom = [];


function loadWisdom() {
    const stored = localStorage.getItem('wisdom');
    if (stored) {
        wisdom = JSON.parse(stored);
        displayWisdom();
    }
}


function displayWisdom() {
    const wisdomList = document.getElementById('wisdomList');
    wisdomList.innerHTML = '';
    
    wisdom.forEach((item, index) => {
        const wisdomItem = document.createElement('div');
        wisdomItem.className = 'wisdom-item';
        wisdomItem.innerHTML = `
            <div class="wisdom-text">${item.text}</div>
            <button class="delete-btn" data-index="${index}">✕</button>
        `;
        wisdomList.appendChild(wisdomItem);
    });
}


function addWisdom() {
    const input = document.getElementById('wisdomInput');
    const text = input.value.trim();
    
    if (text === '') {
        alert('Please enter some wisdom!');
        return;
    }
    
    wisdom.push({ text: text });
    input.value = '';
    displayWisdom();
    
   
    if (wisdom.length % 2 === 0) {
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
        console.log('Saved to Local Storage');
    }
}


function deleteWisdom(index) {
    wisdom.splice(index, 1);
    localStorage.setItem('wisdom', JSON.stringify(wisdom));
    displayWisdom();
}


function clearAllWisdom() {
    if (confirm('Are you sure you want to clear all wisdom?')) {
        wisdom = [];
        localStorage.removeItem('wisdom');
        displayWisdom();
    }
}

document.getElementById('submitBtn').addEventListener('click', addWisdom);
document.getElementById('wisdomInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addWisdom();
});
document.getElementById('clearBtn').addEventListener('click', clearAllWisdom);


document.getElementById('wisdomList').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        deleteWisdom(index);
    }
});


loadWisdom();