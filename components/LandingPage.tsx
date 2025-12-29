import React from 'react';
import { BENEFITS, VOLUNTEER_TEAMS, FAQS, LEADER_IMAGE_URL, MARKA_URL } from '../constants';
import { 
  ArrowRightIcon, 
  CheckBadgeIcon, 
  FingerPrintIcon, 
  UserGroupIcon, 
  MegaphoneIcon, 
  StarIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  PaintBrushIcon,
  ChartBarIcon,
  MusicalNoteIcon,
  HeartIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {

  const getTeamIcon = (id: string) => {
    switch (id) {
      case 'campaign_engagement': return { icon: MegaphoneIcon, color: 'bg-blue-500', shadow: 'shadow-blue-200' };
      case 'events': return { icon: CalendarDaysIcon, color: 'bg-orange-500', shadow: 'shadow-orange-200' };
      case 'election_duty': return { icon: ClipboardDocumentCheckIcon, color: 'bg-teal-500', shadow: 'shadow-teal-200' };
      case 'media_content': return { icon: PaintBrushIcon, color: 'bg-green-500', shadow: 'shadow-green-200' };
      case 'research': return { icon: ChartBarIcon, color: 'bg-purple-500', shadow: 'shadow-purple-200' };
      case 'culture': return { icon: MusicalNoteIcon, color: 'bg-indigo-500', shadow: 'shadow-indigo-200' };
      case 'social_work': return { icon: HeartIcon, color: 'bg-pink-500', shadow: 'shadow-pink-200' };
      case 'local_leadership': return { icon: MapPinIcon, color: 'bg-lime-500', shadow: 'shadow-lime-200' };
      case 'others': return { icon: UserGroupIcon, color: 'bg-amber-500', shadow: 'shadow-amber-200' };
      default: return { icon: StarIcon, color: 'bg-brand-500', shadow: 'shadow-brand-200' };
    }
  };

  const getBenefitIcon = (index: number) => {
    switch(index) {
        case 0: return { icon: HeartIcon, color: 'bg-emerald-500', shadow: 'shadow-emerald-200' }; // Spiritual/Akhira
        case 1: return { icon: UserGroupIcon, color: 'bg-blue-500', shadow: 'shadow-blue-200' }; // Society/Patriotism
        case 2: return { icon: ChartBarIcon, color: 'bg-violet-500', shadow: 'shadow-violet-200' }; // Growth/Leadership
        default: return { icon: MegaphoneIcon, color: 'bg-rose-500', shadow: 'shadow-rose-200' }; // Voice/Justice
    }
  }

  return (
    <div className="w-full animate-fade-in font-sans text-gray-800">
      
      {/* CLEAN & CREATIVE HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-20 lg:pt-0">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full h-full">
          
          {/* Hero Content (Left) */}
          <div className="space-y-8 text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-flex items-center space-x-2 bg-white border border-brand-100 px-5 py-2 rounded-full shadow-sm animate-fade-in-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-brand-800 text-xs font-bold tracking-widest uppercase">নির্বাচন ২০২৫</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-brand-950 tracking-tight">
              ইনসাফ প্রতিষ্ঠায় <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-500">পরিবর্তনের সঙ্গী</span> <br/>
              হিসেবে যোগ দিন
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
               বরিশাল-৫ ও ৬ আসনে <span className="text-brand-700 font-bold">মুফতি সৈয়দ মুহাম্মাদ ফয়জুল করীম</span>-এর হাতকে শক্তিশালী করতে আজই আমাদের স্বেচ্ছাসেবক টিমে যুক্ত হোন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <button 
                onClick={onStart}
                className="px-10 py-5 bg-brand-900 text-white font-bold rounded-2xl shadow-xl shadow-brand-900/20 hover:bg-brand-800 transition-all hover:-translate-y-1 flex items-center gap-3 text-lg group"
              >
                <span>স্বেচ্ছাসেবক হোন</span>
                <div className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
                   <ArrowRightIcon className="w-4 h-4" />
                </div>
              </button>
              
              <div className="flex items-center space-x-3 text-brand-900 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10">
                   <img src={MARKA_URL} alt="Haat Pakha" className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold leading-none">হাত পাখা</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">শান্তি ও উন্নয়নের প্রতীক</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image (Right) */}
          <div className="relative flex justify-center lg:justify-end pb-10 lg:pb-0">
             {/* Creative composition */}
             <div className="relative w-[320px] md:w-[450px] aspect-[4/5] z-10">
                <div className="absolute inset-0 bg-brand-900 rounded-[3rem] rotate-3 opacity-10 scale-95 translate-y-4"></div>
                <div className="absolute inset-0 bg-gold-500 rounded-[3rem] -rotate-2 opacity-20 scale-95 translate-y-2"></div>
                
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                   <img 
                      src={LEADER_IMAGE_URL} 
                      alt="Mufti Fayzul Karim" 
                      className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8 text-white">
                      <div className="bg-gold-500 text-brand-950 text-xs font-bold px-3 py-1 inline-block rounded-lg mb-2">প্রার্থী</div>
                      <h3 className="text-2xl font-bold">মুফতি ফয়জুল করীম</h3>
                   </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full text-green-600">
                         <CheckBadgeIcon className="w-6 h-6" />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase">মিশন</p>
                         <p className="text-sm font-bold text-brand-900">সুশাসন প্রতিষ্ঠা</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* CREATIVE MANIFESTO SECTION */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="text-brand-600 font-bold tracking-widest uppercase text-xs mb-3 block">আমাদের আহ্বান</span>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-950 mb-6">কেন যোগ দেবেন?</h2>
              <p className="text-gray-500 text-lg">দেশ ও জাতির স্বার্থে, বরিশালবাসীর উন্নয়নে আপনার অংশগ্রহণ গুরুত্বপূর্ণ</p>
              <div className="h-1.5 w-20 bg-gold-500 mx-auto rounded-full mt-8"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {BENEFITS.map((item, idx) => {
                const { icon: Icon, color, shadow } = getBenefitIcon(idx);
                return (
                  <div key={idx} className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100">
                     {/* Number Watermark */}
                     <div className="absolute top-4 right-6 text-6xl font-bold text-gray-100 -z-0 group-hover:text-brand-50 transition-colors">0{idx + 1}</div>
                     
                     <div className="relative z-10">
                       <div className={`w-16 h-16 rounded-2xl ${color} ${shadow} flex items-center justify-center mb-8 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8" />
                       </div>
                       <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
                       <p className="text-gray-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                     </div>
                  </div>
                )
              })}
           </div>
        </div>
      </section>

      {/* VOLUNTEER WING GRID */}
      <section className="py-32 bg-blue-50/50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">স্বেচ্ছাসেবক টিমসমূহ</h2>
              <p className="text-gray-600 text-lg">
                আপনার আগ্রহ ও দক্ষতা অনুযায়ী যেকোনো টিমে যোগ দিতে পারবেন
              </p>
              <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-8 rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {VOLUNTEER_TEAMS.map((team, idx) => {
               const { icon: Icon, color, shadow } = getTeamIcon(team.id);
               return (
                 <div 
                   key={team.id} 
                   onClick={onStart}
                   className="group relative bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 cursor-pointer hover:-translate-y-2"
                 >
                    {/* Icon Container - Top Right */}
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[3rem] rounded-tr-[1.5rem] ${color} ${shadow} flex items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rounded-bl-[4rem]`}>
                       <Icon className="w-9 h-9" />
                    </div>
                    
                    <div className="mt-6 pr-12">
                       <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-brand-700 transition-colors">
                         {team.title}
                       </h3>
                       <p className="text-gray-500 leading-relaxed mb-6 font-medium">
                         {team.desc}
                       </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-sm font-bold text-brand-600 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       <span>বিস্তারিত দেখুন</span>
                       <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </div>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* CLEAN FAQ SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-32">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-900 mb-2">সচরাচর জিজ্ঞাসা</h2>
            <p className="text-gray-500">আপনার মনে হতে পারে এমন কিছু প্রশ্নের উত্তর</p>
         </div>
         <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
               <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow border border-gray-50">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold">
                       ?
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-brand-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden bg-brand-950">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-900 via-brand-950 to-black opacity-90"></div>
         
         <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-20"></div>
         <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px] opacity-10"></div>

         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              আগামীর বাংলাদেশ গড়তে <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gold-400">আপনার ভূমিকা রাখুন</span>
            </h2>
            <p className="text-brand-100 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
               আমরা বিশ্বাস করি, আপনার মেধা ও শ্রম ইনসাফ প্রতিষ্ঠার আন্দোলনকে বেগবান করবে।
            </p>
            <button 
              onClick={onStart}
              className="px-14 py-6 bg-white text-brand-950 font-bold rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] transition-all text-xl hover:scale-105 flex items-center justify-center mx-auto gap-3"
            >
              <span>এখনই নিবন্ধন করুন</span>
              <ArrowRightIcon className="w-6 h-6" />
            </button>
         </div>
      </section>

    </div>
  );
};