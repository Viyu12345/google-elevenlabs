
import React from 'react';
import { AppView } from '../types';



interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}
const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg">
              <i className="fas fa-file-medical text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              DocuSimple AI
            </span>
          </div>
          



          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView('analyze')}
              className={`text-sm font-medium transition-colors ${currentView === 'analyze' ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
            >
              Simplify Document
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
             <button onClick={() => setView(currentView === 'home' ? 'analyze' : 'home')} className="text-slate-600">
                <i className="fas fa-bars text-xl"></i>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
