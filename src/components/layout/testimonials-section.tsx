export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Pay.inc has completely transformed how we manage our payment processing. The integration was seamless and saved us 20+ hours per week.",
      author: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      avatar: "/professional-woman-headshot.png",
    },
    {
      quote:
        "The real-time analytics and reporting features give us insights we never had before. Our decision-making has improved dramatically.",
      author: "Michael Chen",
      title: "Operations Director, GrowthCorp",
      avatar: "/professional-man-headshot.png",
    },
    {
      quote:
        "Implementation was seamless and the support team is outstanding. Pay.inc is now essential to our daily operations.",
      author: "Emily Rodriguez",
      title: "Founder, InnovateLab",
      avatar: "/professional-woman-glasses-headshot.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-[#f3f3f3]">
      <div className="w-[80%] max-w-[1250px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-center leading-[29px] uppercase text-[black] mb-5">
            What our customers say
          </h2>
          <p className="text-base font-medium text-center leading-[19px] text-[black]">
            Join thousands of satisfied businesses using Pay.inc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#ffffff] rounded-lg p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex text-[#1eb5a8] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#000000] leading-relaxed italic font-montserrat">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#000000] font-montserrat">{testimonial.author}</h4>
                  <p className="text-sm text-[#000000] font-montserrat">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
