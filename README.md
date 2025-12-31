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

> **Note:** I have not included the **node_modules** folder as it is to be installed locally through npm install as it contains a lot of modules.

2. Clone the repository:

git clone https://github.com/Viyu12345/google-elevenlabs.git

3. Install dependencies:

Install all the dependencies through **npm install**.

4. Run the Project:

The project will be run by **npm run dev**.

---

## What it does

DocuSimple AI allows users to upload or paste complex documents, automatically simplifies the content, and provides a conversational interface powered by ElevenLabs AI. Users can ask questions about the document, and the AI explains, clarifies, and guides them in plain language. The platform also highlights key terms, action items, and detailed breakdowns for better comprehension.

> **Note:** This is currently a **prototype**, meant to demonstrate the concept and functionality.

---

## How we built it

We built DocuSimple AI using:

* **React & TypeScript** for the frontend, providing a responsive and interactive UI.
* **Flask (Python)** for the backend, handling document analysis and generating structured responses.
* **ElevenLabs Conversational AI** for the chat interface, enabling natural, friendly, and professional explanations.

---

## Challenges we ran into

* Ensuring ElevenLabs AI provides accurate, context-aware explanations.
* Handling different languages, formatting styles, and special characters in documents.
* Designing a UI that could display structured results (summaries, key terms, action items) clearly and intuitively.
* Balancing AI verbosity: ensuring answers are detailed enough to be helpful but concise enough to remain readable.

---

## Accomplishments that we're proud of

* Successfully implemented a system where users can interact with their documents.
* Created a multi-document format parser supporting text, PDF, and image uploads.
* Developed a professional, user-friendly interface that dynamically renders results, key terms, and action items.
* Integrated a conversational AI that can explain complex content in a friendly, patient manner.

---

## What we learned

* Techniques for processing different file types on the web.
* Best practices for using conversational AI to assist with real-time user queries.
* The importance of designing interfaces that clearly communicate AI outputs to users.

---

## What's next for DocuSimple AI

* Expand document type support to include spreadsheets, presentations, and scanned handwritten notes.
* Add **user accounts** to save past analyses and chat histories.
* Improve AI’s ability to answer follow-up questions and provide references from the document.
* Optimize performance for large-scale document processing with caching and incremental parsing.
