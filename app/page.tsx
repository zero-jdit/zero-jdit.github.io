'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Mail, Github, 
  Monitor, BrainCircuit,
  Network, Package, Briefcase, Activity, Users, Calendar, Printer
} from 'lucide-react';

const SectionHeader = ({ title }: { title: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">{title}</h2>
    <div className="w-10 h-1 bg-indigo-500 mt-4 rounded-full" />
  </motion.div>
);

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const navLinks = ['About', 'Expertise', 'Projects', 'Contact'];

const SidebarContent = ({ onLinkClick }: { onLinkClick?: () => void }) => (
  <div className="flex flex-col h-full justify-between">
     <div>
       <div className="mb-12">
          <h1 className="text-3xl font-black text-slate-100 tracking-tight mb-6">JDIT.</h1>
          <p className="text-lg font-bold text-slate-200 leading-snug mb-4">
            어제의 견고함과 <br className="hidden lg:block"/> 내일의 지능을 잇습니다.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            기술의 본질을 꿰뚫고<br />최적의 솔루션을 설계하는 개발자
          </p>
       </div>
       <nav className="flex flex-col gap-5">
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={onLinkClick}
              className="text-slate-400 font-bold hover:text-indigo-400 transition-colors w-fit text-sm uppercase tracking-wider"
            >
              {item}
            </a>
          ))}
       </nav>
     </div>
     <div className="mt-12 flex items-center gap-4">
       <a href="mailto:zerosjd@gmail.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
          <Mail className="w-5 h-5" />
       </a>
       <a href="https://github.com/solver-lab" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
       </a>
     </div>
  </div>
);

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-hidden">
      
      {/* Mobile Header */}
      <header className="md:hidden shrink-0 w-full h-16 bg-slate-950 border-b border-slate-800 z-50 flex items-center justify-between px-6">
        <div className="font-black text-xl text-slate-100 tracking-tight">JDIT.</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 text-slate-400 transition-colors">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 64px)' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-slate-950 px-6 py-8 overflow-hidden border-b border-slate-800"
          >
            <SidebarContent onLinkClick={() => setIsMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar (Dark) */}
      <aside className="hidden md:flex w-72 lg:w-80 shrink-0 bg-slate-950 border-r border-slate-800 p-8 lg:p-12 overflow-y-auto z-10 relative shadow-[1px_0_10px_rgba(0,0,0,0.5)]">
        <SidebarContent />
      </aside>

      {/* Main Content Area (Dark) */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth relative">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col gap-24">
          
          {/* About Section */}
          <section id="about" className="scroll-mt-24">
            <SectionHeader title="About" />
            <FadeUp>
              <p className="text-slate-300 leading-relaxed text-lg lg:text-xl font-light">
                20년 이상 실무 경험을 보유한 숙련된 전문가로서 엔터프라이즈 시스템의 안정성을 
                기반으로, <span className="text-white font-medium">최신 AI 기술을 결합하여 비즈니스 가치를 극대화</span>합니다. 
                기술적 깊이와 실무 경험을 통해 복잡한 문제를 가장 효율적인 형태로 풀어냅니다.
              </p>
            </FadeUp>
          </section>

          {/* Expertise Section */}
          <section id="expertise" className="scroll-mt-24">
            <SectionHeader title="Expertise" />
            <div className="grid md:grid-cols-2 gap-6">
              {/* Legacy & Desktop */}
              <FadeUp delay={0.1} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors flex flex-col h-full shadow-lg shadow-black/20">
                 <Monitor className="w-8 h-8 text-indigo-400 mb-6" />
                 <h3 className="text-xl font-bold text-slate-100 mb-4 tracking-tight">Legacy & Desktop</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                   Delphi, C#(WinForms/WPF), MSSQL, Oracle 기반 기술. 복잡한 시스템 환경 속에서도 안정적이고 변함없는 성능을 보장하는 인프라를 설계합니다.
                 </p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {['Delphi', 'C#', 'WinForms', 'WPF', 'MSSQL', 'Oracle'].map(t => (
                     <span key={t} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-[11px] font-medium border border-slate-800">
                       {t}
                     </span>
                   ))}
                 </div>
              </FadeUp>
              
              {/* Future & Intelligence */}
              <FadeUp delay={0.2} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-colors flex flex-col h-full shadow-lg shadow-black/20">
                 <BrainCircuit className="w-8 h-8 text-emerald-400 mb-6" />
                 <h3 className="text-xl font-bold text-slate-100 mb-4 tracking-tight">Future & Intelligence</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                   데이터 시스템 구축 및 최신 AI 프롬프트 엔지니어링 활용. 비즈니스 자동화와 지능형 의사결정을 지원합니다.
                 </p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {['Data Analysis', 'AI Prompting', 'Automation'].map(t => (
                     <span key={t} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-[11px] font-medium border border-slate-800">
                       {t}
                     </span>
                   ))}
                 </div>
              </FadeUp>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-24">
            <SectionHeader title="Projects" />
            <div className="flex flex-col gap-6">
               {[
                 {
                   title: "ERP System",
                   desc: "기업의 전사적 자원 관리 및 비즈니스 프로세스 통합 솔루션",
                   tags: ["Delphi", "C#", "Oracle", "MSSQL"],
                   icon: Network,
                   color: "text-indigo-400",
                   bg: "bg-indigo-400/10",
                   borderColor: "border-indigo-400/20"
                 },
                 {
                   title: "WMS System",
                   desc: "물류 및 재고 프로세스 최적화를 위한 지능형 창고 관리 시스템",
                   tags: ["Delphi", "Oracle"],
                   icon: Package,
                   color: "text-emerald-400",
                   bg: "bg-emerald-400/10",
                   borderColor: "border-emerald-400/20"
                 },
                 {
                   title: "자산 관리 시스템",
                   desc: "기업 자산의 전체 수명주기 추적 및 효율적인 운영 상태 관리 도구",
                   tags: ["Delphi", "Oracle"],
                   icon: Briefcase,
                   color: "text-amber-400",
                   bg: "bg-amber-400/10",
                   borderColor: "border-amber-400/20"
                 },
                 {
                   title: "통합물성 관리 시스템",
                   desc: "원자재 및 화학 제품의 물리/화학적 특성 데이터 통합 및 분석",
                   tags: ["C#", "MSSQL"],
                   icon: Activity,
                   color: "text-sky-400",
                   bg: "bg-sky-400/10",
                   borderColor: "border-sky-400/20"
                 },
                 {
                   title: "고객 관리 시스템",
                   desc: "고객 데이터의 중앙화 및 맞춤형 타겟팅을 위한 CRM 플랫폼",
                   tags: ["Delphi", "MSSQL"],
                   icon: Users,
                   color: "text-rose-400",
                   bg: "bg-rose-400/10",
                   borderColor: "border-rose-400/20"
                 },
                 {
                   title: "예약 관리 시스템",
                   desc: "효율적인 자원 할당과 분산된 실시간 스케줄링을 지원하는 예약 허브",
                   tags: ["Delphi", "MSSQL"],
                   icon: Calendar,
                   color: "text-teal-400",
                   bg: "bg-teal-400/10",
                   borderColor: "border-teal-400/20"
                 },
                 {
                   title: "바코드 생성 시스템",
                   desc: "생산 및 물류 추적을 위한 고속 라벨 바코드 생성 및 프린터 정밀 제어 시스템",
                   tags: ["Delphi", "MSSQL"],
                   icon: Printer,
                   color: "text-purple-400",
                   bg: "bg-purple-400/10",
                   borderColor: "border-purple-400/20"
                 }
               ].map((project, i) => (
                 <FadeUp key={i} delay={0.1 * i} className="group">
                   <div className={`flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:bg-slate-800/50 transition-colors shadow-lg shadow-black/20`}>
                     <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border ${project.bg} ${project.borderColor} ${project.color} group-hover:scale-105 transition-transform`}>
                       <project.icon className="w-6 h-6" />
                     </div>
                     <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-100 mb-2 truncate group-hover:text-white transition-colors tracking-tight">{project.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4 md:mb-0 max-w-lg">{project.desc}</p>
                     </div>
                     <div className="flex flex-wrap gap-2 md:w-32 lg:w-40 shrink-0 justify-start md:justify-end">
                       {project.tags.map(t => (
                         <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-950 text-slate-400 rounded border border-slate-800">
                           {t}
                         </span>
                       ))}
                     </div>
                   </div>
                 </FadeUp>
               ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-24 pb-16">
            <SectionHeader title="Contact" />
            <FadeUp>
              <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg shadow-black/20 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-colors" />
                 <div className="relative text-center md:text-left z-10">
                   <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">아이디어를 현실로 만드세요</h3>
                   <p className="text-slate-400 text-sm">
                     복잡한 요구사항 앞에서도 체계적인 답을 내놓겠습니다.
                   </p>
                 </div>
                 <a href="mailto:zerosjd@gmail.com" className="relative z-10 font-mono text-lg text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap">
                   zerosjd@gmail.com
                 </a>
              </div>
            </FadeUp>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-800/50 pt-8 pb-12 text-center text-[10px] font-mono text-slate-600 uppercase tracking-widest mt-auto">
            © {new Date().getFullYear()} JDIT. All Rights Reserved.
          </footer>

        </div>
      </main>
    </div>
  );
}
