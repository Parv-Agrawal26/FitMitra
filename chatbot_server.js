const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const genAI = new GoogleGenerativeAI("AIzaSyCvEjYhG3b_tAjwggZFy9CF-_qFGIIqZzA");

app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const completePrompt = `You are a fitness coach and i want you to give solution to my problem which is that '${prompt}', Give the solution related to it.`;

    try {
        const result = await model.generateContent(completePrompt);
        const text = await result.response.text();

        res.json({ text });
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
