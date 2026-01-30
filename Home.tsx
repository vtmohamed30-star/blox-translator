import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight, Zap, Sword, Copy } from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const [isArabicToEnglish, setIsArabicToEnglish] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 font-sans">
      <div className="max-w-xl mx-auto space-y-6">
        <header className="text-center py-6">
          <div className="inline-block p-3 bg-[#39ff14] rounded-2xl mb-4 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <Sword className="text-black w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            BLOX AI TRANS
          </h1>
        </header>

        <div className="flex items-center justify-between bg-zinc-900/80 p-2 rounded-2xl border border-zinc-800">
          <div className={`flex-1 text-center py-2 rounded-xl font-bold transition-all ${isArabicToEnglish ? 'bg-[#39ff14] text-black' : 'text-zinc-500'}`}>
            {isArabicToEnglish ? "عربي / عرنسية" : "English"}
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsArabicToEnglish(!isArabicToEnglish)} className="mx-2 hover:bg-zinc-800 rounded-full">
            <ArrowLeftRight className="text-zinc-400" />
          </Button>
          <div className={`flex-1 text-center py-2 rounded-xl font-bold transition-all ${!isArabicToEnglish ? 'bg-[#bc13fe] text-white' : 'text-zinc-500'}`}>
            {!isArabicToEnglish ? "Arabic" : "English"}
          </div>
        </div>

        <div className="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden border">
          <Textarea
            placeholder={isArabicToEnglish ? "اكتب بالعربي أو العرنسية (hakada)..." : "Type in English..."}
            className="bg-transparent border-none text-xl p-6 min-h-[180px] focus-visible:ring-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="p-4 bg-zinc-950/50 border-t border-zinc-800 flex justify-end">
            <Button className={`rounded-full px-8 font-bold ${isArabicToEnglish ? 'bg-[#39ff14] text-black' : 'bg-[#bc13fe] text-white'}`}>
              <Zap className="w-4 h-4 mr-2 fill-current" /> ترجم الآن
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
