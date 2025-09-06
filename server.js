const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const FILE = 'highscores.json';

function loadHighscores() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE, 'utf8'));
}

function saveHighscores(scores) {
  fs.writeFileSync(FILE, JSON.stringify(scores, null, 2));
}

app.get('/highscores', (req, res) => {
  const scores = loadHighscores();
  scores.sort((a, b) => b.score - a.score);
  res.json(scores);
});

app.post('/highscores', (req, res) => {
  const { name, score } = req.body;
  if (!name || typeof score !== 'number') return res.status(400).send('Ungültige Daten');
  const scores = loadHighscores();
  scores.push({ name, score });
  saveHighscores(scores);
  res.json({ success: true });
});

app.use(express.static('public'));

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));
