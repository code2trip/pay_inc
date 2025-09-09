import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contacts" className="py-12 bg-[#16202a] section-custom-border">
      <div className="w-[80%] max-w-[1250px] mx-auto px-5">
        <div className="bg-gradient-to-b from-[#00b8a8] to-[#00524b] rounded-[32px] flex flex-col lg:flex-row items-center">
          {/* Изображение */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-center">
            <img 
              src="/image_a8d75ed0.png" 
              alt="Payment Experience" 
              className="h-[402px] w-[338px] max-w-full object-contain" 
            />
          </div>
          
          {/* Контент */}
          <div className="w-full lg:w-[50%] px-4 lg:px-[15px] py-5 flex flex-col items-center lg:items-start">
            <h2 className="text-[32px] font-medium text-white text-center lg:text-left leading-8 mb-5">
              Ready to transform
              <br />
              your Payment Experience?
            </h2>
            
            <p className="text-sm font-medium text-white text-center lg:text-left leading-[17px] mb-5">
              Leave your email and comments
              <br />
              — we'll contact you with details
            </p>

            <div className="w-full max-w-[436px] space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[52px] px-5 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 border-none"
              />
              <input
                type="text"
                placeholder="Your comments"
                className="w-full h-[52px] px-5 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 border-none"
              />
            </div>

            <Button className="bg-gradient-to-b from-[#00b8a8] to-[#00524b] hover:from-[#00a89a] hover:to-[#004a42] text-white font-semibold text-base uppercase min-w-[140px] h-[52px] rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.10),0px_2px_2px_rgba(0,0,0,0.09),0px_5px_3px_rgba(0,0,0,0.05),0px_10px_4px_rgba(0,0,0,0.01),0px_15px_4px_rgba(0,0,0,0.00)] mt-5 flex items-center gap-2">
              send
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17,7l-10,10M17,7h-9M17,7v9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
