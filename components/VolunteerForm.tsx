import React, { useState } from 'react';
import { VolunteerData } from '../types';
import { WEEKLY_HOURS, PREFERRED_TIMES, FORM_TEAMS } from '../constants';
import { ArrowLeftIcon, IdentificationIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface VolunteerFormProps {
  onSubmit: (data: VolunteerData) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export const VolunteerForm: React.FC<VolunteerFormProps> = ({ onSubmit, onBack, isSubmitting }) => {
  const [formData, setFormData] = useState<VolunteerData & { nid?: string }>({
    name: '',
    mobile: '',
    whatsapp: '',
    isResident: '',
    address: '',
    age: '',
    nid: '',
    interests: [],
    weeklyHours: '',
    preferredTime: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (teamId: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(teamId)
        ? prev.interests.filter(id => id !== teamId)
        : [...prev.interests, teamId];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.interests.length === 0) {
      alert("অনুগ্রহ করে অন্তত একটি নির্বাচনী দায়িত্ব নির্বাচন করুন।");
      return;
    }
    onSubmit(formData);
  };

  // Modern Input Component
  const InputField = ({ label, name, type = "text", placeholder, required = false, value, onChange }: any) => (
    <div className="group">
      <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-brand-600 transition-colors">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all duration-300 font-medium placeholder:text-gray-400"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in-up">
      
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        
        {/* Left Decorative Panel */}
        <div className="hidden md:flex md:w-[35%] bg-brand-900 text-white p-12 flex-col justify-between relative overflow-hidden">
           {/* Background Overlay */}
           <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-green-800 to-transparent opacity-40 blur-3xl rounded-full"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500 rounded-full blur-[120px] opacity-20"></div>

           <div className="relative z-10">
              <button 
                onClick={onBack} 
                className="group flex items-center text-sm font-semibold text-brand-200 hover:text-white transition-colors mb-16"
              >
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-gold-500 group-hover:text-brand-900 transition-all border border-white/10">
                   <ArrowLeftIcon className="w-4 h-4" />
                 </div>
                 ফিরে যান
              </button>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                স্বেচ্ছাসেবক <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-300">নিবন্ধন ফরম</span>
              </h2>
              <p className="text-brand-100 text-lg leading-relaxed font-light opacity-90 border-l-4 border-gold-500 pl-6">
                 দেশ ও জাতির খেদমতে নিজেকে নিয়োজিত করার এটিই সেরা সময়।
                 আপনার প্রতিটি তথ্য সুরক্ষিত থাকবে।
              </p>
           </div>
           
           <div className="relative z-10 mt-auto bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="flex items-center space-x-4">
                 <div className="p-3 bg-gold-500 rounded-xl text-brand-900 shadow-lg shadow-gold-500/20">
                    <IdentificationIcon className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="font-bold text-white text-sm uppercase tracking-wider">গোপনীয়তা নিশ্চিত</p>
                   <p className="text-xs text-brand-200 mt-1">আপনার তথ্য শুধুমাত্র নির্বাচনী কাজে ব্যবহৃত হবে</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Form Area */}
        <div className="w-full md:w-[65%] p-8 md:p-14 bg-white overflow-y-auto max-h-screen md:max-h-full">
           <div className="md:hidden mb-8">
              <button onClick={onBack} className="text-gray-500 flex items-center text-sm font-semibold mb-4">
                 <ArrowLeftIcon className="w-4 h-4 mr-2" /> ফিরে যান
              </button>
              <h2 className="text-3xl font-bold text-gray-900">নিবন্ধন ফরম</h2>
           </div>

           <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Section 1 */}
              <div>
                 <h3 className="flex items-center text-sm font-bold text-brand-700 uppercase tracking-widest mb-8 border-b border-gray-100 pb-3">
                   <span className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 text-xs font-bold">১</span>
                   ব্যক্তিগত পরিচিতি
                 </h3>
                 
                 <div className="space-y-6">
                    <InputField 
                      label="আপনার নাম" 
                      name="name" 
                      placeholder="ভোটার আইডি কার্ড অনুযায়ী নাম" 
                      required 
                      value={formData.name} 
                      onChange={handleInputChange} 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField 
                          label="মোবাইল নম্বর" 
                          name="mobile" 
                          type="tel" 
                          required 
                          value={formData.mobile} 
                          onChange={handleInputChange} 
                        />
                        <InputField 
                          label="বয়স" 
                          name="age" 
                          type="number" 
                          required 
                          value={formData.age} 
                          onChange={handleInputChange} 
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField 
                          label="NID নম্বর (ঐচ্ছিক)" 
                          name="nid" 
                          value={formData.nid} 
                          onChange={handleInputChange} 
                        />
                       <InputField 
                        label="বর্তমান ঠিকানা" 
                        name="address" 
                        placeholder="ভোটকেন্দ্রের এলাকা" 
                        required 
                        value={formData.address} 
                        onChange={handleInputChange} 
                      />
                    </div>
                 </div>
              </div>

              {/* Section 2 */}
              <div>
                 <h3 className="flex items-center text-sm font-bold text-brand-700 uppercase tracking-widest mb-8 border-b border-gray-100 pb-3">
                   <span className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mr-3 text-xs font-bold">২</span>
                   দায়িত্ব ও প্রাপ্যতা
                 </h3>
                 
                 <div className="mb-10">
                    <label className="block text-sm font-bold text-gray-900 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                      কোন দায়িত্ব পালনে আগ্রহী? (একাধিক হতে পারে) <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                       {FORM_TEAMS.map(team => {
                          const isSelected = formData.interests.includes(team.id);
                          return (
                            <label 
                              key={team.id} 
                              className={`group flex items-center p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${isSelected ? 'border-brand-500 bg-brand-50/50 shadow-md ring-1 ring-brand-500' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'}`}
                            >
                               <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-4 transition-all flex-shrink-0 ${isSelected ? 'bg-brand-500 border-brand-500 scale-110' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}>
                                  {isSelected && <CheckCircleIcon className="w-6 h-6 text-white" />}
                               </div>
                               <input 
                                 type="checkbox" 
                                 className="hidden"
                                 checked={isSelected}
                                 onChange={() => handleInterestToggle(team.id)}
                               />
                               <span className={`text-sm font-semibold leading-tight ${isSelected ? 'text-brand-900' : 'text-gray-600'}`}>{team.title}</span>
                            </label>
                          );
                       })}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2">কাজের সময় <span className="text-red-500">*</span></label>
                       <div className="relative">
                         <select 
                            name="weeklyHours" 
                            value={formData.weeklyHours} 
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none appearance-none transition-all cursor-pointer font-medium text-gray-700"
                            required
                         >
                            <option value="">নির্বাচন করুন</option>
                            {WEEKLY_HOURS.map(h => <option key={h} value={h}>{h}</option>)}
                         </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                         </div>
                       </div>
                    </div>
                    <div className="group">
                       <label className="block text-sm font-semibold text-gray-700 mb-2">পছন্দের শিফট <span className="text-red-500">*</span></label>
                       <div className="relative">
                        <select 
                            name="preferredTime" 
                            value={formData.preferredTime} 
                            onChange={handleInputChange}
                            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 outline-none appearance-none transition-all cursor-pointer font-medium text-gray-700"
                            required
                        >
                            <option value="">নির্বাচন করুন</option>
                            {PREFERRED_TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                         <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-900 hover:bg-brand-800 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-98 flex items-center justify-center space-x-3 text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      যাচাই করা হচ্ছে...
                    </span>
                  ) : (
                    <>
                      <span>আবেদন জমা দিন</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );
};