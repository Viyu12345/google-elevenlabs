
import React, { useState, useRef } from 'react';
import { DocType, AnalysisResult } from '../types';
import { analyzeDocument } from '../services/geminiService';


const DocumentAnalyzer: React.FC = () => {
  const [docType, setDocType] = useState<DocType>(DocType.MEDICAL);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);


   const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const reader = new FileReader();



      if (file.type.startsWith('image/')) {
        reader.onload = async () => {
          const base64Data = (reader.result as string).split(',')[1];
          const res = await analyzeDocument(base64Data, docType, true);
          setResult(res);
          setLoading(false);
        };
        reader.readAsDataURL(file);
      } else {
        reader.onload = async () => {
          const text = reader.result as string;
          setInputText(text);
          const res = await analyzeDocument(text, docType);
          setResult(res);
          setLoading(false);
        };
        reader.readAsText(file);
      }
    } catch (err) {
      setError('Failed to analyze document. Please try again.');
      setLoading(false);
    }
  };

  const handleManualAnalyze = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await analyzeDocument(inputText, docType);
      setResult(res);
    } catch (err) {
      setError('Analysis failed. Check your input or connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Analyze Your Doc</h2>
            <p className="text-slate-600">Upload a file or paste text to simplify it.</p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold text-slate-700">Document Category</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.values(DocType).map((type) => (
                <button
                  key={type}
                  onClick={() => setDocType(type)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                    docType === type
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all group"
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".txt,.pdf,image/*"
                className="hidden"
              />
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-cloud-upload-alt text-2xl text-slate-500 group-hover:text-indigo-600"></i>
              </div>
              <p className="text-slate-700 font-semibold">Drop your file here</p>
              <p className="text-slate-500 text-sm mt-1">Supports TXT, Images, and PDFs</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-50 text-slate-500">Or paste text below</span>
              </div>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste the complex text here..."
              className="w-full h-48 p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none outline-none text-slate-700 transition-all shadow-sm"
            />

            <button
              onClick={handleManualAnalyze}
              disabled={loading || !inputText.trim()}
              className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100 transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fas fa-circle-notch animate-spin"></i> Analyzing...
                </span>
              ) : 'Analyze Text'}
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {loading && (
            <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-center animate-pulse">
              <i className="fas fa-brain text-4xl text-indigo-200 mb-4"></i>
              <h3 className="text-xl font-bold text-slate-400">Processing Your Information...</h3>
              <p className="text-slate-300 mt-2">Translating jargon into human language.</p>
            </div>
          )}



          {error && (
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex gap-4 text-red-700">
              <i className="fas fa-exclamation-circle text-xl mt-1"></i>
              <div>
                <p className="font-bold">Error Encountered</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}

          {!loading && !result && !error && (
            <div className="bg-slate-100/50 p-12 rounded-3xl border border-slate-200 border-dashed text-center flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                <i className="fas fa-magnifying-glass text-slate-300 text-2xl"></i>
              </div>
              <p className="text-slate-500 font-medium">Your simplified results will appear here.</p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl shadow-indigo-100">
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">The Gist</h3>
                <p className="text-xl font-medium leading-relaxed">{result.summary}</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Detailed Breakdown</h3>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  {result.simplifiedContent.split('\n').map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))}
                </div>
              </div>


              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Glossary of Terms</h3>
                <div className="space-y-4">
                  {result.keyTerms.map((item, i) => (
                    <div key={i} className="group">
                      <p className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.term}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>


              {result.actionItems.length > 0 && (
                <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                   <h3 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Next Steps</h3>
                   <ul className="space-y-3">
                     {result.actionItems.map((item, i) => (
                       <li key={i} className="flex gap-3 text-slate-700">
                         <i className="fas fa-check-circle text-amber-500 mt-1"></i>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalyzer;
