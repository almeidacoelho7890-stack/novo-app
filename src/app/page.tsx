"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Target, Scale, TrendingUp, Calendar, Activity, Sparkles } from "lucide-react";

type QuizData = {
  goal: string;
  currentWeight: string;
  targetWeight: string;
  height: string;
  age: string;
  activityLevel: string;
};

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    goal: "",
    currentWeight: "",
    targetWeight: "",
    height: "",
    age: "",
    activityLevel: "",
  });

  const questions = [
    {
      id: "goal",
      title: "Qual é o seu objetivo?",
      subtitle: "Escolha o que melhor descreve sua meta",
      icon: Target,
      options: [
        { value: "lose", label: "Perder Peso", emoji: "🎯" },
        { value: "gain", label: "Ganhar Massa", emoji: "💪" },
        { value: "maintain", label: "Manter Peso", emoji: "⚖️" },
        { value: "health", label: "Vida Saudável", emoji: "🌱" },
      ],
    },
    {
      id: "currentWeight",
      title: "Qual é o seu peso atual?",
      subtitle: "Seja honesto, isso nos ajuda a personalizar seu plano",
      icon: Scale,
      type: "input",
      placeholder: "Ex: 75",
      unit: "kg",
    },
    {
      id: "targetWeight",
      title: "Qual é o seu peso ideal?",
      subtitle: "Defina uma meta realista e alcançável",
      icon: TrendingUp,
      type: "input",
      placeholder: "Ex: 68",
      unit: "kg",
    },
    {
      id: "height",
      title: "Qual é a sua altura?",
      subtitle: "Precisamos calcular seu IMC",
      icon: Activity,
      type: "input",
      placeholder: "Ex: 170",
      unit: "cm",
    },
    {
      id: "age",
      title: "Qual é a sua idade?",
      subtitle: "Isso nos ajuda a calcular suas necessidades calóricas",
      icon: Calendar,
      type: "input",
      placeholder: "Ex: 28",
      unit: "anos",
    },
    {
      id: "activityLevel",
      title: "Qual é o seu nível de atividade?",
      subtitle: "Seja realista sobre sua rotina atual",
      icon: Sparkles,
      options: [
        { value: "sedentary", label: "Sedentário", description: "Pouco ou nenhum exercício" },
        { value: "light", label: "Levemente Ativo", description: "Exercício 1-3 dias/semana" },
        { value: "moderate", label: "Moderadamente Ativo", description: "Exercício 3-5 dias/semana" },
        { value: "very", label: "Muito Ativo", description: "Exercício 6-7 dias/semana" },
      ],
    },
  ];

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  const handleOptionSelect = (value: string) => {
    setQuizData({ ...quizData, [currentQuestion.id]: value });
    
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        handleFinish();
      }
    }, 300);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    // Simula processamento
    setTimeout(() => {
      router.push("/payment");
    }, 1000);
  };

  const Icon = currentQuestion.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header com Logo */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              VitaFlow
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {step + 1} de {questions.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Question Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-6 transform transition-transform hover:scale-110">
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {currentQuestion.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {currentQuestion.subtitle}
            </p>

            {/* Options or Input */}
            {currentQuestion.options ? (
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      quizData[currentQuestion.id as keyof QuizData] === option.value
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {option.emoji && (
                        <span className="text-3xl">{option.emoji}</span>
                      )}
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white text-lg">
                          {option.label}
                        </div>
                        {option.description && (
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {option.description}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleInputSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="number"
                    value={quizData[currentQuestion.id as keyof QuizData]}
                    onChange={(e) =>
                      setQuizData({ ...quizData, [currentQuestion.id]: e.target.value })
                    }
                    placeholder={currentQuestion.placeholder}
                    className="w-full px-6 py-5 text-2xl font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 outline-none transition-all"
                    required
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                    {currentQuestion.unit}
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={!quizData[currentQuestion.id as keyof QuizData]}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {step === questions.length - 1 ? "Finalizar" : "Continuar"}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Navigation */}
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              ← Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
