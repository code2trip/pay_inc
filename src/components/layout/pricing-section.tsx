import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 team members",
        "Basic automation workflows",
        "Email support",
        "5GB storage",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced automation workflows",
        "Priority support",
        "50GB storage",
        "Advanced analytics",
        "API integrations",
        "Custom reporting",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited team members",
        "Custom workflows",
        "24/7 dedicated support",
        "Unlimited storage",
        "Enterprise analytics",
        "Custom integrations",
        "White-label options",
        "SLA guarantee",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-center leading-[29px] uppercase text-[black] mb-5">
            Choose your plan
          </h2>
          <p className="text-base font-medium text-center leading-[19px] text-[black]">
            Scalable solutions for businesses of every size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                plan.popular ? "bg-[#1eb5a8] text-white shadow-2xl scale-105" : "bg-[#f3f3f3] text-[#000000] shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-white text-[#1eb5a8] px-3 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg">{plan.period}</span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-white/80" : "text-[#000000]"}`}>{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className={`mr-3 ${plan.popular ? "text-white" : "text-[#1eb5a8]"}`}>✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-[#1eb5a8] hover:bg-gray-100"
                    : "bg-[#1eb5a8] text-white hover:bg-[#01b2a3]"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
