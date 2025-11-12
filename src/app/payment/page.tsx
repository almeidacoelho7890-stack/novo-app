"use client";

import { useState } from "react";
import { Check, Sparkles, Zap, Crown, Star, ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  const plans = [
    {
      id: "monthly",
      name: "Mensal",
      price: "R$ 49,90",
      period: "/mês",
      total: "R$ 49,90 cobrado mensalmente",
      badge: null,
      popular: false,
    },
    {
      id: "quarterly",
      name: "Trimestral",
      price: "R$ 39,90",
      period: "/mês",
      total: "R$ 119,70 cobrado a cada 3 meses",
      badge: "Economize 20%",
      popular: false,
      savings: "R$ 29,70",
    },
    {
      id: "yearly",
      name: "Anual",
      price: "R$ 24,90",
      period: "/mês",
      total: "R$ 298,80 cobrado anualmente",
      badge: "MELHOR OFERTA",
      popular: true,
      savings: "R$ 300,00",
    },
  ];

  const features = [
    { icon: TrendingUp, text: "Plano alimentar personalizado" },
    { icon: Star, text: "Receitas exclusivas e saudáveis" },
    { icon: Zap, text: "Contador de calorias inteligente" },
    { icon: Shield, text: "Acompanhamento nutricional" },
    { icon: Users, text: "Comunidade exclusiva" },
    { icon: Crown, text: "Suporte prioritário 24/7" },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 12kg em 3 meses",
      text: "O VitaFlow mudou minha vida! Nunca foi tão fácil manter uma dieta.",
      avatar: "👩",
    },
    {
      name: "João Santos",
      result: "Ganhei 8kg de massa",
      text: "Finalmente consegui ganhar peso de forma saudável e sustentável.",
      avatar: "👨",
    },
    {
      name: "Ana Costa",
      result: "Melhorei minha saúde",
      text: "Aprendi a comer melhor e me sinto com muito mais energia!",
      avatar: "👩‍🦰",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              VitaFlow
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Seu plano está pronto!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Comece sua jornada de
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              transformação hoje
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Junte-se a mais de 50.000 pessoas que já transformaram suas vidas com o VitaFlow
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative cursor-pointer rounded-3xl p-8 transition-all duration-300 transform hover:scale-[1.02] ${
                selectedPlan === plan.id
                  ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl scale-[1.02]"
                  : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    selectedPlan === plan.id ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span
                    className={`text-5xl font-bold ${
                      selectedPlan === plan.id ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      selectedPlan === plan.id ? "text-white/80" : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    selectedPlan === plan.id ? "text-white/80" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {plan.total}
                </p>
                {plan.savings && (
                  <div
                    className={`mt-3 text-sm font-semibold ${
                      selectedPlan === plan.id ? "text-white" : "text-emerald-600 dark:text-emerald-400"
                    }`}
                  >
                    💰 Economize {plan.savings}
                  </div>
                )}
              </div>

              <div
                className={`w-6 h-6 rounded-full border-2 mx-auto flex items-center justify-center ${
                  selectedPlan === plan.id
                    ? "border-white bg-white"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              >
                {selectedPlan === plan.id && (
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Tudo que você precisa para ter sucesso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Histórias de sucesso
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cancele quando quiser. Garantia de 7 dias ou seu dinheiro de volta.
          </p>
          <button className="px-12 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Cancele quando quiser
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              Suporte 24/7
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Pagamento 100% seguro e criptografado
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <Shield className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            <span className="text-2xl">🔒</span>
            <span className="text-2xl">💳</span>
            <span className="text-2xl">✅</span>
          </div>
        </div>
      </div>
    </div>
  );
}
