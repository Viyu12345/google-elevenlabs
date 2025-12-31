
import React, { useState } from 'react';
import { AppView } from './types';
import Header from './components/Header';
import Home from './components/Home';
import DocumentAnalyzer from './components/DocumentAnalyzer';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');




  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header currentView={view} setView={setView} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <Home onStart={() => setView('analyze')} />
        ) : (
          <DocumentAnalyzer />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-1">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">


          </div>
          <p className="mt-8 text-center text-xs text-slate-400">
            Powered by Gemini AI for professional document simplification.
          </p>

      </footer>
    </div>
  );
};

export default App;
