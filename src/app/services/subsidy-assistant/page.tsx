"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  FileCheck,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Sliders,
  Send,
  Sparkles,
  Phone,
  HelpCircle,
  Clock,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SubsidyAssistantServicePage() {
  const router = useRouter();

  // Subsidy assistant wizard states
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    state: "Maharashtra",
    areaType: "Rural",
    bizType: "Farmer / FPO",
    capacity: "5-20 MT",
    name: "",
    phone: "",
  });
  const [calculationResult, setCalculationResult] = useState<{
    scheme: string;
    percentage: string;
    description: string;
  } | null>(null);
  const [consultationSent, setConsultationSent] = useState(false);

  const states = [
    "Maharashtra",
    "Gujarat",
    "Karnataka",
    "Madhya Pradesh",
    "Himachal Pradesh",
    "Other State",
  ];
  const areaTypes = ["Urban", "Suburban", "Rural"];
  const bizTypes = [
    "Farmer / FPO",
    "Dairy Cooperative",
    "Private Cold Store Enterprise",
    "Food Processor / Exporter",
  ];
  const capacities = [
    "Below 5 MT",
    "5-20 MT",
    "20-50 MT",
    "50-100 MT",
    "Above 100 MT",
  ];

  const handleCalculate = () => {
    let percentage = "35% - 50%";
    let scheme = "MIDH (Horticulture Development)";
    let desc =
      "Standard credit-linked back-ended capital subsidy for cold storage enclosures.";

    if (form.areaType === "Urban") {
      percentage = "15%";
      scheme = "PMEGP / PMFME Urban Subsidy Support";
      desc =
        "Standard urban area capital subsidy under self-employment incentives.";
    } else if (form.areaType === "Suburban") {
      percentage = "16% - 34%";
      scheme = "PMKSY / MIDH Semi-Urban Cold Chain Support";
      desc =
        "Semi-urban cold chain creation and preservation infrastructure support.";
    } else {
      if (form.bizType === "Farmer / FPO") {
        percentage = "50%";
        scheme = "NHB (National Horticulture Board)";
        desc =
          "Special cooperative category subsidy matching farming producer groups in rural areas.";
      } else if (form.state === "Himachal Pradesh") {
        percentage = "50%";
        scheme = "MIDH Hilly State Scheme";
        desc =
          "Hilly state elevation rural capital grant for cold chain components.";
      } else {
        percentage = "35% - 50%";
        scheme = "NHB / MIDH Rural Cold Chain Support";
        desc =
          "Standard credit-linked rural back-ended capital grant matching cold rooms.";
      }
    }

    setCalculationResult({
      scheme,
      percentage,
      description: desc,
    });
    setStep(5);
  };

  const handleRequestConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setConsultationSent(true);
  };

  const stepsInfo = [
    {
      title: "01. Feasibility Study",
      desc: "Our engineers evaluate land bounds, power availability, and thermal requirements.",
      stage: "Assessment",
      icon: Users,
    },
    {
      title: "02. DPR Dossier Preparation",
      desc: "Drafting fully detailed project reports complying with NABARD & NHB banking parameters.",
      stage: "Documentation",
      icon: FileCheck,
    },
    {
      title: "03. Layout Compliance",
      desc: "CAD sizing matching structural height, thickness, and insulation metrics.",
      stage: "Engineering",
      icon: Sliders,
    },
    {
      title: "04. Liaison & Inspection",
      desc: "Coordination with joint inspection committees for smooth grant verification.",
      stage: "Release",
      icon: ShieldCheck,
    },
  ];

  const valueProps = [
    {
      title: "Compliance Sizing",
      desc: "Blueprints customized for NHB compliance parameters.",
      icon: Ruler,
    },
    {
      title: "Bankable Reports",
      desc: "DPR compilation satisfying public sector credit criteria.",
      icon: FileCheck,
    },
    {
      title: "Maximum Subsidies",
      desc: "Helping secure eligible grants up to 50% on project cost.",
      icon: Award,
    },
    {
      title: "Inspection Support",
      desc: "Liaisoning and coordination for structural verification.",
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: "What is the standard subsidy percentage under NHB?",
      a: "Standard projects receive a 35% capital back-ended credit-linked subsidy. For hilly states, scheduled tribal regions, and registered Farmer Producer Organizations (FPOs), the subsidy limit increases to 50%.",
    },
    {
      q: "Are the subsidies credit-linked?",
      a: "Yes, subsidies under NHB, MIDH, and NABARD programs are back-ended and credit-linked. This means you must secure a term loan from an approved bank to qualify for the capital grant.",
    },
    {
      q: "Does ThermoVault help compile the DPR dossiers?",
      a: "Absolutely. We prepare bankable Detailed Project Reports (DPRs), structural heat-gain sizing blueprints, and compliance documents to ensure swift dossier clearance.",
    },
    {
      q: "Which state governments provide additional top-up grants?",
      a: "States like Maharashtra, Gujarat, and Himachal Pradesh have additional state-sponsored agricultural schemes that can be combined or run in parallel with NHB grants.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0C2340] text-white pt-16 pb-24 overflow-hidden min-h-[620px] flex items-center">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none z-0"
          style={{
            backgroundImage: `
              radial-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px, 40px 40px, 40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0C2340] via-[#0E2F56]/90 to-[#0A1A30]/95 z-0" />

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />

        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>&gt;</span>
            <span className="text-blue-400">Subsidy Assistant</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left side content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/25 px-4 py-2 text-xs font-bold text-blue-400 font-mono w-fit">
                <Award className="h-4 w-4 text-blue-400 shrink-0 animate-pulse" />
                <span>GOVERNMENT GRANTS & INCENTIVES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display leading-[1.12]">
                Subsidy & Grant <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 font-display">
                  Sizing Assistant
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
                Get end-to-end guidance and compliance checks for NHB, MIDH, and NABARD subsidy schemes. We assist you in drafting bankable project reports and securing grants up to 35% - 50%.
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-950/50 via-[#0A1A30]/50 to-blue-900/30 border border-blue-500/30 px-4 py-2 text-xs font-bold font-mono text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] backdrop-blur-md select-none">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-[10px] animate-pulse shrink-0">
                    ✓
                  </span>
                  <span>
                    Standard Grant: <strong className="text-white">35% Capital</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-950/50 via-[#0A1A30]/50 to-cyan-900/30 border border-cyan-500/30 px-4 py-2 text-xs font-bold font-mono text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.15)] backdrop-blur-md select-none">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] animate-pulse shrink-0">
                    ✓
                  </span>
                  <span>
                    FPOs / Hilly states: <strong className="text-white">50% Capital</strong>
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#subsidy-checker-widget"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-bold text-white shadow-lg active:scale-[0.98] transition-all font-display"
                >
                  <span>Launch Eligibility Checker</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Side: Sizing Form */}
            <div id="sizing-form-card" className="lg:col-span-6 relative scroll-mt-24">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-lg" />

              <div className="relative rounded-2xl border border-white/10 bg-[#0C2340]/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Phone className="h-4.5 w-4.5" />
                  <h3 className="text-base font-extrabold text-white font-display">
                    Advisory Consultation
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Request specialized help from our agricultural advisors regarding bankable DPR preparation or structural grant mapping.
                </p>

                {consultationSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-6 text-center space-y-4 py-10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 mx-auto">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-display">
                        Consultation Logged
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed px-2">
                        Thanks <strong className="text-white">{form.name}</strong>. Our lead consultant will connect with you to review your eligibility.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleRequestConsultation} className="space-y-4">
                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold font-mono uppercase tracking-wider block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Deshmukh"
                        className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-body"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 font-semibold font-mono uppercase tracking-wider block mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                          })
                        }
                        maxLength={10}
                        placeholder="e.g. +91 80550 10620"
                        className="w-full rounded-xl bg-slate-950/50 border border-white/10 p-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-blue-400 font-bold font-mono py-2 bg-blue-500/5 border border-blue-500/10 rounded-xl justify-center w-full shadow-inner select-none">
                      <Clock className="h-3.5 w-3.5 animate-pulse text-blue-400" />
                      <span>Response within 12–24 Hours</span>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 py-3.5 text-xs font-bold text-white shadow-lg active:scale-[0.98] transition-all font-display"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Book Subsidy Consultation</span>
                      </button>

                      <a
                        href="https://wa.me/918055010620?text=Hi,%20I'm%20interested%20in%20Cold%20Storage%20Subsidy%20Assistance.%20Please%20connect%20me%20with%20an%20advisor."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 py-3.5 text-xs font-bold text-white transition-all active:scale-[0.98] font-display"
                      >
                        <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Props Bar */}
      <section className="bg-slate-50 border-y border-slate-100 py-10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 lg:divide-x lg:divide-slate-200">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-start space-y-2.5 ${idx > 0 ? "pt-6 md:pt-0 lg:pl-6" : ""}`}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-[#0c2340] font-display">
                      {prop.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-body">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Checker Section */}
      <section id="subsidy-checker-widget" className="py-24 bg-white relative scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f605_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
                COMPLIANCE CHECKER
              </span>
              <h2 className="text-3xl font-extrabold text-[#0c2340] font-display leading-tight">
                Evaluate Your Eligibility Instantly
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed font-body">
                Our eligibility mapping tool factors in localized state policies, structural dimensions, and entity classifications to verify compliance constraints matching MIDH/NHB norms.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Sliders className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0c2340]">Multi-Variable Analysis</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Checks state variables, area types, and capacity parameters simultaneously.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0c2340]">Compliance Safeguards</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Helps identify potential rejection points before official project submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checker Card Column */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <Calculator className="h-5 w-5 text-blue-600" />
                <h3 className="text-sm font-bold text-[#0c2340] font-display">
                  Subsidy Eligibility Checker
                </h3>
              </div>

              {step <= 4 && (
                <div className="flex items-center gap-1 mb-6">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        s <= step ? "bg-blue-600" : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Step 1: State */}
              {step === 1 && (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Select Installation State (Step 1 of 4)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {states.map((st) => (
                      <button
                        key={st}
                        onClick={() => setForm({ ...form, state: st })}
                        className={`text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          form.state === st
                            ? "bg-blue-50 border-blue-600 text-blue-600"
                            : "bg-white border-slate-100 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Area Type */}
              {step === 2 && (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Select Area Type (Step 2 of 4)
                  </span>
                  <div className="space-y-2">
                    {areaTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setForm({ ...form, areaType: type })}
                        className={`w-full text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          form.areaType === type
                            ? "bg-blue-50 border-blue-600 text-blue-600"
                            : "bg-white border-slate-100 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Applicant Category */}
              {step === 3 && (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Applicant Business Category (Step 3 of 4)
                  </span>
                  <div className="space-y-2">
                    {bizTypes.map((biz) => (
                      <button
                        key={biz}
                        onClick={() => setForm({ ...form, bizType: biz })}
                        className={`w-full text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          form.bizType === biz
                            ? "bg-blue-50 border-blue-600 text-blue-600"
                            : "bg-white border-slate-100 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {biz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Capacity */}
              {step === 4 && (
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                    Chamber Storage Capacity (Step 4 of 4)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {capacities.map((cap) => (
                      <button
                        key={cap}
                        onClick={() => setForm({ ...form, capacity: cap })}
                        className={`text-left rounded-xl p-3 text-xs border font-medium transition-all ${
                          form.capacity === cap
                            ? "bg-blue-50 border-blue-600 text-blue-600"
                            : "bg-white border-slate-100 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {cap}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Results */}
              {step === 5 && calculationResult && (
                <div className="space-y-6">
                  <div className="text-center py-2">
                    <CheckCircle2 className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-[#0c2340] font-display">
                      Eligibility Sizing Result
                    </h4>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 space-y-3">
                    <div className="flex justify-between text-xs border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Matching Scheme:</span>
                      <span className="font-bold text-[#0c2340] text-right">
                        {calculationResult.scheme}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Subsidy Percentage:</span>
                      <span className="font-bold text-blue-600 font-mono">
                        {calculationResult.percentage}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed pt-1">
                      {calculationResult.description}
                    </p>
                  </div>

                  {consultationSent ? (
                    <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-center">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-xs font-bold text-[#0c2340]">
                        Callback Request Logged
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                        A project engineer will contact you with DPR checklist drafts.
                      </div>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleRequestConsultation}
                      className="space-y-3 border-t border-slate-200/60 pt-4"
                    >
                      <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                        Request Subsidy Sizing Consultation
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="rounded-lg bg-white border border-slate-200 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Mobile Number"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                            })
                          }
                          maxLength={10}
                          className="rounded-lg bg-white border border-slate-200 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-1 rounded-xl bg-blue-600 py-3 text-xs font-semibold text-white hover:bg-blue-500 transition-all shadow-sm"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Schedule Review Callback</span>
                      </button>
                    </form>
                  )}

                  <button
                    onClick={() => {
                      setStep(1);
                      setConsultationSent(false);
                      setCalculationResult(null);
                    }}
                    className="w-full text-center text-[11px] font-bold text-blue-600 hover:underline mt-2"
                  >
                    Reset Checker
                  </button>
                </div>
              )}

              {/* Wizard Footer controls */}
              {step <= 4 && (
                <div className="flex justify-end gap-3 mt-6 border-t border-slate-100 pt-4">
                  {step > 1 && (
                    <button
                      onClick={() => setStep((prev) => prev - 1)}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={
                      step === 4
                        ? handleCalculate
                        : () => setStep((prev) => prev + 1)
                    }
                    className="flex items-center gap-1 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 shadow-sm"
                  >
                    <span>{step === 4 ? "Calculate Grant" : "Continue"}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Workflow steps */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
              ADVISORY PROCESS
            </span>
            <h2 className="text-3xl font-extrabold text-[#0c2340] font-display">
              Subsidy Disbursal Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepsInfo.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="relative bg-white border border-slate-100 p-6 rounded-2xl shadow-sm space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono text-blue-600 uppercase tracking-wide">
                      {st.stage}
                    </span>
                    <h4 className="text-sm font-bold text-[#0c2340] font-display mt-0.5">
                      {st.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-2 font-body">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-2xl font-bold text-[#0c2340] font-display">
              Subsidy Program FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-slate-100 p-6 bg-slate-50/50 space-y-2">
                <h4 className="text-xs font-bold text-[#0c2340] font-display">
                  {faq.q}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
