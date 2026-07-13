'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Mail, Github, 
  Monitor, BrainCircuit,
  Network, Package, Briefcase, Activity, Users, Calendar, Printer,
  Search, Filter, Clock, Building, Check, ArrowUpDown, LayoutGrid, Table
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

const projectsData = [
  {
    title: "GST 중국법인 통합물성관리시스템 구축",
    period: "2025.11 ~ 2026.04",
    client: "효성티엔에스(주)",
    role: "PL",
    desc: "GST 중국 법인의 고기능성 안전 및 물성 정보 실시간 트래킹 모듈 개발 및 품질 관리 통합 시스템 구축 PL.",
    tags: ["C# 2017", "물성관리", "PL"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "동나이법인 균주관리시스템 구축",
    period: "2025.07 ~ 2025.10",
    client: "효성티엔에스(주)",
    role: "PL",
    desc: "베트남 동나이 법인의 제조 균주 배양 이력 및 라이프사이클 추적 모니터링 관리 정성/정량 데이터 파이프라인 구축 PL.",
    tags: ["Delphi XE 10", "균주관리", "PL"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "비나탄소섬유법인 WMS 구축",
    period: "2025.04 ~ 2025.06",
    client: "효성티엔에스(주)",
    role: "PL",
    desc: "베트남 비나탄소섬유 법인의 원사, 가공재고 실시간 트래킹 및 창고관리시스템(WMS)의 선입선출 자동화 유기적 파이프라인 구축 PL.",
    tags: ["Delphi XE 10", "WMS", "PL"],
    icon: Package,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "표준 WMS 운영",
    period: "2024.08 ~ 2025.02",
    client: "효성티엔에스(주)",
    role: "운영",
    desc: "전사 표준 창고관리시스템(WMS) 기반 원활한 글로벌 물류 전주기 모니터링 시스템 일상 보안 점검 프로세스 오라클 데이터 트랜잭션 운영 관리.",
    tags: ["Delphi XE 10", "WMS", "운영"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "효성탄소재료법인 IT 시스템 구축",
    period: "2023.10 ~ 2024.01",
    client: "효성티엔에스(주)",
    role: "PL",
    desc: "효성탄소재료 중국 법인의 IT 기간 인프라(ERP 및 생산 정보망) 구축 및 다차원 자재 상태 동기화 관리 모듈 공정 설계 PL.",
    tags: ["Delphi XE 10", "IT시스템", "PL"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "효성필름 취저우 법인 IT 시스템 구축",
    period: "2023.08 ~ 2023.10",
    client: "효성티앤에스㈜",
    role: "PL",
    desc: "중국 취저우 필름 제조 법인의 IT 기간 시스템(ERP/MES) 기획 분석 및 글로벌 공정 최적화 조율 솔루션 구축 PL.",
    tags: ["Delphi XE 10", "IT시스템", "PL"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "중국 가흥화성 법인 필름생산관리시스템 보완",
    period: "2023.04 ~ 2023.07",
    client: "효성티앤에스㈜",
    role: "PL",
    desc: "가흥화성 해외 생산 거점의 고기능성 필름 코팅/슬리팅 공정별 수율 예측 정밀 모니터링 시스템 기능 보완 및 최적화 PL.",
    tags: ["Delphi XE 10", "MES", "PL"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "단조시스템 개발 및 운영 (약 15개 업체)",
    period: "2006.12 ~ 2023.03",
    client: "가온정보기술(주)",
    role: "PM",
    desc: "국내 약 15여 개 중견 금속 단조/프레스 전산 시스템 유지 관리, 신규 공정 요건 수렴 및 레거시 모듈 버전 일관화 패치 총괄 PM.",
    tags: ["Delphi 6.0", "단조시스템", "PM"],
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    title: "gaonCable 패키지 (전선 판매재고 시스템)",
    period: "2021.01 ~ 2021.08",
    client: "가온정보기술㈜",
    role: "PM",
    desc: "전선 제조 및 유통 비즈니스 맞춤형 판매재고 관리 패키지 표준화 설계와 모바일 재고 실사를 지원하는 안드로이드 동기화 앱 연동 PM.",
    tags: ["Delphi XE 10", "안드로이드 스튜디오", "PM"],
    icon: Package,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "스마트공장 구축",
    period: "2020.09 ~ 2021.03",
    client: "제일전기공업㈜",
    role: "PM",
    desc: "제조 가공 현장 맞춤형 스마트 MES 통합 구축 및 PDA 바코드 연계 실시간 생산 수치 모니터링 모듈 통합 설계 총괄 PM.",
    tags: ["Delphi XE 10", "Visual Studio", "PDA", "PM"],
    icon: Network,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "섬유 ERP시스템 구축",
    period: "2020.03 ~ 2020.10",
    client: "㈜대림텍스 상동/녹산공장",
    role: "PM",
    desc: "대규모 섬유 편직/염색 공정 특성 반영 원사 입고부터 완제품 출고까지 전 단계 관리 및 PDA 바코드 데이터 연동 섬유 특화 ERP 시스템 PM.",
    tags: ["Delphi XE 10", "Visual Studio", "PDA", "PM"],
    icon: Network,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "수탁관리 시스템 재개발",
    period: "2019.12 ~ 2020.03",
    client: "㈜동원수산",
    role: "PM",
    desc: "수산물 보관 및 가공 위수탁 수수료 정산 산식 다변화 반영 모듈 설계 및 실시간 냉동 보관 현황 트래킹을 위한 기존 레거시 전면 어플리케이션 현대화 PM.",
    tags: ["Delphi XE 10", "재개발", "PM"],
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    title: "ERP시스템 구축",
    period: "2019.03 ~ 2020.02",
    client: "제일전기공업㈜",
    role: "PM",
    desc: "차단기 및 배선기구 일관 제조 생산 공정 자재 소요량 계획(MRP) 엔진 최적화 및 인사/회계 연동 맞춤형 중견 사내 ERP 통합 구축 PM.",
    tags: ["Delphi XE 10", "ERP", "PM"],
    icon: Network,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    title: "통합 정보시스템 구축 3차",
    period: "2018.04 ~ 2018.12",
    client: "부산항보안공사",
    role: "PM",
    desc: "항만 초소 국방 전수 초동 대처 상황 데이터 무결성 동기화 보강 및 오라클 기반 종합 항만 물리보안 종합 모니터링 컨트롤 파크 3차 통합 PM.",
    tags: ["Delphi XE 10", "Oracle", "PM"],
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "통합 정보시스템 구축 2차",
    period: "2017.04 ~ 2017.12",
    client: "부산항보안공사",
    role: "PM",
    desc: "국가 중요 보안시설 항만 상황실 비상 연동망 정보 가공 및 인사 급여 복리후생 회계 데이터 파이프라인 안전 연계 2차 통합 고도화 PM.",
    tags: ["Delphi XE 10", "Oracle", "PM"],
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "단조 ERP시스템 구축",
    period: "2016.06 ~ 2016.12",
    client: "㈜원일 F&T",
    role: "PM",
    desc: "자동차 및 건설 중장비 정밀 단조 성형 금형 규격 설계 및 외주 가공 공정 전주기 리포트 정밀 추적 시스템 총괄 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "단조 ERP시스템 구축",
    period: "2015.09 ~ 2016.03",
    client: "㈜펠릭스테크",
    role: "PM",
    desc: "금속 단조 프레스 성형 전 가열 화로 센서 연동 및 열처리 실시간 작업 지시 이력 흐름 기획 설계 ERP 관리 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "OMS, WMS, MES시스템 구축",
    period: "2015.01 ~ 2015.08",
    client: "㈜알켄즈",
    role: "PM",
    desc: "주문 관리(OMS), 창고 자산 구조화(WMS), 생산 실행(MES) 전체 공정 이력을 하나의 유기적 파이프라인으로 매핑한 3대 핵심 제조 정보망 통합 PM.",
    tags: ["Delphi 6.0", "제조", "PM"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "단조 ERP시스템 구축",
    period: "2014.05 ~ 2014.09",
    client: "㈜태흥단조",
    role: "PM",
    desc: "자유 단조 공정별 프레스 실시간 누적 하중 및 설비 데이터 연계 수집 모듈 내재화 및 생산 전주기 제어 ERP 관리 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "PLM 와 ERP 연계시스템 구축",
    period: "2013.09 ~ 2013.12",
    client: "㈜세동",
    role: "PM",
    desc: "설계 도면 정보 기반 제품 수명 주기 관리(PLM) BOM 데이터와 ERP 자재 소요 계획(MRP)의 정밀 자동 동기화 인터페이스 연계 총괄 PM.",
    tags: ["Delphi 2007", "C#.NET", "PM"],
    icon: Network,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "SCM 시스템 구축 (웹 버전)",
    period: "2013.05 ~ 2013.08",
    client: "㈜세동",
    role: "PM",
    desc: "협력 기업 발주 확인 및 실시간 납품 예정 정보 웹 포털 연동과 출하 대기 재고 모니터링 수집 아키텍처 PM.",
    tags: ["Delphi 2007", "C#.NET", "JAVA", "PM"],
    icon: Network,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "WMS 와 ERP 연계시스템 구축",
    period: "2013.02 ~ 2013.03",
    client: "㈜세동",
    role: "PM",
    desc: "창고관리시스템(WMS) 실시간 자재 할당 입출고 트래킹 정보와 전사 자원 관리(ERP) 매출 확정 전표 간의 무오류 고성능 인터페이스 연동.",
    tags: ["Delphi 2007", "물류ERP", "PM"],
    icon: Package,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "원가관리시스템 구축",
    period: "2012.09 ~ 2013.01",
    client: "㈜세동",
    role: "PM",
    desc: "제조 가공비/직접비 배부 비율 다차원 분석 기반 품목별 실시간 예정/실제 제조 원가 산출 자동화 전표 구축 총괄 PM.",
    tags: ["Delphi 2007", "원가관리", "PM"],
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    title: "프랜지 ERP시스템 구축",
    period: "2012.01 ~ 2012.06",
    client: "㈜동오프랜지",
    role: "PM",
    desc: "배관 이음 부품 규격별 외경 수치 분석 및 단조 생산 수율 예측, 영업 전주기 관리 기능 맞춤형 ERP 시스템 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "자산관리시스템 구축",
    period: "2011.08 ~ 2011.11",
    client: "부산항보안공사",
    role: "PM",
    desc: "항만 내 보안 장비, 초소 시설물, 무선 통신기 전수 자산 이력 실시간 장애 감지 모니터링 정보 추적 시스템 총괄 PM.",
    tags: ["Delphi 7.0", "자산관리", "PM"],
    icon: Users,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    title: "재보증시스템 구축",
    period: "2011.03 ~ 2011.06",
    client: "울산신용보증재단",
    role: "PM/개발",
    desc: "지역 소상공인 보증 해소를 위한 대외계 금융 연계망 정합화 및 재보증 청구, 심사, 정산 완전 자동화 시스템 총괄 PM 및 개발.",
    tags: ["Delphi 5.0", "금융", "PM", "개발"],
    icon: Activity,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "RFID용 물류재고관리",
    period: "2010.01 ~ 2010.03",
    client: "㈜세동",
    role: "PM",
    desc: "부품 공정 출하용 RFID 안테나 및 태그 디바이스 정밀 연동 및 실시간 불량 모션 필터링 통합 재고관리 소프트웨어 구축 PM.",
    tags: ["Delphi 2007", "RFID", "PM"],
    icon: Package,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "효성울산 네오켐",
    period: "2009.09 ~ 2009.12",
    client: "노틸러스효성",
    role: "PL",
    desc: "특수 화학 플랜트 공정 자동화 설비의 제어 계측 계보 데이터 이상 정밀 모니터링 수동 조작 추적 솔루션 개발 PL.",
    tags: ["Delphi 5.0", "PL"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "단조 ERP시스템 구축",
    period: "2009.06 ~ 2009.07",
    client: "㈜비아이엠",
    role: "PM",
    desc: "중대형 단조 성형 금형 규격 및 프레스 성형 수율 연산 정합성, 외주 가공 전주기 리포트 추적 시스템 총괄 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    title: "철강 ERP시스템 구축",
    period: "2009.04 ~ 2009.05",
    client: "㈜새론스틸",
    role: "PM",
    desc: "철강 슬리팅 절단 수치 오차 보정, 코일 중량 자동 미터링 데이터 연동 및 맞춤 생산 ERP 총괄 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "급식관리ERP시스템 구축",
    period: "2008.11 ~ 2009.03",
    client: "㈜삼보유통",
    role: "PM",
    desc: "대규모 식자재 수발주 최적화, 식단 표준 원가 산출 및 위생 체크리스트 통합 단체 급식 ERP 총괄 PM.",
    tags: ["Delphi 2007", "ERP", "PM"],
    icon: LayoutGrid,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    title: "해외법인근태관리시스템",
    period: "2008.09 ~ 2008.11",
    client: "㈜효성 미국법인",
    role: "개발",
    desc: "해외 공장 지사 직원 대상 실시간 대규모 타임카드 데이터 수집 동기화 프로그램 및 인사 ERP 전표 데이터 로깅 개발.",
    tags: ["Delphi 5.0", "개발"],
    icon: Clock,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "일상점검관리시스템",
    period: "2008.05 ~ 2008.07",
    client: "노틸러스효성㈜",
    role: "개발",
    desc: "금융 자동화 기기 일상 점검 순찰 정보 정밀 기록 모아보기 및 에러 이력 추적 통계 보고 데이터 일일 아카이빙 개발.",
    tags: ["Delphi 5.0", "개발"],
    icon: Check,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "ERP 시스템 구축 및 고도화",
    period: "2007.06 ~ 2008.04",
    client: "㈜마이스코",
    role: "PM",
    desc: "단조 설비 기반 금속 제조 프로세스 맞춤형 영업/생산 수율 예측 ERP 시스템 고도화를 위한 전반적인 프로젝트 총괄 설계 및 관리.",
    tags: ["Delphi", "ERP", "PM"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "신용보증 재보증시스템 고도화",
    period: "2007.03 ~ 2007.05",
    client: "울산신용보증재단",
    role: "PM",
    desc: "보증 공급 확대를 위한 신용보증기금 내부 대외계 시스템 연동 및 재보증 청구, 심사, 정산 모듈 고도화 설계 및 개발 총괄.",
    tags: ["Delphi 7.0", "금융", "PM"],
    icon: Activity,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "식자재 관리 및 유통 시스템 구축",
    period: "2006.11 ~ 2007.01",
    client: "㈜대상씨푸드서비스",
    role: "PM",
    desc: "중대형 단체급식 및 신선식품 유통 물류 수발주, 선입선출 이력 추적과 콜드체인 바코드 연계 관리 통합 시스템 PM 총괄.",
    tags: ["Delphi 6.0", "식자재", "PM"],
    icon: Package,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "ERP 시스템 개발 및 고도화",
    period: "2005.06 ~ 2006.05",
    client: "동남정밀",
    role: "PM",
    desc: "자동차 핵심 알루미늄 다이캐스팅 제조 공정에 특화된 ERP 생산 계획, 실시간 수율 분석, 원가 모듈 관리 및 고도화 총괄 PM.",
    tags: ["Delphi 6.0", "ERP", "PM"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "화학 섬유 공정 품질관리 시스템",
    period: "2005.01 ~ 2005.05",
    client: "㈜효성",
    role: "개발",
    desc: "품질 보증을 위한 섬유 원사 및 화학물성 분석 시험 데이터 로깅 자동화, 공정 모니터링 품질 규격 관리 개발.",
    tags: ["Delphi 5.0", "품질관리", "개발"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "신용 보증 대출 및 재보증시스템",
    period: "2004.06 ~ 2004.12",
    client: "울산신용보증재단",
    role: "PM",
    desc: "울산 관내 소상공인 금융 보증 대출 심사, 연체 채권 추적, 연체금 상환 및 대지급 재보증 핵심 금융 거래 연동 시스템 PM.",
    tags: ["Delphi 7.0", "금융", "PM"],
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  },
  {
    title: "조선소 고위험 안전관리 시스템",
    period: "2004.03 ~ 2004.04",
    client: "대선조선",
    role: "PM",
    desc: "조선 산업 안전 환경 강화를 위한 밀폐/고소 작업 안전 점검 체크리스트, 불안전 요소 추적 공정 제어 안전 시스템 PM.",
    tags: ["Delphi 6.0", "안전관리", "PM"],
    icon: Network,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "조선소 인사 및 회계 통합 관리 시스템",
    period: "2003.01 ~ 2004.02",
    client: "(사)부산항부두관리공사",
    role: "PM",
    desc: "부산항 부두 노무 자원의 항만 인력 배치, 급여 산정 및 공사 회계 계정 과목 분개 연동 시스템 전면 재설계 및 개발 총괄 PM.",
    tags: ["Delphi 5.0", "인사회계", "PM"],
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "전사적 자원 관리 ERP 시스템",
    period: "2002.05 ~ 2003.09",
    client: "동원수산(주)",
    role: "PL",
    desc: "원양어업 및 대형 수산물 유통망 최적화를 위한 전사 영업, 생산, 물류 실적 수하물 가용성 통합 ERP 시스템 PL 설계.",
    tags: ["Delphi 5.0", "ERP", "PL"],
    icon: Network,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "건설 자재 생산 및 영업관리 구축",
    period: "2002.02 ~ 2002.05",
    client: "ICI 우방(주)",
    role: "PL",
    desc: "대규모 건설 제조 자재 수주 발주 통합 생산 계획 스케줄러 제어 및 분산 영업 실적 추적 모듈 PL 개발.",
    tags: ["Delphi 5.0", "생산영업", "PL"],
    icon: Network,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    borderColor: "border-sky-400/20"
  },
  {
    title: "제조 라인 통계적 품질관리 시스템",
    period: "2001.01 ~ 2002.01",
    client: "(주)세동",
    role: "개발",
    desc: "부품 조립 공정 관리 통계적 품질 검사 정밀 측정 편차 계산 및 실시간 이상 경보 데이터 아카이브 개발.",
    tags: ["Delphi 5.0", "품질관리", "개발"],
    icon: Activity,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    borderColor: "border-rose-400/20"
  },
  {
    title: "제약사 급여 및 회계 연동 시스템",
    period: "2000.01 ~ 2000.12",
    client: "(주)아남약품",
    role: "개발",
    desc: "아남약품 전 직원 연말정산 및 매월 근태 기반 급여 이체 처리, 회계 전표 전송 연동 자동화 대시보드 구축.",
    tags: ["Delphi 4.0", "인사회계", "개발"],
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "조선소 노무 인사 및 총무 서비스",
    period: "2000.06 ~ 2000.09",
    client: "대선조선",
    role: "개발",
    desc: "조선소 현장 작업자의 직능, 발령, 포상 내역 연동 총무 관리부서 사내 자산 및 복리후생 비품 소요 추적 모듈 개발.",
    tags: ["Delphi 4.0", "인사회계", "개발"],
    icon: Users,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "경영분석 정보 및 문서 아카이브",
    period: "2000.02 ~ 2000.05",
    client: "(주)세동",
    role: "개발",
    desc: "기업 경영 핵심 성과 지표(KPI) 통합 및 내부 극비 종이 보고서의 전자 스캔 아카이브 연동 인덱싱 조회 기능 개발.",
    tags: ["Delphi 5.0", "RPG/400", "개발"],
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    borderColor: "border-purple-400/20"
  },
  {
    title: "제조업 전사 판매/급여/회계관리 패키지",
    period: "1999.11 ~ 1999.12",
    client: "진수산업",
    role: "개발",
    desc: "소규모 섬유 제조업체의 물량 출하, 노무비 정산, 기본 법인세 연동용 단일 클라이언트 회계 통합 전표 패키지 개발.",
    tags: ["Delphi 5.0", "인사회계", "개발"],
    icon: Printer,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    borderColor: "border-teal-400/20"
  },
  {
    title: "약국 및 도매 판매 실적 관리 솔루션",
    period: "1998.09 ~ 1998.12",
    client: "(주)아남약품",
    role: "개발",
    desc: "수만 가지 처방약 재고 및 처방전 정보 기반 거래처 도도매 판매 수납 실시간 매퍼 데이터베이스 연계 연동 프로그램 개발.",
    tags: ["Delphi 4.0", "판매관리", "개발"],
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20"
  },
  {
    title: "신신기계 품질 검증 및 시험성적서 시스템",
    period: "1998.04 ~ 1998.07",
    client: "(주)신신기계",
    role: "개발",
    desc: "냉각 기계, 컴프레셔 압력 한계 시험 데이터 실시간 계측 장비 입력 처리 및 대외 공인 시험 성적서 프린터 정밀 제어 출력.",
    tags: ["Delphi", "RPG/400", "개발"],
    icon: Printer,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20"
  },
  {
    title: "종합 배차 및 정기 화물 물류 트래킹",
    period: "1997.03 ~ 1997.06",
    client: "천일정기화물",
    role: "개발",
    desc: "천일화물 전국 거점 지점 간 대형 트럭 운송 스케줄링 배차 최적화, 화물 무게 및 요율 테이블 자동 매핑 회계 정산 모듈.",
    tags: ["COBOL", "AS/400", "개발"],
    icon: Network,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    borderColor: "border-amber-400/20"
  }
];

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

const getDevLanguages = (tags: string[], role: string) => {
  let techs = tags.filter(t => t !== role && t !== '개발' && t !== '운영' && t !== 'PM' && t !== 'PL');
  const domains = [
    "WMS", "MES", "ERP", "IT시스템", "물성관리", "물류ERP", 
    "SCM", "OMS", "제조", "금융", "품질관리", "식자재", 
    "안전관리", "인사회계", "판매관리", "생산영업", "균주관리", 
    "단조시스템", "재개발"
  ];
  return techs.filter(t => !domains.includes(t));
};

export default function PortfolioPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedRole, setSelectedRole] = React.useState('전체');
  const [selectedTech, setSelectedTech] = React.useState('전체');
  const [sortBy, setSortBy] = React.useState('최신순');
  const [viewMode, setViewMode] = React.useState<'card' | 'timeline' | 'table'>('card');

  const filteredProjects = React.useMemo(() => {
    let result = [...projectsData];

    if (searchTerm) {
      const s = searchTerm.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(s) ||
          p.client.toLowerCase().includes(s) ||
          p.desc.toLowerCase().includes(s) ||
          p.tags.some(t => t.toLowerCase().includes(s))
      );
    }

    if (selectedRole !== '전체') {
      result = result.filter(p => {
        if (selectedRole === 'PM/PL') {
          return p.role.includes('PM') || p.role.includes('PL');
        }
        return p.role.includes(selectedRole);
      });
    }

    if (selectedTech !== '전체') {
      if (selectedTech === 'Delphi') {
        result = result.filter(p => p.tags.some(t => t.toLowerCase().includes('delphi')));
      } else if (selectedTech === 'C#') {
        result = result.filter(p => p.tags.some(t => t.toLowerCase().includes('c#')));
      } else if (selectedTech === 'JAVA') {
        result = result.filter(p => p.tags.some(t => t.toLowerCase().includes('java')));
      } else if (selectedTech === 'COBOL/RPG') {
        result = result.filter(p => p.tags.some(t => {
          const tl = t.toLowerCase();
          return tl.includes('cobol') || tl.includes('rpg') || tl.includes('as/400');
        }));
      } else if (selectedTech === '기타') {
        result = result.filter(p => {
          const hasKnownTech = p.tags.some(t => {
            const tl = t.toLowerCase();
            return tl.includes('delphi') || tl.includes('cobol') || tl.includes('rpg') || tl.includes('as/400') || tl.includes('c#') || tl.includes('java');
          });
          return !hasKnownTech;
        });
      }
    }

    if (sortBy === '오래된순') {
      result.reverse();
    }

    return result;
  }, [searchTerm, selectedRole, selectedTech, sortBy]);

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
                   Delphi, C#(WinForms/WPF), JAVA, MSSQL, Oracle 기반 기술. 복잡한 시스템 환경 속에서도 안정적이고 변함없는 성능을 보장하는 인프라를 설계합니다.
                 </p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {['Delphi', 'C#', 'JAVA', 'WinForms', 'WPF', 'MSSQL', 'Oracle'].map(t => (
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

            {/* Quick Resume Stats Summary */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/80 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl rounded-full" />
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5 font-mono">총 참여 프로젝트</span>
                <span className="text-2xl md:text-3xl font-black text-indigo-400 font-mono">{projectsData.length}<span className="text-xs font-sans font-medium text-slate-500 ml-1">건</span></span>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/80 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 blur-xl rounded-full" />
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5 font-mono">PM / PL 리더십</span>
                <span className="text-2xl md:text-3xl font-black text-emerald-400 font-mono">{projectsData.filter(p => p.role.includes('PM') || p.role.includes('PL')).length}<span className="text-xs font-sans font-medium text-slate-500 ml-1">건</span></span>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/80 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 blur-xl rounded-full" />
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5 font-mono">주요 주력 기술</span>
                <span className="text-base font-bold text-slate-200 truncate">Delphi ({projectsData.filter(p => p.tags.some(t => t.toLowerCase().includes('delphi'))).length}건)</span>
              </div>
              <div className="bg-slate-900/40 p-5 rounded-3xl border border-slate-800/80 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 blur-xl rounded-full" />
                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider mb-1.5 font-mono">경력 기간</span>
                <span className="text-lg md:text-xl font-black text-sky-400 font-mono">1997 - 2026</span>
              </div>
            </div>

            {/* View Mode & Filter Controls Container */}
            <div className="mb-8 flex flex-col gap-6 bg-slate-900/60 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-md">
              
              {/* Layout Mode Toggles & Search Bar */}
              <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
                {/* View Selector Tabs */}
                <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800/80 w-full lg:w-fit">
                  {[
                    { id: 'card', label: '카드 뷰', icon: LayoutGrid },
                    { id: 'timeline', label: '타임라인', icon: Clock },
                    { id: 'table', label: '테이블 표', icon: Table },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setViewMode(mode.id as any)}
                      className={`flex-1 lg:flex-initial py-2 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${viewMode === mode.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      <mode.icon className="w-4 h-4" />
                      {mode.label}
                    </button>
                  ))}
                </div>

                {/* Subtitle / Description of view */}
                <span className="text-xs text-slate-500 font-medium font-mono hidden lg:block">
                  {viewMode === 'card' && '• 각 프로젝트 상세 정보를 카드 디자인 구도로 보여줍니다.'}
                  {viewMode === 'timeline' && '• 1997년부터 2026년까지의 축적된 이력을 시간 역순으로 추적합니다.'}
                  {viewMode === 'table' && '• 촘촘하고 명확하게 설계된 경력 증명 대시보드 표를 보여줍니다.'}
                </span>
              </div>

              {/* Advanced Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="프로젝트명, 고객사, 설명, 기술 스택 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-medium"
                />
              </div>

              {/* Inline Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/60 font-medium">
                <div className="flex flex-wrap items-center gap-6 text-xs">
                  {/* Role filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">직무</span>
                    <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/80">
                      {['전체', 'PM/PL', '개발', '운영'].map((role) => (
                        <button
                          key={role}
                          onClick={() => setSelectedRole(role)}
                          className={`px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap cursor-pointer ${selectedRole === role ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack filter */}
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">기술</span>
                    <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/80">
                      {['전체', 'Delphi', 'C#', 'JAVA', 'COBOL/RPG', '기타'].map((tech) => (
                        <button
                          key={tech}
                          onClick={() => setSelectedTech(tech)}
                          className={`px-3 py-1.5 rounded-lg transition-colors font-medium whitespace-nowrap cursor-pointer ${selectedTech === tech ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sort Order Selector */}
                <div className="flex items-center gap-3">
                  <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800/80 text-xs">
                    {['최신순', '오래된순'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSortBy(opt)}
                        className={`px-3 py-1.5 rounded-lg transition-colors font-medium flex items-center gap-1 cursor-pointer ${sortBy === opt ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 px-1">
                <span>결과: 총 {projectsData.length}개 이력 중 {filteredProjects.length}개 필터됨</span>
                {(searchTerm || selectedRole !== '전체' || selectedTech !== '전체') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedRole('전체');
                      setSelectedTech('전체');
                    }}
                    className="text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-wider underline cursor-pointer"
                  >
                    필터 초기화
                  </button>
                )}
              </div>
            </div>

            {/* Display Results based on current viewMode */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {filteredProjects.length === 0 ? (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800/60"
                  >
                    <p className="text-slate-400 font-medium mb-2">검색 필터에 매칭되는 프로젝트 이력이 없습니다.</p>
                    <p className="text-slate-600 text-xs font-mono">다른 키워드나 태그를 선택해 보세요.</p>
                  </motion.div>
                ) : (
                  <div className="relative">
                    {/* CARD VIEW */}
                    {viewMode === 'card' && (
                      <motion.div
                        key="card-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-6"
                      >
                        {filteredProjects.map((project, i) => (
                          <FadeUp key={`${project.title}-${project.period}-${i}`} delay={Math.min(i, 3) * 0.05} className="group">
                            <div className={`flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 shadow-md shadow-black/10 group-hover:shadow-black/20 relative overflow-hidden`}>
                              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
                              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border ${project.bg} ${project.borderColor} ${project.color} group-hover:scale-105 transition-transform duration-300`}>
                                <project.icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span className="text-xs font-mono font-semibold tracking-wider px-2 py-0.5 rounded bg-slate-950 text-indigo-400 border border-slate-800/60">
                                    {project.client}
                                  </span>
                                  <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {project.period}
                                  </span>
                                  {getDevLanguages(project.tags, project.role).map(lang => (
                                    <span key={lang} className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-slate-950 text-sky-400 border border-sky-500/20 font-bold whitespace-nowrap">
                                      {lang}
                                    </span>
                                  ))}
                                </div>
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight flex items-center gap-2">
                                  {project.title}
                                </h3>
                              </div>
                              <div className="flex flex-col md:items-end justify-center shrink-0">
                                <span className={`text-xs font-bold leading-none px-3 py-1.5 rounded-full w-fit ${
                                  project.role === 'PM' ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' :
                                  project.role === 'PL' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' :
                                  project.role === '운영' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                                  'bg-slate-800 text-slate-300 border border-slate-700/50'
                                }`}>
                                  {project.role}
                                </span>
                              </div>
                            </div>
                          </FadeUp>
                        ))}
                      </motion.div>
                    )}

                    {/* TIMELINE VIEW */}
                    {viewMode === 'timeline' && (
                      <motion.div
                        key="timeline-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative border-l border-slate-800 pl-8 ml-4 md:ml-6 flex flex-col gap-8 py-4"
                      >
                        {filteredProjects.map((project, i) => (
                          <div key={`${project.title}-${project.period}-${i}`} className="relative group">
                            {/* Blue timeline dot hook */}
                            <div className="absolute -left-[41px] md:-left-[41px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500/80 flex items-center justify-center group-hover:border-white transition-colors z-10 shadow shadow-black/40">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-white transition-colors" />
                            </div>

                            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:bg-slate-850 hover:border-slate-700 transition-all duration-300 shadow-md group-hover:shadow-lg relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full" />
                              
                              <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-col gap-1.5">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-mono font-semibold tracking-wider px-2 py-0.5 rounded bg-slate-950 text-indigo-400 border border-slate-800/60 font-sans">
                                      {project.client}
                                    </span>
                                    <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1">
                                      <Clock className="w-3.5 h-3.5" />
                                      {project.period}
                                    </span>
                                    {getDevLanguages(project.tags, project.role).map(lang => (
                                      <span key={lang} className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-slate-950 text-sky-400 border border-sky-500/20 font-bold whitespace-nowrap">
                                        {lang}
                                      </span>
                                    ))}
                                  </div>
                                  <h3 className="text-lg md:text-xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors font-sans mt-1">
                                    {project.title}
                                  </h3>
                                </div>
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                                  project.role === 'PM' ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' :
                                  project.role === 'PL' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' :
                                  project.role === '운영' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                                  'bg-slate-800 text-slate-300 border border-slate-700/50'
                                }`}>
                                  {project.role}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* TABLE VIEW */}
                    {viewMode === 'table' && (
                      <motion.div
                        key="table-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl shadow-xl"
                      >
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse min-w-[850px]">
                            <thead>
                              <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider font-mono">
                                <th className="py-4 px-6 text-center w-12">No</th>
                                <th className="py-4 px-4 w-36">기간</th>
                                <th className="py-4 px-4 w-44">고객사</th>
                                <th className="py-4 px-6">구축 정보</th>
                                <th className="py-4 px-4 w-40">개발 언어</th>
                                <th className="py-4 px-4 text-center w-28">직무</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 font-sans font-light">
                              {filteredProjects.map((project, idx) => (
                                <tr key={`${project.title}-${idx}`} className="hover:bg-slate-850/40 transition-colors text-sm group">
                                  <td className="py-5 px-6 text-center font-mono text-xs text-slate-500">
                                    {filteredProjects.length - idx}
                                  </td>
                                  <td className="py-5 px-4 font-mono text-xs text-slate-400 whitespace-nowrap">
                                    {project.period}
                                  </td>
                                  <td className="py-5 px-4 font-normal">
                                    <span className="inline-block px-2 py-1 rounded bg-slate-950 text-slate-300 font-mono text-xs font-semibold border border-slate-800 whitespace-nowrap">
                                      {project.client}
                                    </span>
                                  </td>
                                  <td className="py-5 px-6">
                                    <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors tracking-tight font-sans">{project.title}</h4>
                                  </td>
                                  <td className="py-5 px-4">
                                    <div className="flex flex-wrap gap-1">
                                      {getDevLanguages(project.tags, project.role).map(lang => (
                                        <span key={lang} className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-slate-950 text-sky-400 border border-sky-500/20 font-bold whitespace-nowrap">
                                          {lang}
                                        </span>
                                      ))}
                                    </div>
                                  </td>
                                  <td className="py-5 px-4 text-center">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                                      project.role === 'PM' ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30' :
                                      project.role === 'PL' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' :
                                      project.role === '운영' ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' :
                                      'bg-slate-800 text-slate-300 border border-slate-700/50'
                                    }`}>
                                      {project.role}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </AnimatePresence>
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
