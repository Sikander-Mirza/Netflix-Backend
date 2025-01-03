import { GoogleGenerativeAI } from '@google/generative-ai';


// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyAlhzfxQ7i2WIBV52Pl_-jCBgQ43n25qcE");  // Replace with your actual API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to accept POST requests for the prompt
app.post('/generate', async (req, res) => {
    const { prompt } = req.body;  // Extract the prompt from the request body

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        // Generate content using the Google Gemini model
        const result = await model.generateContent(prompt);

        // Send the generated response back to the client
        res.json({ response: result.response.text() });
    } catch (error) {
        console.error('Error during API call:', error);
        res.status(500).send('Error: ' + error.message);
    }
});