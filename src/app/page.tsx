"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingDown, 
  Calendar, 
  Apple, 
  Dumbbell, 
  Trophy,
  Flame,
  Droplets,
  Moon,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Crown,
  Zap,
  Star,
  Lock,
  Check
} from "lucide-react";

export default function FitFlowApp() {
  const [currentWeight, setCurrentWeight] = useState(78);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  
  const targetWeight = 65;
  const startWeight = 85;
  const progress = ((startWeight - currentWeight) / (startWeight - targetWeight)) * 100;
  const daysInPlan = 30;
  const currentDay = 12;

  const plans = [
    {
      id: "basic",
      name: "Plano Básico",
      price: "R$ 29,90",
      period: "/mês",
      icon: Target,
      color: "from-gray-500 to-gray-600",
      features: [
        "Plano alimentar semanal",
        "3 treinos por semana",
        "Acompanhamento de peso",
        "Dicas de nutrição",
        "Suporte por email"
      ],
      popular: false
    },
    {
      id: "premium",
      name: "Plano Premium",
      price: "R$ 49,90",
      period: "/mês",
      icon: Crown,
      color: "from-emerald-500 to-teal-600",
      features: [
        "Tudo do Plano Básico",
        "Treinos ilimitados personalizados",
        "Plano alimentar personalizado",
        "Acompanhamento diário",
        "Consultas com nutricionista",
        "Suporte prioritário 24/7",
        "Receitas exclusivas",
        "Grupo VIP no WhatsApp"
      ],
      popular: true
    },
    {
      id: "elite",
      name: "Plano Elite",
      price: "R$ 89,90",
      period: "/mês",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      features: [
        "Tudo do Plano Premium",
        "Personal trainer dedicado",
        "Videochamadas semanais",
        "Plano 100% personalizado",
        "Ajustes em tempo real",
        "Acesso a eventos exclusivos",
        "Kit de suplementos mensais",
        "Garantia de resultados"
      ],
      popular: false
    }
  ];

  const dailyTasks = [
    { id: 1, task: "Beber 2L de água", icon: Droplets, completed: true, premium: false },
    { id: 2, task: "Treino de 30min", icon: Dumbbell, completed: true, premium: false },
    { id: 3, task: "Comer 5 refeições", icon: Apple, completed: false, premium: false },
    { id: 4, task: "Dormir 8 horas", icon: Moon, completed: false, premium: false },
    { id: 5, task: "Consulta com nutricionista", icon: Star, completed: false, premium: true },
    { id: 6, task: "Treino personalizado avançado", icon: Trophy, completed: false, premium: true },
  ];

  const weeklyMeals = [
    { day: "Segunda", breakfast: "Omelete + Aveia", lunch: "Frango grelhado + Salada", dinner: "Peixe + Legumes" },
    { day: "Terça", breakfast: "Iogurte + Granola", lunch: "Carne magra + Arroz integral", dinner: "Sopa de legumes" },
    { day: "Quarta", breakfast: "Panqueca de banana", lunch: "Salmão + Quinoa", dinner: "Frango + Brócolis" },
    { day: "Quinta", breakfast: "Smoothie proteico", lunch: "Peru + Batata doce", dinner: "Atum + Salada" },
    { day: "Sexta", breakfast: "Ovos mexidos + Torrada", lunch: "Frango + Legumes", dinner: "Peixe grelhado" },
  ];

  const workouts = [
    { name: "Cardio HIIT", duration: "20min", calories: "250 kcal", type: "Queima de gordura", premium: false },
    { name: "Treino de Força", duration: "30min", calories: "180 kcal", type: "Tonificação", premium: false },
    { name: "Yoga & Alongamento", duration: "25min", calories: "120 kcal", type: "Flexibilidade", premium: false },
    { name: "Caminhada Rápida", duration: "40min", calories: "200 kcal", type: "Resistência", premium: false },
    { name: "CrossFit Avançado", duration: "45min", calories: "400 kcal", type: "Alta intensidade", premium: true },
    { name: "Pilates Personalizado", duration: "50min", calories: "220 kcal", type: "Fortalecimento", premium: true },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    // Simular ativação do plano premium
    if (planId === "premium" || planId === "elite") {
      setTimeout(() => {
        setIsPremium(true);
        alert(`🎉 Parabéns! Você ativou o ${plans.find(p => p.id === planId)?.name}!`);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">GoFit</h1>
                <p className="text-emerald-100 text-sm">Sua jornada de transformação</p>
              </div>
            </div>
            <div className="text-right">
              {isPremium && (
                <Badge className="bg-yellow-400 text-yellow-900 mb-2">
                  <Crown className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
              <p className="text-sm text-emerald-100">Dia {currentDay} de {daysInPlan}</p>
              <p className="text-2xl font-bold">{currentWeight} kg</p>
            </div>
          </div>

          {/* Progress Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-emerald-100" />
                <span className="text-white font-semibold">Progresso do Mês</span>
              </div>
              <span className="text-emerald-100 text-sm">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 bg-white/20" />
            <div className="flex justify-between mt-3 text-sm">
              <span className="text-emerald-100">Início: {startWeight}kg</span>
              <span className="text-white font-bold">Meta: {targetWeight}kg</span>
            </div>
          </Card>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6 -mt-8">
        <Tabs defaultValue="planos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white shadow-md">
            <TabsTrigger value="planos" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <CreditCard className="w-4 h-4 mr-2" />
              Planos
            </TabsTrigger>
            <TabsTrigger value="hoje" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Hoje
            </TabsTrigger>
            <TabsTrigger value="plano" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Alimentação
            </TabsTrigger>
            <TabsTrigger value="treinos" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              Treinos
            </TabsTrigger>
          </TabsList>

          {/* Tab: Planos */}
          <TabsContent value="planos" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Escolha Seu Plano</h2>
              <p className="text-gray-600">Invista na sua transformação com o plano ideal para você</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <Card 
                    key={plan.id}
                    className={`relative p-6 shadow-xl border-2 transition-all hover:scale-105 ${
                      plan.popular 
                        ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50" 
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Mais Popular
                        </Badge>
                      </div>
                    )}

                    <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-xl mb-6 text-white`}>
                      <Icon className="w-8 h-8 mb-2" />
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                        <span className="text-gray-500">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                          : "bg-gray-800 hover:bg-gray-900"
                      } text-white shadow-lg`}
                    >
                      {selectedPlan === plan.id ? "Plano Selecionado ✓" : "Assinar Agora"}
                    </Button>
                  </Card>
                );
              })}
            </div>

            {/* Garantia */}
            <Card className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Garantia de 7 Dias</h3>
                  <p className="text-blue-100">Não gostou? Devolvemos 100% do seu dinheiro</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-2xl font-bold mb-1">+5.000</p>
                  <p className="text-sm text-blue-100">Alunos transformados</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-2xl font-bold mb-1">4.9★</p>
                  <p className="text-sm text-blue-100">Avaliação média</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-2xl font-bold mb-1">92%</p>
                  <p className="text-sm text-blue-100">Taxa de sucesso</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab: Hoje */}
          <TabsContent value="hoje" className="space-y-6">
            {/* Daily Tasks */}
            <Card className="p-6 shadow-xl border-0 bg-white">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-800">Tarefas de Hoje</h2>
              </div>
              <div className="space-y-3">
                {dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all relative ${
                      task.completed
                        ? "bg-emerald-50 border-2 border-emerald-200"
                        : task.premium && !isPremium
                        ? "bg-gray-100 border-2 border-gray-300 opacity-60"
                        : "bg-gray-50 border-2 border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    {task.premium && !isPremium && (
                      <div className="absolute top-2 right-2">
                        <Lock className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    <div className={`p-2 rounded-lg ${task.completed ? "bg-emerald-500" : task.premium && !isPremium ? "bg-gray-400" : "bg-gray-300"}`}>
                      <task.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`flex-1 font-medium ${task.completed ? "text-emerald-700" : task.premium && !isPremium ? "text-gray-500" : "text-gray-700"}`}>
                      {task.task}
                      {task.premium && !isPremium && (
                        <Badge className="ml-2 bg-yellow-400 text-yellow-900 text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </span>
                    {task.completed && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl border-0">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-6 h-6" />
                  <span className="text-sm font-medium opacity-90">Calorias Queimadas</span>
                </div>
                <p className="text-3xl font-bold">420 kcal</p>
                <p className="text-sm opacity-80 mt-1">Meta: 500 kcal</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl border-0">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="w-6 h-6" />
                  <span className="text-sm font-medium opacity-90">Água Consumida</span>
                </div>
                <p className="text-3xl font-bold">1.5 L</p>
                <p className="text-sm opacity-80 mt-1">Meta: 2.0 L</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl border-0">
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-6 h-6" />
                  <span className="text-sm font-medium opacity-90">Sequência</span>
                </div>
                <p className="text-3xl font-bold">12 dias</p>
                <p className="text-sm opacity-80 mt-1">Recorde: 15 dias</p>
              </Card>
            </div>
          </TabsContent>

          {/* Tab: Plano Alimentar */}
          <TabsContent value="plano" className="space-y-6">
            <Card className="p-6 shadow-xl border-0 bg-white">
              <div className="flex items-center gap-2 mb-6">
                <Apple className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-800">Plano Alimentar Semanal</h2>
                {!isPremium && (
                  <Badge className="ml-auto bg-yellow-400 text-yellow-900">
                    <Crown className="w-3 h-3 mr-1" />
                    Upgrade para personalizar
                  </Badge>
                )}
              </div>
              <div className="space-y-4">
                {weeklyMeals.map((meal, index) => (
                  <div key={index} className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50 rounded-r-lg">
                    <h3 className="font-bold text-emerald-700 mb-2">{meal.day}</h3>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p><span className="font-semibold">Café:</span> {meal.breakfast}</p>
                      <p><span className="font-semibold">Almoço:</span> {meal.lunch}</p>
                      <p><span className="font-semibold">Jantar:</span> {meal.dinner}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <h3 className="text-xl font-bold mb-4">Dicas do Mês</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Beba água antes das refeições para aumentar a saciedade</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Durma pelo menos 7-8 horas por noite para melhor recuperação</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Faça refeições a cada 3-4 horas para manter o metabolismo ativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Evite alimentos processados e priorize comida de verdade</span>
                </li>
              </ul>
            </Card>
          </TabsContent>

          {/* Tab: Treinos */}
          <TabsContent value="treinos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workouts.map((workout, index) => (
                <Card 
                  key={index} 
                  className={`p-6 shadow-xl border-0 transition-all relative ${
                    workout.premium && !isPremium 
                      ? "bg-gray-100 opacity-70" 
                      : "bg-white hover:shadow-2xl"
                  }`}
                >
                  {workout.premium && !isPremium && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-yellow-400 text-yellow-900">
                        <Lock className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{workout.name}</h3>
                      <span className="text-sm text-emerald-600 font-medium">{workout.type}</span>
                    </div>
                    <div className={`p-3 rounded-xl ${workout.premium && !isPremium ? "bg-gray-300" : "bg-emerald-100"}`}>
                      <Dumbbell className={`w-6 h-6 ${workout.premium && !isPremium ? "text-gray-500" : "text-emerald-600"}`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {workout.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      {workout.calories}
                    </span>
                  </div>
                  <Button 
                    disabled={workout.premium && !isPremium}
                    className={`w-full ${
                      workout.premium && !isPremium
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    } text-white shadow-lg`}
                  >
                    {workout.premium && !isPremium ? "Assine Premium" : "Iniciar Treino"}
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="p-6 shadow-xl border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6" />
                <h3 className="text-xl font-bold">Conquistas do Mês</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold mb-1">7kg</p>
                  <p className="text-sm opacity-90">Perdidos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold mb-1">24</p>
                  <p className="text-sm opacity-90">Treinos</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold mb-1">5.2k</p>
                  <p className="text-sm opacity-90">Calorias</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold mb-1">36L</p>
                  <p className="text-sm opacity-90">Água</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
