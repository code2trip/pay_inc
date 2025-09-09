"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
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
        Incorrect password or email
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
    
    // Автоматически убираем алерт через 3 секунды
    setTimeout(() => {
      if (alertDiv.parentElement) {
        alertDiv.remove()
      }
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#ececec] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Логотип */}
        <div className="text-center mb-8">
          <img
            src="/logo_payinc.svg"
            alt="Pay.inc"
            className="h-12 w-auto mx-auto mb-4 cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Sign In
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B8A8] focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00B8A8] focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-b from-[#00b8a8] to-[#00524b] hover:from-[#00a89a] hover:to-[#004a42] text-white font-semibold text-base h-12 rounded-xl"
            >
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
