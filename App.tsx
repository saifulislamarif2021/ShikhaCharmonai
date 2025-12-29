import React, { useState, useEffect } from 'react';
import { AppStep, VolunteerData } from './types';
import { LandingPage } from './components/LandingPage';
import { VolunteerForm } from './components/VolunteerForm';
import { SuccessView } from './components/SuccessView';
import { generateWelcomeMessage } from './services/geminiService';
import { saveVolunteerData } from './services/dbService'; // Import DB Service
import { VOLUNTEER_TEAMS, LOGO_URL } from './constants';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.LANDING);
  const [volunteerData, setVolunteerData] = useState<VolunteerData | null>(null);
  const [welcomeMsg, setWelcomeMsg] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startApplication = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(AppStep.FORM);
  };

  const handleFormSubmit = async (data: VolunteerData) => {
    setStep(AppStep.LOADING);
    
    // 1. Save Data to Database (or Log to Console)
    const saved = await saveVolunteerData(data);
    
    if (saved) {
        setVolunteerData(data);

        // 2. Generate Welcome Message with AI
        const selectedInterests = data.interests
        .map(id => VOLUNTEER_TEAMS.find(t => t.id === id)?.title || "")
        .filter(Boolean);

        const message = await generateWelcomeMessage(data.name, selectedInterests);
        
        setWelcomeMsg(message);
        setStep(AppStep.SUCCESS);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alert("দুঃখিত, তথ্য সংরক্ষণ করা যায়নি। দয়া করে আবার চেষ্টা করুন।");
        setStep(AppStep.FORM);
    }
  };

  const handleReset = () => {
    setStep(AppStep.LANDING);
    setVolunteerData(null);
    setWelcomeMsg("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 selection:bg-brand-500 selection:text-white">
      {/* Modern Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={() => setStep(AppStep.LANDING)}
            >
              {/* Logo Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center border-2 border-gold-500 shadow-lg group-hover:scale-105 transition-transform overflow-hidden p-1">
                   <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col ml-3">
                 <span className={`font-bold text-lg md:text-xl leading-tight transition-colors ${scrolled ? 'text-brand-900' : 'text-brand-900 md:text-white'}`}>
                   মুফতি ফয়জুল করীম
                 </span>
                 <span className={`text-xs font-bold tracking-widest uppercase ${scrolled ? 'text-gold-600' : 'text-gold-500 md:text-gold-300'}`}>
                   শায়েখে চরমোনাই
                 </span>
              </div>
            </div>
            
            {step !== AppStep.LANDING && (
               <div>
                  <button 
                    onClick={() => setStep(AppStep.LANDING)} 
                    className="glass px-4 py-2 rounded-full text-sm font-semibold text-brand-800 hover:bg-brand-50 transition-colors shadow-sm"
                  >
                    হোম পেজ
                  </button>
               </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-0">
        
        {step === AppStep.LANDING && (
          <LandingPage onStart={startApplication} />
        )}

        {step === AppStep.FORM && (
          <div className="px-4 py-24 md:py-32 bg-slate-50 min-h-screen">
             <VolunteerForm 
                onSubmit={handleFormSubmit} 
                onBack={() => setStep(AppStep.LANDING)}
                isSubmitting={false} 
             />
          </div>
        )}

        {step === AppStep.LOADING && (
          <div className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4 bg-slate-50">
            <div className="relative">
               <div className="w-32 h-32 border-4 border-brand-100 border-t-brand-600 rounded-full animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                   <div className="w-16 h-16 bg-gradient-to-tr from-brand-700 to-brand-900 rounded-full flex items-center justify-center shadow-xl">
                       <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                       </svg>
                   </div>
               </div>
            </div>
            <div className="text-center space-y-2">
               <h3 className="text-2xl font-bold text-brand-900 animate-pulse">তথ্য যাচাই করা হচ্ছে</h3>
               <p className="text-gray-500">দয়া করে কিছুক্ষণ অপেক্ষা করুন, আমরা আপনার কার্ড তৈরি করছি...</p>
            </div>
          </div>
        )}

        {step === AppStep.SUCCESS && volunteerData && (
          <div className="min-h-screen flex items-center justify-center bg-slate-50 py-24 px-4">
            <SuccessView 
              data={volunteerData} 
              welcomeMessage={welcomeMsg} 
              onReset={handleReset} 
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-brand-950 text-white pt-16 pb-8 border-t-8 border-gold-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1 */}
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                 <div className="w-10 h-10 bg-white rounded-full p-1">
                   <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                 </div>
                 <div>
                    <h3 className="font-bold text-xl leading-none">ইসলামী আন্দোলন</h3>
                    <span className="text-xs text-brand-300 tracking-wider">বাংলাদেশ</span>
                 </div>
              </div>
              <p className="text-brand-200 text-sm leading-relaxed">
                ন্যায়বিচার প্রতিষ্ঠা ও মানবতার কল্যাণে নিবেদিত একটি রাজনৈতিক দল। 
                দেশ ও জাতির সেবায় আমাদের সাথে যোগ দিন।
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-center space-y-4">
              <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm">যোগাযোগ</h4>
              <p className="text-brand-100">কেন্দ্রীয় কার্যালয়: পুরানা পল্টন, ঢাকা-১০০০</p>
              <div className="flex justify-center space-x-4 pt-2">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="w-10 h-10 rounded-full bg-brand-900 hover:bg-gold-500 hover:text-brand-900 border border-brand-800 flex items-center justify-center transition-all cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                   </div>
                 ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="text-center md:text-right space-y-4">
              <h4 className="text-gold-400 font-bold uppercase tracking-widest text-sm">জরুরি প্রয়োজনে</h4>
              <p className="text-2xl font-bold text-white tracking-widest">১৬৫৫৫</p>
              <p className="text-xs text-brand-400">টোল ফ্রি হটলাইন</p>
            </div>

          </div>

          <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
            <p>&copy; ২০২৫ নির্বাচনী সেল, ইসলামী আন্দোলন বাংলাদেশ।</p>
            <p className="mt-2 md:mt-0 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              স্বেচ্ছাসেবক ম্যানেজমেন্ট সিস্টেম v1.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
