import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Activity, Camera, FileVideo, ArrowRight, Stethoscope, Check, HeartPulse, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow"></div>
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50"></div>
      </div>

      {/* Header with PATH Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm animate-fade-in transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 animate-slide-in-right">
            <img
              src="/PATH_Logo_Color (1).png"
              alt="PATH Logo"
              className="h-12 w-auto transition-transform hover:scale-105 drop-shadow-sm"
            />
          </div>
          <Link to="/patients" className="animate-slide-in-right group" style={{ animationDelay: '0.1s' }}>
            <Button className="bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-full px-6">
              Patient Records
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="relative w-full rounded-[2.5rem] overflow-hidden mb-20 shadow-2xl border border-white/50 animate-scale-in group">
            {/* Split Layout Container */}
            <div className="grid lg:grid-cols-2 min-h-[650px]">

              {/* Left Section - Text Content */}
              <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 md:p-16 flex flex-col justify-center overflow-hidden">

                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                  <div className="absolute top-1/2 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 animate-fade-in-up space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-100 text-sm font-medium w-fit">
                    <Activity className="w-4 h-4 text-blue-400 animate-pulse" />
                    <span>Next-Gen Tele-ICU Platform</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                    Tele-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Sanjeevani</span>
                  </h1>

                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                    Revolutionizing critical care with real-time AI monitoring, instant vital extraction, and seamless patient management infrastructure.
                  </p>



                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                        <HeartPulse className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Real-time Vitals</h4>
                        <p className="text-slate-400 text-sm">Instant health tracking</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Section - Image/Visual */}
              <div className="relative hidden lg:block overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f172a]/80 z-10"></div>
                <img
                  src="/Gemini_Generated_Image_6xwqr56xwqr56xwq.png"
                  alt="ICU Monitoring"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />


              </div>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Camera className="w-8 h-8 text-purple-500" />,
                title: "AI Vision Analysis",
                desc: "Powered by Hugging Face VLMs and Tesseract OCR for high-precision vital sign extraction from monitor feeds.",
                color: "purple"
              },
              {
                icon: <Activity className="w-8 h-8 text-blue-500" />,
                title: "Live Monitoring",
                desc: "Real-time dashboard updates with sub-second latency for critical decision making.",
                color: "blue"
              },
              {
                icon: <FileVideo className="w-8 h-8 text-teal-500" />,
                title: "Patient Dashboards",
                desc: "Centralized patient profiles with detailed vital history logs, graphical trends, and instant dashboard access.",
                color: "teal"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <Link to="/patients" className="w-full max-w-2xl">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              </div>
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/PATH_Logo_Color (1).png" alt="PATH" className="h-8 w-auto brightness-0 invert opacity-80" />
              <span className="text-slate-400 text-sm"> 2025 Tele-Sanjeevani</span>
            </div>
            <p className="text-slate-500 text-sm">
              Empowering Healthcare with Artificial Intelligence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

