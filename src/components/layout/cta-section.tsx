"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CtaSection() {
  const [email, setEmail] = useState("")
  const [comments, setComments] = useState("")
  const [emailError, setEmailError] = useState("")
  const [commentsError, setCommentsError] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Сброс ошибок
    setEmailError("")
    setCommentsError("")
    
    let hasErrors = false
    
    // Валидация email
    if (!email.trim()) {
      setEmailError("Email is required")
      hasErrors = true
    } else if (!validateEmail(email)) {
      setEmailError("Enter correct email")
      hasErrors = true
    }
    
    // Валидация комментария
    if (!comments.trim()) {
      setCommentsError("Comment is required")
      hasErrors = true
    }
    
    if (hasErrors) {
      return
    }
    
    // Показываем уведомление об успешной отправке
    const alertDiv = document.createElement('div')
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        color: #333;
        text-align: center;
        border: 1px solid #e0e0e0;
      ">
        Application successfully sent!
      </div>
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 9999;
      " onclick="this.parentElement.remove()"></div>
    `
    document.body.appendChild(alertDiv)
    
    setTimeout(() => {
      if (alertDiv.parentElement) {
        alertDiv.remove()
      }
    }, 3000)
    
    // Очищаем форму
    setEmail("")
    setComments("")
  }
  return (
    <section id="contacts" className="py-12 bg-[#16202a] section-custom-border">
      <div className="w-[90%] md:w-[80%] lg:w-[80%] max-w-[1250px] mx-auto px-5 contacts-block">
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

            <form onSubmit={handleSubmit} className="w-full max-w-[436px] space-y-2">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full h-[52px] px-5 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 border-none ${emailError ? 'ring-2 ring-red-400' : ''}`}
                />
                {emailError && (
                  <p className="text-red-300 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="Your comments"
                  className={`w-full h-[52px] px-5 rounded-2xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 border-none ${commentsError ? 'ring-2 ring-red-400' : ''}`}
                />
                {commentsError && (
                  <p className="text-red-300 text-sm mt-1">{commentsError}</p>
                )}
              </div>

              <Button 
                type="submit"
                className="bg-gradient-to-b from-[#00b8a8] to-[#00524b] cursor-pointer hover:from-[#00a89a] hover:to-[#004a42] text-white font-semibold text-base uppercase min-w-[140px] h-[52px] rounded-2xl shadow-[0px_1px_1px_rgba(0,0,0,0.10),0px_2px_2px_rgba(0,0,0,0.09),0px_5px_3px_rgba(0,0,0,0.05),0px_10px_4px_rgba(0,0,0,0.01),0px_15px_4px_rgba(0,0,0,0.00)] mt-5 flex items-center gap-2"
              >
                send
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17,7l-10,10M17,7h-9M17,7v9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
