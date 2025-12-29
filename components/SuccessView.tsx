import React from 'react';
import { VolunteerData } from '../types';
import { VOLUNTEER_TEAMS, MARKA_URL } from '../constants';
import { ArrowPathIcon, CheckCircleIcon, ShareIcon } from '@heroicons/react/24/solid';

interface SuccessViewProps {
  data: VolunteerData & { nid?: string };
  welcomeMessage: string;
  onReset: () => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ data, welcomeMessage, onReset }) => {
  
  return (
    <div className="w-full max-w-lg mx-auto animate-fade-in p-4">
      
      <div className="text-center mb-8">
         <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-bounce-gentle">
            <CheckCircleIcon className="w-12 h-12 text-green-600" />
         </div>
         <h2 className="text-3xl font-bold text-gray-900 mb-2">নিবন্ধন সফল হয়েছে!</h2>
         <p className="text-gray-500">আপনার ডিজিটাল স্বেচ্ছাসেবক কার্ডটি প্রস্তুত।</p>
      </div>

      {/* Realistic ID Card */}
      <div className="group relative w-full aspect-[3/4.5] md:aspect-[3/4.2] max-w-[360px] mx-auto perspective-1000">
         
         <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
             
             {/* Holographic Sheen Overlay */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_200%] animate-[shimmer_2s_infinite]"></div>

             {/* Top Lanyard Cutout */}
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-200 rounded-full z-20 shadow-inner border border-gray-300"></div>

             {/* Header */}
             <div className="h-36 bg-gradient-to-b from-brand-900 to-brand-800 relative p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500 rounded-full blur-[60px] opacity-30"></div>
                
                <div className="relative z-10 mt-4">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-gold-500 shadow-lg mx-auto mb-2 overflow-hidden p-1">
                      <img src={MARKA_URL} alt="Marka" className="w-full h-full object-contain" />
                   </div>
                   <h3 className="text-white font-bold text-xl leading-none tracking-wide text-shadow">নির্বাচনী স্বেচ্ছাসেবক</h3>
                   <div className="mt-1 px-3 py-0.5 bg-gold-500 rounded-full inline-block">
                     <p className="text-brand-900 text-[10px] font-bold tracking-[0.2em] uppercase">নির্বাচন ২০২৫</p>
                   </div>
                </div>
             </div>

             {/* Photo Circle Half Overlapping */}
             <div className="relative -mt-10 flex justify-center z-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full border-[6px] border-white shadow-lg flex items-center justify-center text-3xl font-bold text-brand-300">
                   {data.name.charAt(0)}
                </div>
             </div>

             {/* Body Content */}
             <div className="px-6 pt-2 pb-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{data.name}</h2>
                <p className="text-sm font-semibold text-brand-600 mb-4 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  {data.address}
                </p>

                {/* AI Message Bubble */}
                <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 mb-5 text-sm italic text-brand-800 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-3 h-3 bg-brand-50 border-t border-l border-brand-100 transform rotate-45"></div>
                   "{welcomeMessage}"
                </div>

                {/* Details Grid */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-left grid grid-cols-2 gap-y-3 gap-x-2 shadow-inner">
                   <div>
                      <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider">মোবাইল</span>
                      <span className="font-bold text-gray-800 text-sm font-mono">{data.mobile}</span>
                   </div>
                   <div>
                      <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider">ভলান্টিয়ার আইডি</span>
                      <span className="font-bold text-brand-700 text-sm font-mono">V-{Math.floor(100000 + Math.random() * 900000)}</span>
                   </div>
                   <div className="col-span-2 pt-1 border-t border-gray-200 mt-1">
                      <span className="block text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">দায়িত্ব</span>
                      <div className="flex flex-wrap gap-1">
                         {data.interests.map(id => (
                            <span key={id} className="bg-brand-900 text-white text-[10px] px-2 py-0.5 rounded-md font-medium shadow-sm">
                               {VOLUNTEER_TEAMS.find(t => t.id === id)?.title}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex justify-between items-end opacity-70">
                   <div className="text-left">
                     <p className="text-[9px] text-gray-400">ISSUE DATE</p>
                     <p className="text-[10px] font-bold text-gray-600">{new Date().toLocaleDateString('bn-BD')}</p>
                   </div>
                   <div className="text-right">
                     <div className="w-20 h-6 bg-contain bg-no-repeat bg-right opacity-60 grayscale" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_sample.svg/1200px-Signature_sample.svg.png')"}}></div>
                     <p className="text-[8px] text-gray-400 uppercase tracking-widest mt-1">Authorized Signature</p>
                   </div>
                </div>
             </div>

             {/* Bottom Decoration */}
             <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700"></div>
         </div>
      </div>

      <div className="mt-10 flex flex-col space-y-3">
         <button className="w-full bg-brand-900 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-brand-800 transition-colors flex items-center justify-center">
            <ShareIcon className="w-5 h-5 mr-2" /> কার্ডটি শেয়ার করুন
         </button>
         <button 
           onClick={onReset}
           className="w-full bg-white text-gray-600 font-semibold py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
         >
           <ArrowPathIcon className="w-5 h-5 mr-2" />
           নতুন আবেদন করুন
         </button>
      </div>

    </div>
  );
};