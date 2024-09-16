console.log('Renderer process started');

const app = document.getElementById('app');
const button = document.createElement('button');
button.textContent = 'Cliquez-moi';
button.addEventListener('click', () => {
    alert('Bouton cliqué!');
});
app.appendChild(button);