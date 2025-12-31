# DocuSimple AI

A prototype project where you can convert complex documents into an easy-to-understand format and ask questions to an ElevenLabs Conversational AI, which will explain your doubts.

---

## Getting Started

You would not need the FILEBUILDER.py file as it gives the model id which is used. As we have already created the model, therefore the file is not required.

1. Requirements
- Node.js and npm  
- Python(not required as model id is already there in code)
- Pip packages: ElevenLabs(not required too)  
- API keys(required for Gemini)

2. Clone the repository:

git clone https://github.com/Viyu12345/google-elevenlabs.git

---

## Inspiration

We wanted to make it easier for people to understand complex documents like medical reports, legal texts, and technical manuals. Many people struggle to extract useful information quickly, so we thought: why not create a tool that simplifies documents and answers questions interactively?

---

## What it does

- Upload documents (TXT, PDF, or images) or paste text directly.  
- Automatically analyzes the document and generates a simplified summary.  
- Provides key terms and actionable insights from the document.  
- Lets you ask questions to an AI assistant (powered by ElevenLabs) about the content.  
- Responds in a friendly and professional manner, explaining complex concepts clearly.  

> ⚠️ Note: This is just a **prototype**, not yet production-ready.

---

## How we built it

- **Frontend:** React (TypeScript, Vite) with TailwindCSS for UI.  
- **Backend:** Flask server that handles document processing and communication with the AI.  
- **AI:** ElevenLabs Conversational AI for answering user queries.  
- **Features:** File upload, text parsing, real-time conversation, and structured result display (summary, key terms, action items).

---

## Challenges we ran into

- Parsing and extracting text from different document types (images, PDFs, raw text).  
- Keeping the frontend responsive while processing large documents.  
- Ensuring the AI stays on-topic and provides contextually accurate explanations.  
- Coordinating React frontend and Flask backend for smooth real-time interaction.  
- Handling asynchronous operations like file reading, document analysis, and API calls.  
- Managing different languages, formatting styles, and special characters.  
- Designing a UI that clearly displays structured results.  
- Implementing robust error handling for failed uploads or API timeouts.  
- Balancing AI verbosity to be helpful but concise.  
- Limiting server load and processing time for multiple users interacting simultaneously.

---

## Accomplishments that we're proud of

- Successfully integrated ElevenLabs Conversational AI with React and Flask.  
- Built a flexible document analysis system that handles multiple file types.  
- Created a clean and intuitive UI for displaying summaries, key terms, and actions.  
- Implemented real-time feedback and error handling.  
- Developed a functional prototype that demonstrates the potential of AI-assisted document simplification.

---

## What we learned

- How to handle file uploads and text parsing in a React + Flask stack.  
- Techniques for asynchronous communication between frontend and backend.  
- Best practices for integrating third-party AI APIs securely using environment variables.  
- How to design an intuitive UI that simplifies complex data.  
- Importance of error handling, edge cases, and user experience in AI-powered apps.

---

## What's next for DocuSimple AI

- Expand support for more document formats and languages.  
- Improve AI accuracy and contextual understanding.  
- Add user authentication and personal document storage.  
- Make it production-ready with deployment on cloud platforms.  
- Enhance the UI/UX for better accessibility and responsiveness.  
- Explore advanced features like voice interaction and multi-turn conversations.
